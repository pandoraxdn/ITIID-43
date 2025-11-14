import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Turno } from "../enum/turno.enum";
import { Area } from "../enum/area.enum";
import { RegistroProduccion } from "./registro-produccion.entity";
import { RegistroAsistencia } from "./registro-asistencia.entity";

@Entity("Empleado")
export class Empleado {
    @PrimaryGeneratedColumn()
    id_empleado:    number;

    @OneToMany( () => RegistroProduccion, (asistencia) => asistencia.empleado )
    produccion: RegistroProduccion;

    @OneToMany( () => RegistroAsistencia, (produccion) => produccion.empleado )
    asistencia: RegistroAsistencia;

    @Column()
    nombre:         string;

    @Column()
    apellido_p:     string;

    @Column()
    apellido_m:     string;
    
    @Column({ type: "enum", enum: Area, default: Area.PRODUCCION })
    area:           Area;

    @Column({ type: "enum", enum: Turno, default: Turno.MATUTINO })
    turno:          Turno;

    @Column({ type: 'numeric', nullable: true })
    salarioDiario:  number;

    @Column({ type: 'boolean', default: true })
    activo:         boolean;
}
