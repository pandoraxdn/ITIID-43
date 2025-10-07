import { 
    Controller, 
    Get, 
    Post, 
    Body, 
    Patch, 
    Param, 
    Delete,
    ValidationPipe
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuarios')
export class UsuariosController {

  constructor(
      private readonly usuariosService: UsuariosService
  ) {}

  @Post("login")
  login( @Body( new ValidationPipe ) updateUsuarioDto: UpdateUsuarioDto ){
      return this.login(updateUsuarioDto);
  }

  @Post()
  create(@Body( new ValidationPipe ) createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id_user')
  findOne(@Param('id_user') id_user: number) {
    return this.usuariosService.findOne(id_user);
  }

  @Patch(':id_user')
  update(@Param('id_user') id_user: number, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(id_user, updateUsuarioDto);
  }

  @Delete(':id_user')
  remove(@Param('id_user') id_user: number) {
    return this.usuariosService.remove(id_user);
  }

}
