import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empleado } from './entities/empleado.entity';
import { RegistroAsistencia } from './entities/registro-asistencia.entity';
import { RegistroProduccion } from './entities/registro-produccion.entity';
import { CreateEmpleado } from './dto/create-empleado.dto';
import { UpdateEmpleado } from './dto/update-empleado.dto';
import { Turno } from './enum/turno.enum';
import { StatusTurno } from './enum/status-turno.enum';

@Injectable()
export class EmpleadosService {
    constructor(
        @InjectRepository(Empleado)
        private readonly repoEmpleado: Repository<Empleado>,
        @InjectRepository(RegistroAsistencia)
        private readonly repoAsistencia: Repository<RegistroAsistencia>,
        @InjectRepository(RegistroProduccion)
        private readonly repoProduccion: Repository<RegistroProduccion>,
    ){}

    private readonly horariosTurno = {
        [ Turno.MATUTINO ]:     { inicio: "06:00", fin: "14:00" },
        [ Turno.VESPERTINO ]:   { inicio: "14:00", fin: "22:00" },
        [ Turno.NOCTURNO ]:     { inicio: "22:00", fin: "06:00" },
        [ Turno.MIXTO ]:        { inicio: "12:00", fin: "00:00" },
    }

    async createEmpleado(data: CreateEmpleado) {
        const register = this.repoEmpleado.create( data );
        return await this.repoEmpleado.save( register );
    }

    // Corregir
    async findAllEmpleado() {
        return await this.repoEmpleado.find({
            relations: [ "RegistroProduccion", "RegistroAsistencia" ]
        });
    }

    async findOneEmpleado(id_empleado: number) {
        const empleado = await this.repoEmpleado.findOne({
            where: { id_empleado },
            relations: [ "RegistroProduccion", "RegistroAsistencia" ]
        });
        if(!empleado) throw new NotFoundException("Empleado no encontrado");
        return empleado;
    }

    async updateEmpleado(id_empleado: number, data: UpdateEmpleado) {
        return await this.repoEmpleado.update(id_empleado, data);
    }

    async removeEmpleado(id_empleado: number) {
        return await this.repoEmpleado.delete(id_empleado);
    }

    async createAistenciaEntrada( id_empleado: number ){
        const empleado = await this.findOneEmpleado( id_empleado );
        
        const hoy = new Date();
        const horaActual = hoy.toTimeString().slice(0,5);
        const horaInicio = this.horariosTurno[empleado.turno].inicio;
        const puntual = horaActual <= horaInicio;

        const registroExistente = await this.repoAsistencia.findOne({
            where: { empleado: { id_empleado },
                fecha: new Date( hoy.toISOString().split("T")[0] ),
                estatus: StatusTurno.EN_TURNO
            }
        });

        if ( registroExistente ) throw new Error('Ya hay un turno activo hoy');

        const registro = this.repoAsistencia.create({
            empleado,
            fecha: hoy,
            horaEntrada: hoy,
            turno: empleado.turno,
            puntual,
            estatus: StatusTurno.EN_TURNO
        }); 

        return this.repoAsistencia.save( registro );
    }

    async updateAistenciaSalida( id_empleado: number ){
        const registro = await this.repoAsistencia.findOne({
            where: {
                empleado: { id_empleado },
                estatus: StatusTurno.EN_TURNO
            },
            relations: [ "Empleado" ]
        });

        if ( !registro ) throw new Error('No hay un turno activo para este empleado');

        const ahora = new Date();
        registro.horaSalida = ahora;
        const horas = ( ahora.getTime() - registro.horaEntrada.getTime() ) / 3600000;
        registro.horasTrabajadas = horas;
        registro.estatus = StatusTurno.FINALIZADO;

        return await this.repoAsistencia.save( registro );
        
    }
    
    async createProduccion( id_empleado: number, unidadesProducidas: number ){
        const empleado = await this.findOneEmpleado(id_empleado);

        if(!empleado) throw new NotFoundException("Empleado no encontrado");

        const produccion = this.repoProduccion.create({
            empleado,
            fecha: new Date(),
            turno: empleado.turno,
            unidadesProducidas
        });

        return await this.repoProduccion.save( produccion );
    }

}
