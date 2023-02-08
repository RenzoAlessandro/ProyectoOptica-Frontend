import { Injectable, PipeTransform } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';


import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortColumn, SortDirection } from './sortable.directive';
import { CajaService } from 'src/app/services/caja.service';
import { CajaModel } from 'src/models/caja';

interface SearchResult {
  invoices: CajaModel[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string | number | Date | boolean | CajaModel[], v2: string | number | Date | boolean | CajaModel[]) =>
  v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(
  invoices: CajaModel[],
  column: SortColumn,
  direction: string
): CajaModel[] {
  if (direction === '' || column === '') {
    return invoices;
  } else {
    return [...invoices].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(invoice: CajaModel, term: string, pipe: PipeTransform) {
  console.log(invoice)
  return String(invoice.monto).toLowerCase().includes(term) ||
    invoice.descripcion.toLowerCase().includes(term.toLowerCase()) ||
    String(invoice.encargado).toLowerCase().includes(term.toLowerCase())
    ;
}

@Injectable({ providedIn: 'root' })
export class InvoiceService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _searchE$ = new Subject<void>();
  private _invoices$ = new BehaviorSubject<CajaModel[]>([]);
  private _egresos$ = new BehaviorSubject<CajaModel[]>([]);
  private _total$ = new BehaviorSubject<number>(0);
  private _totalE$ = new BehaviorSubject<number>(0);
  ingresoList: CajaModel[] = [];
  egresoList: CajaModel[] = [];
  private _state: State = {
    page: 1,
    pageSize: 5,
    searchTerm: '',
    sortColumn: '',
    sortDirection: '',
  };

  constructor(
    private pipe: DecimalPipe,
    private cajaService: CajaService
    ) {
      let fIni: Date = new Date(Date.now());
    fIni.setHours(0,0,1);
    let fFin: Date = new Date(Date.now());
    fFin.setHours(23,59,0);
    fIni = new Date(fIni.getTime() - fIni.getTimezoneOffset()*60000)
    fFin = new Date(fFin.getTime() - fFin.getTimezoneOffset()*60000)
    console.log(fIni.toISOString(),'-',fFin.toISOString())
    this.getListIngresos(fIni.toISOString(),fFin.toISOString());
    this.getListEgresos(fIni.toISOString(),fFin.toISOString());
  }

  get invoices$() {
    return this._invoices$.asObservable();
  }
  get egresos$() {
    return this._egresos$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get totalE$() {
    return this._totalE$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }
  get page() {
    return this._state.page;
  }
  get pageSize() {
    return this._state.pageSize;
  }
  get searchTerm() {
    return this._state.searchTerm;
  }

  get searchTermE() {
    return this._state.searchTerm;
  }

  set page(page: number) {
    this._set({ page });
  }
  set pageSize(pageSize: number) {
    this._set({ pageSize });
  }
  set searchTerm(searchTerm: string) {
    this._set({ searchTerm });
  }
  set searchTermE(searchTerm: string) {
    this._setE({ searchTerm });
  }
  set sortColumn(sortColumn: SortColumn) {
    this._set({ sortColumn });
  }
  set sortDirection(sortDirection: SortDirection) {
    this._set({ sortDirection });
  }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _setE(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._searchE$.next();
  }

  private _search(): Observable<SearchResult> {
    const {
      sortColumn,
      sortDirection,
      pageSize,
      page,
      searchTerm,
    } = this._state;

    // 1. sort
    let invoices = sort(this.ingresoList, sortColumn, sortDirection);

    // 2. filter
    invoices = invoices.filter((customer) =>
      matches(customer, searchTerm, this.pipe)
    );
    const total = invoices.length;

    // 3. paginate
    invoices = invoices.slice(
      (page - 1) * pageSize,
      (page - 1) * pageSize + pageSize
    );
    return of({ invoices, total });
  }

  private _searchE(): Observable<SearchResult> {
    const {
      sortColumn,
      sortDirection,
      pageSize,
      page,
      searchTerm,
    } = this._state;

    // 1. sort
    let invoices = sort(this.egresoList, sortColumn, sortDirection);

    // 2. filter
    invoices = invoices.filter((customer) =>
      matches(customer, searchTerm, this.pipe)
    );
    const total = invoices.length;

    // 3. paginate
    invoices = invoices.slice(
      (page - 1) * pageSize,
      (page - 1) * pageSize + pageSize
    );
    return of({ invoices, total });
  }

  getListIngresos(fIni:string, fFin:string) {
    
    this.cajaService.getIngresosbyDate(fIni,fFin).subscribe( res=> {
      console.log("entre..",res);
      this.ingresoList = res;
      this._search$
      .pipe(
        tap(() => this._loading$.next(true)),
        debounceTime(200),
        switchMap(() => this._search()),
        delay(200),
        tap(() => this._loading$.next(false))
      )
      .subscribe((result) => {
        this._invoices$.next(result.invoices);
        this._total$.next(result.total);
      });

    this._search$.next();
    }

    );
  }
  getListEgresos(fIni:string, fFin:string) {

    this.cajaService.getEgresosbyDate(fIni,fFin).subscribe( res=> {
      console.log("entre..",res);
      this.egresoList = res;
      this._searchE$
      .pipe(
        tap(() => this._loading$.next(true)),
        debounceTime(200),
        switchMap(() => this._searchE()),
        delay(200),
        tap(() => this._loading$.next(false))
      )
      .subscribe((result) => {
        this._egresos$.next(result.invoices);
        this._totalE$.next(result.total);
      });

    this._searchE$.next();
    }

    );
  }
}
