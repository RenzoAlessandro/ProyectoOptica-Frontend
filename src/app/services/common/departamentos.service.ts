import { Injectable } from '@angular/core';
import { DepartamentosModel } from 'src/models/departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  private departamentoList :DepartamentosModel[] = [
    {id_departamento: 1, ubigeo_departamento: "010000", nombre_departamento: "Amazonas"},
    {id_departamento: 2, ubigeo_departamento: "020000", nombre_departamento: "Ancash"},
    {id_departamento: 3, ubigeo_departamento: "030000", nombre_departamento: "Apurimac"},
    {id_departamento: 4, ubigeo_departamento: "040000", nombre_departamento: "Arequipa"},
    {id_departamento: 5, ubigeo_departamento: "050000", nombre_departamento: "Ayacucho"},
    {id_departamento: 6, ubigeo_departamento: "060000", nombre_departamento: "Cajamarca"},
    {id_departamento: 7, ubigeo_departamento: "070000", nombre_departamento: "Callao"},
    {id_departamento: 8, ubigeo_departamento: "080000", nombre_departamento: "Cusco"},
    {id_departamento: 9, ubigeo_departamento: "090000", nombre_departamento: "Huancavelica"},
    {id_departamento: 10, ubigeo_departamento: "100000", nombre_departamento: "Huanuco"},
    {id_departamento: 11, ubigeo_departamento: "110000", nombre_departamento: "Ica"},
    {id_departamento: 12, ubigeo_departamento: "120000", nombre_departamento: "Junin"},
    {id_departamento: 13, ubigeo_departamento: "130000", nombre_departamento: "La Libertad"},
    {id_departamento: 14, ubigeo_departamento: "140000", nombre_departamento: "Lambayeque"},
    {id_departamento: 15, ubigeo_departamento: "150000", nombre_departamento: "Lima"},
    {id_departamento: 16, ubigeo_departamento: "160000", nombre_departamento: "Loreto"},
    {id_departamento: 17, ubigeo_departamento: "170000", nombre_departamento: "Madre de Dios"},
    {id_departamento: 18, ubigeo_departamento: "180000", nombre_departamento: "Moquegua"},
    {id_departamento: 19, ubigeo_departamento: "190000", nombre_departamento: "Pasco"},
    {id_departamento: 20, ubigeo_departamento: "200000", nombre_departamento: "Piura"},
    {id_departamento: 21, ubigeo_departamento: "210000", nombre_departamento: "Puno"},
    {id_departamento: 22, ubigeo_departamento: "220000", nombre_departamento: "San Martin"},
    {id_departamento: 23, ubigeo_departamento: "230000", nombre_departamento: "Tacna"},
    {id_departamento: 24, ubigeo_departamento: "240000", nombre_departamento: "Tumbes"},
    {id_departamento: 25, ubigeo_departamento: "250000", nombre_departamento: "Ucayali"},
    {id_departamento: 26, ubigeo_departamento: "990000", nombre_departamento: "Extranjero"},
  ];
  constructor() { }

  getDepartamentos(){
    return this.departamentoList;
  }
}
