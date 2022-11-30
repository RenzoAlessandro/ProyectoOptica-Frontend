import { AccesorioModel } from "./accesorio";
import { LunasModel } from "./lunas";
import { MonturasModel } from "./monturas";
import { TipoVentaModel } from "./tipo_venta";

export class VentasModel {
    montura: Array <MonturasModel> = [];
    luna: Array <LunasModel> = [];
    accesorio: Array <AccesorioModel> = [];
    id_vendedor: string;
    fecha_venta: Date;
    tipo_venta: Array<TipoVentaModel> = [];
    sede: string;
    id_cliente: string;
}