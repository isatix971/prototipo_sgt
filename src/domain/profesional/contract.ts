import { ProfesionalSchema } from "../../infrastructure/schemas/profesional.schema";
import { InputProfesional } from "../../application/resolvers/profesional.input";


export interface ProfesionalContract{

    datosBasicosProfesional(): Promise<ProfesionalSchema[]>;

    insertDatosBasicosProfesional(data: InputProfesional): Promise<ProfesionalSchema>;

}

export interface ProfesionalSchemaContract{
    id : number;
    nombre: String;
    apellido: String;
    tipo_identificacion: string;
    fecha_nacimiento:Date;
    genero: string;
    estado_civil: string;
    nacionalidad: string;
    discapacidad: boolean;
    referido: boolean;
}
export interface ContactoSchemaContract{
    id: number;
    id_profesional: number; 
    celular: string;
    fijo: string;
    correo: string;
}

