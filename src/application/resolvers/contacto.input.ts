import { InputType, Field } from "type-graphql";

@InputType({description: "Data de entrada"})
export class InputContacto  {
    
    @Field()
    celular: string;
    @Field()
    fijo: string;
    @Field()
    correo: string;
}