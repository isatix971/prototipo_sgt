import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { ProfesionalEntity } from "./profesional";

@Entity("contacto")
export class ContactoEntity extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(type => ProfesionalEntity, prof => prof.id)
    profesional_: ProfesionalEntity;
    @Column()
    celular: string;
    @Column()
    fijo: string;
    @Column()
    correo: string;

};