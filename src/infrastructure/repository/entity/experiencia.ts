import { Entity, BaseEntity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { ProfesionalEntity } from "./profesional";

@Entity("experiencia")
export class ExperienciaEntity extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number;
    @ManyToOne(type => ProfesionalEntity, prof => prof.id)
    profesional_: ProfesionalEntity;
    @Column()
    empresa:string
    @Column()
    sector_empresa:string
    @Column()
    cargo:string
    @Column()
    rol:string
    @Column()
    area:string
    @Column()
    periodo_inicio:Date
    @Column()
    periodo_final:Date
    @Column()
    funciones_logros:string
    @Column()
    pais:string
    
}