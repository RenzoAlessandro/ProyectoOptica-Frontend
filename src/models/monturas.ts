export class MonturasModel {
    id_producto?: string;
    isSelected: boolean;
    material: string;
    marca: string;
    talla: string;
    color: string;
    codigo: string; // codigo interno
    codigo_montura: string;
    precio_montura_c: number;
    precio_montura_v: number;
    fecha_creacion_monturas: Date;
    fecha_modificacion_monturas: Date;
    cantidad: number;
    id_sede: string;
    habilitado: boolean;
    tipo: string;
    cant_vendida: number;
    precio?: number;
    idSedeDestino?: string;
    nombreUsuario: string;
    traslado: Array<any>;
}