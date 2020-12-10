import { IsString, IsEmail, IsNotEmpty, IsDefined, IsNumberString } from 'class-validator';

export class UserDto {
    @IsString()
    @IsEmail()
    @IsDefined()
    email: string;

    @IsString()
    @IsDefined()
    username: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsString()
    @IsNotEmpty()
    phone: string;
}

export class UserParamsDto {
    @IsNumberString()
    _id: string;
}