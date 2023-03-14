import { Injectable, PipeTransform } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortColumn, SortDirection } from './sortable.directive';
import { UsersModel } from 'src/models/user';
import { UsuarioService } from 'src/app/services/usuario.service';

interface SearchResult {
  customers: UsersModel[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string | number | boolean | Date, v2: string | number | boolean | Date) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(customers: UsersModel[], column: SortColumn, direction: string): UsersModel[] {
  if (direction === '' || column === '') {
    return customers;
  } else {
    return [...customers].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(customer: UsersModel, term: string, pipe: PipeTransform) {
  return customer.nombres.toLowerCase().includes(term.toLowerCase())
  || customer.apellidos.toLowerCase().includes(term.toLowerCase())
  || customer.dni.toLowerCase().includes(term.toLowerCase())
  || customer.rol.toLowerCase().includes(term.toLowerCase())
  || customer.email.toLowerCase().includes(term.toLowerCase())
  || String(customer.fecha_creacion).toLowerCase().includes(term.toLowerCase())
}

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _customers$ = new BehaviorSubject<UsersModel[]>([]);
  private _total$ = new BehaviorSubject<number>(0);
  private _mostrar$ = new BehaviorSubject<boolean>(false);
  usersList: UsersModel[] = [];
  private _state: State = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(
    private pipe: DecimalPipe,
    private userService: UsuarioService
    ) {
    this.getListUsers();
  }

  updateTable (data) {
    this.usersList = data;
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
    let customers = sort(this.usersList, sortColumn, sortDirection);

    // 2. filter
    customers = customers.filter(customer => matches(customer, searchTerm, this.pipe));
    const total = customers.length;

    // 3. paginate
    customers = customers.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ customers, total });
  }

  getListUsers() {
    this.userService.getUsers().subscribe(res =>{
      this.usersList = res;
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