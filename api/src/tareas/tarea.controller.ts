import { 
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    ValidationPipe
} from "@nestjs/common";
import { TareaService } from "./tarea.service";
import { CreateTarea } from "./dto/create-tarea.dto";
import { UpdateTarea } from "./dto/update-tarea.dto";

@Controller("tarea")
export class TareaController{
    constructor(
        private readonly tareaService: TareaService
    ){}

    @Post()
    async create( @Body( new ValidationPipe ) createTareaDto: CreateTarea ){
        return await this.tareaService.create( createTareaDto );
    }

    @Patch(":id_tarea")
    async update( @Param("id_tarea") id_tarea: number, @Body(new ValidationPipe) updateTareaDtop: UpdateTarea ){
        return await this.tareaService.update(id_tarea, updateTareaDtop);
    }

    @Get(":id_tarea")
    async findOne( @Param("id_tarea") id_tarea: number ){
        return this.tareaService.findOne( id_tarea );
    }

    @Get()
    async findAll(){
        return this.tareaService.findAll();
    }

    @Delete(":id_tarea")
    async remove( @Param("id_tarea") id_tarea: number ){
        return this.tareaService.remove( id_tarea );
    }
}
