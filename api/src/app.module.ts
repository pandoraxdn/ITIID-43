import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TareaModule } from './tareas/tarea.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarea } from './tareas/entities/tarea.entity';
import { Usuario } from './usuarios/entities/usuario.entity';
import { UsuariosModule } from './usuarios/usuarios.module';
import { SensorModule } from './sensor/sensor.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Empleado } from './empleados/entities/empleado.entity';
import { RegistroAsistencia } from './empleados/entities/registro-asistencia.entity';
import { RegistroProduccion } from './empleados/entities/registro-produccion.entity';
import { EmpleadosModule } from './empleados/empleados.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/DSM43"),
    TypeOrmModule.forRoot({
        type: "mariadb",
        host: "localhost",
        port: 3306,
        username: "najimi",
        password: "pass",
        database: "dsm43",
        entities: [ Tarea ],
        synchronize: true,
        autoLoadEntities: true,
    }),
    TypeOrmModule.forRoot({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "najimi",
        password: "pass",
        database: "dsm432025",
        entities: [ Usuario ],
        synchronize: true,
        autoLoadEntities: true,
    }),
    TypeOrmModule.forRoot({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "najimi",
        password: "pass",
        database: "empresa",
        entities: [ RegistroAsistencia, RegistroProduccion, Empleado ],
        synchronize: true,
        autoLoadEntities: true,
    }),
    TareaModule,
    UsuariosModule,
    SensorModule,
    EmpleadosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
