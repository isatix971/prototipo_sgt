import { ProfesionalEntity } from "../entity/profesional";
import { InputProfesional } from "../../../application/resolvers/profesional.input";


export interface ProfesionalRepoContract{

    datosBasicosProfesiona(): Promise<ProfesionalEntity[]>;
    insertarDatosBasicosProfesiona(datos : InputProfesional): Promise<ProfesionalEntity>;

}