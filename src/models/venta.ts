import { AccesorioModel } from "./accesorio";
import { LunasModel } from "./lunas";
import { MonturasModel } from "./monturas";
import { TipoVentaModel } from "./tipo_venta";

export class VentasModel {
    id_ventas?: string;
    list_monturas: Array <MonturasModel> = [];
    list_lunas: Array <LunasModel> = [];
    list_accesorios: Array <AccesorioModel> = [];
    observaciones: string;
    id_vendedor: string;
    fecha_creacion_venta: Date;
    tipo_venta: Array<TipoVentaModel> = [];
    id_sede: string;
    id_cliente: string;
    nombre_cliente: string;
    habilitado: boolean;
}