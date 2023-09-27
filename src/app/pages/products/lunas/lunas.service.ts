import { Injectable, PipeTransform } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortColumn, SortDirection } from './sortable.directive';
import { LunasModel } from 'src/models/lunas';
import { ProductosService } from 'src/app/services/productos.service';

interface SearchResult {
  customers: LunasModel[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string | number | Date | boolean | Array<any>, v2: string | number | Date | boolean| Array<any>) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(customers: LunasModel[], column: SortColumn, direction: string): LunasModel[] {
  if (direction === '' || column === '') {
    return customers;
  } else {
    return [...customers].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(customer: LunasModel, term: string, pipe: PipeTransform) {
  return customer.material?.toLowerCase().includes(term.toLowerCase())
  || String(customer.precio_luna_c).toLowerCase().includes(term.toLowerCase())
  || String(customer.precio_luna_v).toLowerCase().includes(term.toLowerCase())
  || String(customer.cantidad).toLowerCase().includes(term)
  || (customer.fecha_creacion_luna).toLocaleString().includes(term.toLowerCase());
}

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _customers$ = new BehaviorSubject<LunasModel[]>([]);
  private _total$ = new BehaviorSubject<number>(0);
  private _mostrar$ = new BehaviorSubject<boolean>(false);
  lunasList: LunasModel[] = [];
  private _state: State = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(
    private pipe: DecimalPipe,
    private lunasService: ProductosService,
    private usuarioService: UsuarioService
    ) {
    this.getListLunas();
  }

  updateTable (data) {
    this.lunasList = data;
    const propiedad = {
      isSelected: false
    }
    this.lunasList.forEach(elem => {
      Object.assign(elem,propiedad)
    })
    this._mostrar$.next(true);
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._customers$.next(result.customers);
      this._total$.next(result.total);
    });

    this._search$.next();
  }
  
  get customers$() { return this._customers$.asObservable(); }
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

  private _search(): Observable<SearchResult> {
    const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

    // 1. sort
    let customers = sort(this.lunasList, sortColumn, sortDirection);

    // 2. filter
    customers = customers.filter(customer => matches(customer, searchTerm, this.pipe));
    const total = customers.length;

    // 3. paginate
    customers = customers.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ customers, total });
  }

  /**
   * Funcion para obtener la lista de clientes desde el backend
   */
   getListLunas() {
    this.lunasService.getProductosbySede(this.usuarioService.getSedebyUser(),'luna').subscribe( res=>{
      
      this.lunasList = res;
      const propiedad = {
        isSelected: false
      }
      this.lunasList.forEach(elem => {
        Object.assign(elem,propiedad)
      })
      this._mostrar$.next(true);
      this._search$.pipe(
        tap(() => this._loading$.next(true)),
        debounceTime(200),
        switchMap(() => this._search()),
        delay(200),
        tap(() => this._loading$.next(false))
      ).subscribe(result => {
        this._customers$.next(result.customers);
        this._total$.next(result.total);
      });
  
      this._search$.next();
    })  
  }
}