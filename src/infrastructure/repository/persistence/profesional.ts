

import { EntityRepository, getRepository } from "typeorm";
import { ProfesionalEntity } from "../entity/profesional";
import { ProfesionalRepoContract } from "../interfaces/profesional";
import { keysToLowerCase } from "../../../application/common/utils";
import { InputProfesional } from "../../../application/resolvers/profesional.input";
import { ContactoEntity } from "../entity/contacto";


@EntityRepository(ProfesionalEntity)
export class ProfesionalRepository implements ProfesionalRepoContract {


    async insertarDatosBasicosProfesiona(datos : InputProfesional): Promise<ProfesionalEntity> {
        
        try {
            const profesional = new ProfesionalEntity();
            profesional.nombre = datos.nombre;
            profesional.apellido = datos.apellido;
            profesional.tipo_identificacion= datos.tipo_identificacion;
            profesional.fecha_nacimiento= datos.fecha_nacimiento,
            profesional.genero= datos.genero,
            profesional.estado_civil= datos.estado_civil,
            profesional.nacionalidad= datos.nacionalidad,
            profesional.discapacidad= datos.discapacidad,
            profesional.referido= datos.referido
  
            const valores = [];
            datos.contacto.forEach(function(item){ 
                const contacto = new ContactoEntity();
                contacto.celular = item.celular; 
                contacto.correo = item.correo;
                contacto.fijo = item.fijo;
                valores.push(contacto);
            }); 

            profesional.contact = valores;
            getRepository(ProfesionalEntity).save(profesional);
            return profesional;
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
    async datosBasicosProfesiona(): Promise<ProfesionalEntity[]> {
        try {
            const resultado: ProfesionalEntity[] = await getRepository(ProfesionalEntity).createQueryBuilder("dato")
                .getMany();
            return keysToLowerCase(resultado);
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
}
