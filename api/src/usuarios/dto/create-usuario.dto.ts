import { 
    IsString,
    MaxLength,
    MinLength,
    IsEmail,
    IsOptional,
    IsDateString
} from "class-validator";

export class CreateUsuarioDto {
    @IsString()
    @MaxLength(255)
    @MinLength(4)
    username:   string;

    @IsString()
    @IsEmail()
    email:      string;

    @IsString()
    @MaxLength(255)
    @MinLength(4)
    password:   string;

    @IsString()
    image:      string;

    @IsDateString()
    @IsOptional()
    update:     Date;
}
