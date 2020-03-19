import { Field, ObjectType } from "type-graphql";
import { ProfesionalSchemaContract } from "../../domain/profesional/contract";
@ObjectType()
export class ProfesionalSchema implements ProfesionalSchemaContract {
    @Field()
    id: number;
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
}

