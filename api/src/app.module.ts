import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TareaModule } from './tareas/tarea.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarea } from './tareas/entities/tarea.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "najimi",
        password: "pass",
        database: "dsm432025",
        entities: [ Tarea ],
        synchronize: true,
        autoLoadEntities: false,
    }),
    TareaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
