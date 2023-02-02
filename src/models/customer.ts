import { MedidasModel } from "./medidas";

export class CustomersModel {
    id_cliente?: string;
    nombres: string;
    apellidos: string;
    dni: string;
    telefono:string;
    fecha_nacimiento: Date;
    fecha_creacion: Date;
    fecha_modificacion: Date;
    medidas: Array<MedidasModel>;
    email: string;
    habilitado: boolean;
    antecedentes: string;
    direccion: string;
}