import { ProfesionalContract } from "./contract";
import { ProfesionalSchema } from "../../infrastructure/schemas/profesional.schema";
import { ProfesionalEntity } from "../../infrastructure/repository/entity/profesional";
import { ProfesionalRepoContract } from "../../infrastructure/repository/interfaces/profesional";
import { ProfesionalRepository } from "../../infrastructure/repository/persistence/profesional";
import { InputProfesional } from "../../application/resolvers/profesional.input";

export class ProfesionalService implements ProfesionalContract{


    private profesionalRepository: ProfesionalRepoContract;
    constructor(profesionalRepoImpl: ProfesionalRepoContract = new ProfesionalRepository)
    { this.profesionalRepository = profesionalRepoImpl; }
    

    async insertDatosBasicosProfesional(datos: InputProfesional): Promise<ProfesionalSchema> {
        try {
            const profesional: ProfesionalEntity = await this.profesionalRepository.insertarDatosBasicosProfesiona(datos);
            const data: ProfesionalSchema = new ProfesionalSchema;

            data.apellido = profesional.apellido;
            data.nombre = profesional.nombre;
            data.id = profesional.id;
            data.tipo_identificacion= profesional.tipo_identificacion;
            if(profesional.fecha_nacimiento!=undefined){
                data.fecha_nacimiento= profesional.fecha_nacimiento;
            }
            
            data.genero= profesional.genero;
            data.estado_civil= profesional.estado_civil;
            data.nacionalidad= profesional.nacionalidad;
            data.discapacidad= profesional.discapacidad;
            data.referido= profesional.referido;
                  
            return data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    
    
    
    async datosBasicosProfesional(): Promise<ProfesionalSchema[]> {
        try {
            const profesional: ProfesionalEntity[] = await this.profesionalRepository.datosBasicosProfesiona();
            const data: ProfesionalSchema[] = [];
            profesional.forEach(item => {
                data.push({ id:item.id, 
                            nombre: item.nombre, 
                            apellido: item.apellido,
                            tipo_identificacion: item.tipo_identificacion,
                            fecha_nacimiento: item.fecha_nacimiento,
                            genero: item.genero,
                            estado_civil: item.estado_civil,
                            nacionalidad: item.nacionalidad,
                            discapacidad: item.discapacidad,
                            referido: item.referido
                });
            });            
            return data;
        } catch (error) {
            throw new Error(error.message);
        }
 
    }

}

