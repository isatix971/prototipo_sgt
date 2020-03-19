import { InputType, Field } from "type-graphql";
import { InputContacto } from "./contacto.input";


@InputType({description: "Data de entrada"})
export class InputProfesional {
    @Field()
    nombre: string; 
    @Field()
    apellido: string;
    @Field()
    tipo_identificacion: string;
    @Field()
    fecha_nacimiento: Date;
    @Field()
    genero: string;
    @Field()
    estado_civil: string;
    @Field()
    nacionalidad: string;
    @Field()
    discapacidad: boolean;
    @Field()
    referido: boolean;
    @Field(type => [InputContacto])
    contacto: InputContacto[];
}