import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ContactoEntity } from "./contacto";
import { ExperienciaEntity } from "./experiencia";

@Entity("profesional")
export class ProfesionalEntity extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string; 
    @Column()
    apellido: string;
    @Column()
    tipo_identificacion: string;
    @Column()
    fecha_nacimiento: Date;
    @Column()
    genero: string;
    @Column()
    estado_civil: string;
    @Column()
    nacionalidad: string;
    @Column()
    discapacidad: boolean;
    @Column()
    referido: boolean;
    @OneToMany(type => ContactoEntity, contact => contact.profesional_,{
        cascade: true
    })
    experiencia: ExperienciaEntity[];
    @OneToMany(type => ExperienciaEntity, exper => exper.profesional_,{
        cascade: true
    })
    contact: ExperienciaEntity[];

};