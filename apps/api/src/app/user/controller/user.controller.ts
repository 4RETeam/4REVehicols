import {Body, Controller, Delete, Get, Param, Post, Put,UsePipes, ValidationPipe} from '@nestjs/common';
import {User} from "../models/user.schema";
import {Observable} from "rxjs";
import {UserService} from "../service/user.service";
import { UserDto, UserParamsDto } from '../dto/user.dto';
import { Roles } from '../../enums/roles.decorator';
import { Role } from '../../enums/role.enum';
import { LoginDto } from '../dto/login.dto';

@Controller('user')
export class UserController {

  constructor( private readonly userService: UserService) {
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  createUser(@Body() user: User): Observable<User | boolean> {
    return this.userService.create(user);
  }

  @Get(':_id')
  findOne(@Param() params): Observable<User> {
    return this.userService.findOne(params._id);
  }

  @Get()
  @Roles(Role.Admin)
  findAll(): Observable<User[]> {
    return this.userService.findAll();
  }

  @Delete(':_id')
    deleteOne(@Param('_:id') _id: string): Observable<User> {
      return this.userService.deleteOne(_id);
    }

    @Put(':_id')
    updateOne(@Param(':_id') _id: string, @Body() user: User): Observable<User> {
      return this.userService.updateOne(_id, user);
    }

    @Post('/login')
    login(@Body() login: LoginDto): User | boolean {
      return this.userService.login(login)
    }
}
