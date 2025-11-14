import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Empleado } from "./empleado.entity";
import { Turno } from "../enum/turno.enum";

@Entity("RegistroProduccion")
export class RegistroProduccion{
    @PrimaryGeneratedColumn()
    id_reg_p:           number;
    
    @ManyToOne( () => Empleado, (empleado) => empleado.produccion )
    empleado:           Empleado;

    @Column({ type: "date" })
    fecha:              Date;

    @Column({ type: "enum", enum: Turno, default: Turno.MATUTINO })
    turno:              Turno;

    @Column({ type: "int", default: 0 })
    unidadesProducidas: number;
}
