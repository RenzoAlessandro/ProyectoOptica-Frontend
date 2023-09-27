import { Injectable, PipeTransform } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortColumn, SortDirection } from './sortable.directive';
import { VentaService } from 'src/app/services/venta.service';
import { VentasModel } from 'src/models/venta';
import { MonturasModel } from 'src/models/monturas';
import { LunasModel } from 'src/models/lunas';
import { AccesorioModel } from 'src/models/accesorio';
import { TipoVentaModel } from 'src/models/tipo_venta';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MedidasModel } from 'src/models/medidas';

interface SearchResult {
  transactions: VentasModel[];
  total: number;
}
interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string | number | boolean | MonturasModel[] | LunasModel[] | AccesorioModel[] | Date | TipoVentaModel[] | MedidasModel[], v2: string | number | boolean | MonturasModel[] | LunasModel[] | AccesorioModel[] | Date | TipoVentaModel[] | MedidasModel[]) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(transactions: VentasModel[], column: SortColumn, direction: string): VentasModel[] {
  if (direction === '' || column === '') {
    return transactions;
  } else {
    return [...transactions].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(transaction: VentasModel, term: string, pipe: PipeTransform) {
  return String(transaction.fecha_creacion_venta)?.toLowerCase().includes(term.toLowerCase())
  || transaction.nombre_cliente?.toLowerCase().includes(term.toLowerCase())
  || String(transaction.tipo_venta[0].precio_total)?.toLowerCase().includes(term.toLowerCase())
  || transaction.nombre_vendedor?.toLowerCase().includes(term.toLowerCase());

}

@Injectable({ providedIn: 'root' })
export class TransactionService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _total$ = new BehaviorSubject<number>(0);
  private _mostrar$ = new BehaviorSubject<boolean>(false);
  private _ventas$ = new BehaviorSubject<VentasModel[]>([]);

  ventaList: VentasModel[] = [];

  private _state: State = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };
  constructor(
    private pipe: DecimalPipe,
    private ventaService: VentaService,
    private usuarioService: UsuarioService
    ) {
    this.getAllVentas();
  }

  get transactions$() { return this._ventas$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }
  get mostrar() { return this._mostrar$.asObservable();}

  set page(page: number) { this._set({ page }); }
  set pageSize(pageSize: number) { this._set({ pageSize }); }
  set searchTerm(searchTerm: string) { this._set({ searchTerm }); }
  set sortColumn(sortColumn: SortColumn) { this._set({ sortColumn }); }
  set sortDirection(sortDirection: SortDirection) { this._set({ sortDirection }); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  updateTable (data) {
    this.ventaList = data;
      this._mostrar$.next(true);
      this._search$.pipe(
        tap(() => this._loading$.next(true)),
        debounceTime(200),
        switchMap(() => this._search()),
        delay(200),
        tap(() => this._loading$.next(false))
      ).subscribe(result => {
        this._ventas$.next(result.transactions);
        this._total$.next(result.total);
      });
  
      this._search$.next();
  }
  private _search(): Observable<SearchResult> {
    const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

    // 1. sort
    let transactions = sort(this.ventaList, sortColumn, sortDirection);

    // 2. filter
    transactions = transactions.filter(transaction => matches(transaction, searchTerm, this.pipe));
    const total = transactions.length;

    // 3. paginate
    
    transactions = transactions.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ transactions, total });
  }
  //Servicio 
  getAllVentas() {
    this.ventaService.getVentasbySede(this.usuarioService.getSedebyUser()).subscribe( res=>{
      this.ventaList = res;
      this._mostrar$.next(true);
      this._search$.pipe(
        tap(() => this._loading$.next(true)),
        debounceTime(200),
        switchMap(() => this._search()),
        delay(200),
        tap(() => this._loading$.next(false))
      ).subscribe(result => {
        this._ventas$.next(result.transactions);
        this._total$.next(result.total);
      });
  
      this._search$.next();
    })
  }
}