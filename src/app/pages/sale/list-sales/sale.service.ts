import { Injectable, PipeTransform } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { Transaction } from './transaction';
import { TRANSACTIONS } from './transactions';
import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortColumn, SortDirection } from './sortable.directive';
import { VentaService } from 'src/app/services/venta.service';
import { VentasModel } from 'src/models/venta';

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

const compare = (v1: string | number | boolean, v2: string | number | boolean) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

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
  return transaction.observaciones.toLowerCase().includes(term)
    || transaction.id_sede.toLowerCase().includes(term.toLowerCase())
    //|| transaction.date.toLowerCase().includes(term)
    //|| transaction.id_sede.toLowerCase().includes(term)
    //|| transaction.id_cliente.toLowerCase().includes(term)
    //|| pipe.transform(transaction.index).includes(term);
}

@Injectable({ providedIn: 'root' })
export class TransactionService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _transactions$ = new BehaviorSubject<VentasModel[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

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
    private ventaService: VentaService
    ) {
    this.getAllVentas();
  }

  get transactions$() { return this._transactions$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

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
    this.ventaService.getVentas().subscribe( res=>{
      this.ventaList = res;
      console.log(res);
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