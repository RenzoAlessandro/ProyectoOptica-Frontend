export class AccesorioModel {
    id_producto?: string;
    isSelected: boolean;
    nombre_accesorio: string;
    codigo_interno: string;
    precio_accesorio_c: number;
    precio_accesorio_v: number;
    fecha_creacion_accesorio: Date;
    fecha_modificacion_accesorio: Date;
    cantidad: number;
    id_sede: string;
    habilitado: boolean;
    tipo: string;
    cant_vendida: number;
    precio?: number
  idSedeDestino: string;
  nombreUsuario: string
  traslado: Array<any>;
}