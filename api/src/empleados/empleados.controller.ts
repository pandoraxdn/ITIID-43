import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { CreateEmpleado } from './dto/create-empleado.dto';
import { UpdateEmpleado } from './dto/update-empleado.dto';

@Controller('empleados')
export class EmpleadosController {
  constructor(private readonly empleadosService: EmpleadosService) {}

    @Post()
    createEmpleado(@Body( new ValidationPipe() ) data: CreateEmpleado) {
        return this.empleadosService.createEmpleado(data);
    }

    @Get()
    findAllEmpleado() {
        return this.empleadosService.findAllEmpleado();
    }

    @Get(':id_empleado')
    findOne(@Param('id_empleado') id_empleado: number) {
        return this.empleadosService.findOneEmpleado(id_empleado);
    }

    @Patch(':id_empleado')
    update(@Param('id_empleado') id_empleado: number, @Body( new ValidationPipe() ) data: UpdateEmpleado) {
        return this.empleadosService.updateEmpleado(id_empleado, data);
    }

    @Delete(':id_empleado')
    remove(@Param('id_empleado') id_empleado: number) {
        return this.empleadosService.removeEmpleado(id_empleado);
    }

    @Post("entrada/:id_empleado")
    createAistenciaEntrada(@Param("id_empleado") id_empleado: number){
        return this.createAistenciaEntrada(id_empleado);
    }

    @Patch("salida/:id_empleado")
    updateAistenciaSalida(@Param("id_empleado") id_empleado: number){
        return this.updateAistenciaSalida(id_empleado);
    }

    @Post("produccion/:id_empleado/:unidadesProducidas")
    createProduccion(@Param("id_empleado") id_empleado: number, @Param("unidadesProducidas") unidadesProducidas: number){
        return this.createProduccion(id_empleado, unidadesProducidas);
    }
}
