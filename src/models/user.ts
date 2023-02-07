export class UsersModel {
    id_usuario?:string;
    nombres: string;
    apellidos: string;
    dni: string;
    telefono:string;
    fecha_nacimiento: Date;
    fecha_creacion: Date;
    fecha_modificacion: Date;
    rol: string;
    habilitado: boolean;
    id_sede: string;
    contrasenia: string;
    email: string;
    observaciones:string
    prueba: string;
    usuario?: string
}