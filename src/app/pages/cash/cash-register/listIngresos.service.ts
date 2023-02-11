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
  console.log(invoice)
  return String(invoice.monto).toLowerCase().includes(term) ||
    invoice.descripcion.toLowerCase().includes(term.toLowerCase()) ||
    String(invoice.encargado).toLowerCase().includes(term.toLowerCase())
    ;
}

@Injectable({ providedIn: 'root' })
export class IngresoService {
  private _loadingI$ = new BehaviorSubject<boolean>(true);
  private _searchI$ = new Subject<void>();
  private _ingreso$ = new BehaviorSubject<CajaModel[]>([]);
  private _totalI$ = new BehaviorSubject<number>(0);
  ingresoList: CajaModel[] = [];
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
    //fIni = new Date(fIni.getTime() - fIni.getTimezoneOffset()*60000)
    //fFin = new Date(fFin.getTime() - fFin.getTimezoneOffset()*60000)
    console.log(fIni,'-',fFin)
    this.getListIngresos(fIni,fFin);
  }

  updateTableIngreso (data) {
    this._ingreso$.next(data);
  }
  get ingreso$() {
    return this._ingreso$.asObservable();
  }
  get totalI$() {
    return this._totalI$.asObservable();
  }
  get loadingI$() {
    return this._loadingI$.asObservable();
  }

  get pageI() {
    return this._state.page;
  }
  get pageSizeI() {
    return this._state.pageSize;
  }
  get searchTermI() {
    return this._state.searchTerm;
  }

  set pageI(page: number) {
    this._setI({ page });
  }
  set pageSizeI(pageSize: number) {
    this._setI({ pageSize });
  }
  set searchTermI(searchTerm: string) {
    this._setI({ searchTerm });
  }
  set sortColumnI(sortColumn: SortColumn) {
    this._setI({ sortColumn });
  }
  set sortDirectionI(sortDirection: SortDirection) {
    this._setI({ sortDirection });
  }

  private _setI(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._searchI$.next();
  }

  private _searchI(): Observable<SearchResult> {
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

  getListIngresos(fIni:Date, fFin:Date) {
    
    this.cajaService.getIngresosbyDate(fIni,fFin,this.usuarioService.getSedebyUser()).subscribe( res=> {
      console.log("entre..",res);
      this.ingresoList = res;
      this._searchI$
      .pipe(
        tap(() => this._loadingI$.next(true)),
        debounceTime(200),
        switchMap(() => this._searchI()),
        delay(200),
        tap(() => this._loadingI$.next(false))
      )
      .subscribe((result) => {
        this._ingreso$.next(result.invoices);
        this._totalI$.next(result.total);
      });

    this._searchI$.next();
    }

    );
  }
}
