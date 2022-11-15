import { MedidasModel } from "./medidas";

export class CustomersModel {
    nombres: string;
    apellidos: string;
    dni: number;
    telefono:string;
    fecha_nacimiento: Date;
    fecha_creacion: Date;
    fecha_modificacion: Date;
    medidas: Array<MedidasModel>;
}