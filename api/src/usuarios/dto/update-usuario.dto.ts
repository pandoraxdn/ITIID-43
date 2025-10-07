import { 
    IsString,
    MaxLength,
    MinLength,
    IsEmail,
    IsOptional,
    IsDateString
} from "class-validator";

export class UpdateUsuarioDto {
    @IsString()
    @MaxLength(255)
    @MinLength(4)
    @IsOptional()
    username:   string;

    @IsString()
    @IsEmail()
    @IsOptional()
    email:      string;

    @IsString()
    @MaxLength(255)
    @MinLength(4)
    @IsOptional()
    password:   string;

    @IsString()
    @IsOptional()
    image:      string;

    @IsDateString()
    @IsOptional()
    update:     Date;
}
