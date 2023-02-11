import { Injectable, PipeTransform } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortColumn, SortDirection } from './sortable.directive';
import { CajaService } from 'src/app/services/caja.service';
import { CajaModel } from 'src/models/caja';

interface SearchResult {
  transactions: CajaModel[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string | number | boolean |Date, v2: string | number | boolean |Date) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(transactions: CajaModel[], column: SortColumn, direction: string): CajaModel[] {
  if (direction === '' || column === '') {
    return transactions;
  } else {
    return [...transactions].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(transaction: CajaModel, term: string, pipe: PipeTransform) {
  return transaction.id_caja.toLowerCase().includes(term)
    || String(transaction.fecha_creacion_caja).toLowerCase().includes(term.toLowerCase())
    || String(transaction.monto).toLowerCase().includes(term)
    || transaction.metodo_pago.toLowerCase().includes(term)
    //|| transaction.status.toLowerCase().includes(term)
    //|| pipe.transform(transaction.index).includes(term);
}

@Injectable({ providedIn: 'root' })
export class TransactionService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _transactions$ = new BehaviorSubject<CajaModel[]>([]);
  private _total$ = new BehaviorSubject<number>(0);
  cajaList: Array<CajaModel> = [];
  private _state: State = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };
  

  constructor(
    private pipe: DecimalPipe,
    private cajaService: CajaService
  ) {
    let fIni: Date = new Date();
    let firstDay = new Date(fIni.getFullYear(), fIni.getMonth(), 1);
    let lastDay = new Date(fIni.getFullYear(), fIni.getMonth() + 1, 0);
    firstDay.setHours(0, 0, 1);
    lastDay.setHours(23, 59, 0);

    this.getListIngresosEgresos(firstDay,lastDay);
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
    let transactions = sort(this.cajaList, sortColumn, sortDirection);

    // 2. filter
    transactions = transactions.filter(transaction => matches(transaction, searchTerm, this.pipe));
    const total = transactions.length;

    // 3. paginate
    transactions = transactions.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ transactions, total });
  }

  getListIngresosEgresos(fIni:Date,fFin:Date) {

    /* this.cajaService.getIngresosbyDate(fIni,fFin).subscribe(res=>{
      this.cajaList = res;
      this.cajaService.getEgresosbyDate(fIni,fFin).subscribe(res=>{
        this.cajaList = [...res,...this.cajaList]; */
        
        //for(let i=0;i< this.cajaList.length;i++) {
          /* let date = new Date(this.cajaList[0].fecha_creacion_caja);
          let day = date.getDay();
          let month = date.getMonth();
          let year = date.getFullYear();
          let tmp = [];
          tmp = this.cajaList.filter(caja =>{
            let date = new Date(caja.fecha_creacion_caja);
            let day2 = date.getDay();
            let month2 = date.getMonth();
            let year2 = date.getFullYear();
            return (day == day2 && month == month2 && year == year2 )
          })*/
        //}

        this._search$.pipe(
          tap(() => this._loading$.next(true)),
          debounceTime(200),
          switchMap(() => this._search()),
          delay(200),
          tap(() => this._loading$.next(false))
        ).subscribe(result => {
          this._transactions$.next(result.transactions);
          this._total$.next(result.total);
        });
    
        this._search$.next();
      /* })
    }) */
  }
}