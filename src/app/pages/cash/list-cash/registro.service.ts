import { Injectable, PipeTransform } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, groupBy, map, mergeMap, reduce, switchMap, tap, toArray } from 'rxjs/operators';
import { SortColumn, SortDirection } from './sortable.directive';
import { CajaService } from 'src/app/services/caja.service';
import { CajaModel } from 'src/models/caja';
import { UsuarioService } from 'src/app/services/usuario.service';

interface SearchResult {
  transactions: any;
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

function sort(transactions: any, column: SortColumn, direction: string): any[] {
  if (direction === '' || column === '') {
    return transactions;
  } else {
    return [...transactions].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(transaction: any, term: string, pipe: PipeTransform) {
  return transaction.date.toLowerCase().includes(term)
    //|| String(transaction.fecha_creacion_caja).toLowerCase().includes(term.toLowerCase())
    //|| String(transaction.monto).toLowerCase().includes(term)
    //|| transaction.metodo_pago.toLowerCase().includes(term)
    //|| transaction.status.toLowerCase().includes(term)
    //|| pipe.transform(transaction.index).includes(term);
}

@Injectable({ providedIn: 'root' })
export class TransactionService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _transactions$ = new BehaviorSubject<any>([]);
  private _total$ = new BehaviorSubject<number>(0);
  cajaList:any;
  private _state: State = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };
  

  constructor(
    private pipe: DecimalPipe,
    private cajaService: CajaService,
    private usuarioService: UsuarioService
  ) {
    let fIni: Date = new Date();
    let firstDay = new Date(fIni.getFullYear(), fIni.getMonth(), 1);
    let lastDay = new Date(fIni.getFullYear(), fIni.getMonth() + 1, 0);
    firstDay.setHours(0, 0, 1);
    lastDay.setHours(23, 59, 0);
    console.log(firstDay,lastDay)
    this.getListIngresosEgresos(firstDay,lastDay);
  }
  updateTable (data) {
    this.cajaList = data
    console.log(data)
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
    this.cajaService.getIngresosEgresosbyMonth(fIni,fFin,this.usuarioService.getSedebyUser()).subscribe(res=>{
      /* of(...res).pipe(
        groupBy((p: any) => p.fecha_creacion_caja.split(' ')[0]),
        mergeMap(group$ =>
          group$.pipe(reduce((acc, cur) => [...acc, cur], [`${group$.key}`]))
        ),
        map(arr => ({ date: arr[0], caja: arr.slice(1) })),
        toArray()
      ).subscribe(p => {
        this.cajaList = p;
        //this.updateTable(this.cajaList)
      }); */
     console.log(res)
      const groups = res.reduce((groups, game) => {
        const date = game.fecha_creacion_caja.split(' ')[0];
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(game);
        return groups;
      }, {}); 
      
      // Edit: to add it in the array format instead
       const groupArrays = Object.keys(groups).map((date) => {
        return {
          date,
          caja: groups[date],
        };
      }); 
      
      groupArrays.forEach(element => {
        const ingreso ={
          ingreso_total: 0,
          egreso_total:0
        }
        element.caja.reduce((acc,obj)=>{
          //console.log(obj)
          if (obj.egreso) {
            return ingreso.egreso_total = acc+obj.monto
          } else {
            console.log(acc,obj.monto)
            return ingreso.ingreso_total = acc+obj.monto
          }
        },0);

        Object.assign(element,ingreso)
      });
      console.log(groupArrays)
      this.cajaList = groupArrays

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
       })
  }
}