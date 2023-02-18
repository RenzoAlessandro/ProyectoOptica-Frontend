import { Injectable, PipeTransform } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';


import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortColumn, SortDirection } from './sortable.directive';
import { CajaService } from 'src/app/services/caja.service';
import { CajaModel } from 'src/models/caja';
import { UsuarioService } from 'src/app/services/usuario.service';

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
  return String(invoice.monto).toLowerCase().includes(term) ||
    invoice.descripcion.toLowerCase().includes(term.toLowerCase()) ||
    String(invoice.nombre_encargado).toLowerCase().includes(term.toLowerCase())
    ;
}

@Injectable({ providedIn: 'root' })
export class EgresoService {
  private _loadingE$ = new BehaviorSubject<boolean>(true);
  private _searchE$ = new Subject<void>();
  private _egresos$ = new BehaviorSubject<CajaModel[]>([]);
  private _totalE$ = new BehaviorSubject<number>(0);
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
    private cajaService: CajaService,
    private usuarioService: UsuarioService
    ) {
      let fIni: Date = new Date(Date.now());
    fIni.setHours(0,0,1);
    let fFin: Date = new Date(Date.now());
    fFin.setHours(23,59,0);
    this.getListEgresos(fIni,fFin);
  }

  updateTableEgreso (data) {
    this.egresoList = data;
      
      this._searchE$
      .pipe(
        tap(() => this._loadingE$.next(true)),
        debounceTime(200),
        switchMap(() => this._searchE()),
        delay(200),
        tap(() => this._loadingE$.next(false))
      )
      .subscribe((result) => {
        this._egresos$.next(result.invoices);
        this._totalE$.next(result.total);
      });

    this._searchE$.next();
  }

  get egresos$() {
    return this._egresos$.asObservable();
  }
  get totalE$() {
    return this._totalE$.asObservable();
  }
  get loadingE$() {
    return this._loadingE$.asObservable();
  }
  get pageE() {
    return this._state.page;
  }
  get pageSizeE() {
    return this._state.pageSize;
  }
  get searchTermE() {
    return this._state.searchTerm;
  }


  set pageE(page: number) {
    this._setE({ page });
  }
  set pageSizeE(pageSize: number) {
    this._setE({ pageSize });
  }
  set searchTermE(searchTerm: string) {
    this._setE({ searchTerm });
  }
  set sortColumnE(sortColumn: SortColumn) {
    this._setE({ sortColumn });
  }
  set sortDirectionE(sortDirection: SortDirection) {
    this._setE({ sortDirection });
  }

  private _setE(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._searchE$.next();
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

  getListEgresos(fIni:Date, fFin:Date) {

    this.cajaService.getEgresosbyDate(fIni,fFin,this.usuarioService.getSedebyUser()).subscribe( res=> {
      this.egresoList = res;
      console.log(res)
      this._searchE$
      .pipe(
        tap(() => this._loadingE$.next(true)),
        debounceTime(200),
        switchMap(() => this._searchE()),
        delay(200),
        tap(() => this._loadingE$.next(false))
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
