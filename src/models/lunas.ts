export class LunasModel {
    id_producto?: string;
    isSelected?:boolean;
    material: string;
    precio_luna_c: number;
    precio_luna_v: number;
    fecha_creacion_luna: Date;
    fecha_modificacion_luna: Date;
    cantidad: number;
    id_sede: string;
    habilitado: true;
    tipo:string;
    cant_vendida: number;
    precio?: number;
    idSedeDestino?: string;
    nombreUsuario: string;
    traslado: Array<any>;
}