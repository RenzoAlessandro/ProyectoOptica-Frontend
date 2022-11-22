import { Injectable, PipeTransform } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { Venta } from './addsale.model';
import { VENTAS } from './data';
import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortColumn, SortDirection } from './sortable.directive';

interface SearchResult {
  Addsales: Venta[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(Addsales: Venta[], column: SortColumn, direction: string): Venta[] {
  if (direction === '' || column === '') {
    return Addsales;
  } else {
    return [...Addsales].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(Addsale: Venta, term: string, pipe: PipeTransform) {
  return Addsale.id.toLowerCase().includes(term)
  || Addsale.detalle.toLowerCase().includes(term.toLowerCase())
  || Addsale.cantidad.toLowerCase().includes(term)
  || Addsale.precio.toLowerCase().includes(term)
  || Addsale.total.toLowerCase().includes(term)
}

@Injectable({ providedIn: 'root' })
export class AddsaleService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _Addsales$ = new BehaviorSubject<Venta[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(private pipe: DecimalPipe) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._Addsales$.next(result.Addsales);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  get Addsales$() { return this._Addsales$.asObservable(); }
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
    let Addsales = sort(VENTAS, sortColumn, sortDirection);

    // 2. filter
    Addsales = Addsales.filter(Addsale => matches(Addsale, searchTerm, this.pipe));
    const total = Addsales.length;

    // 3. paginate
    Addsales = Addsales.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ Addsales, total });
  }
}