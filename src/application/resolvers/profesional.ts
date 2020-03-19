import { Query,Mutation, Resolver, Arg } from "type-graphql";
import { ProfesionalSchema } from "../../infrastructure/schemas/profesional.schema";
import { ProfesionalContract } from "../../domain/profesional/contract";
import { ProfesionalService } from "../../domain/profesional/service";
import logger = require("../../infrastructure/config/logger");
import { keysToLowerCase } from "../common/utils";
import { InputProfesional } from "./profesional.input";


@Resolver()
export class ProfesionalResolver {

  private profesionalServices: ProfesionalContract
  constructor(){ this.profesionalServices  = new ProfesionalService(); }
  
  @Query(() => [ProfesionalSchema], { description : 'Obtiene un listado de profesionales'})
  async datosBasicosProfesionales() {
    try {
      const json = await this.profesionalServices.datosBasicosProfesional();      
      return keysToLowerCase(json);
    } catch (err) {
      logger.error(err);
      throw Error(err);
    }

  }

  @Mutation(returns => ProfesionalSchema)
    async insertaDatosBasicosProfesionales( @Arg('data') data: InputProfesional) {
    try {
      const json = await this.profesionalServices.insertDatosBasicosProfesional(data);      
      return keysToLowerCase(json);
    } catch (err) {
      logger.error(err);
      throw Error(err);
    }

  }

} 