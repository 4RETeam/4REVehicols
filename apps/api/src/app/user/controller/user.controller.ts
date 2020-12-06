import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {User} from "../models/user.schema";
import {Observable} from "rxjs";
import {UserService} from "../service/user.service";

@Controller('user')
export class UserController {

  constructor( private readonly userService: UserService) {
  }

  @Post()
  createUser(@Body() user: User): Observable<User> {
    return this.userService.create(user);
  }

  @Get(':_id')
  findOne(@Param() params): Observable<User> {
    return this.userService.findOne(params._id);
  }

  @Get()
  findAll(): Observable<User[]> {
    return this.userService.findAll();
  }

  @Delete(':_id')
    deleteOne(@Param('_id') _id: string): Observable<User> {
      return this.userService.deleteOne(_id);
    }

    @Put(':_id')
    updateOne(@Param('_id') _id: string, @Body() user: User): Observable<any> {
      return this.userService.updateOne(_id, user);
    }
}
