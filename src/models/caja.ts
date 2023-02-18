export class CajaModel {
    id_caja?: string;
    fecha_creacion_caja: Date;
    id_encargado: string;
    nombre_encargado: string;
    descripcion: string;
    egreso: boolean;
    habilitado: boolean;
    monto: number;
    id_sede: string;
    tipo: string;
    metodo_pago: string;
}