import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { IUser } from '../models/user.interface';
import {Observable, of, pipe} from "rxjs";
import {UserService} from "../service/user.service";
import { Roles } from '../../enums/roles.decorator';
import { Role } from '../../enums/role.enum';
import { catchError, map } from 'rxjs/operators';

@Controller('users')
export class UserController {

  constructor( private readonly userService: UserService) {
  }

  @Post()
  createUser(@Body() user: IUser): Observable<IUser | Object> {
    return this.userService.create(user).pipe(
      map((user: IUser) => user),
        catchError(err => of({error: err.message}))
      );
  }

  @Post('login')
  login(@Body() user: IUser): Observable<Object> {
    return this.userService.login(user).pipe(
      map((jwt: string) => {
        return {access_token: jwt}
      }) 
    )
  }

  @Get(':_id')
  findOne(@Param() params): Observable<IUser> {
    return this.userService.findOne(params._id);
  }

  @Get()
  @Roles(Role.Admin)
  findAll(): Observable<IUser[]> {
    return this.userService.findAll();
  }

  @Delete(':_id')
    deleteOne(@Param('_:id') _id: string): Observable<IUser> {
      return this.userService.deleteOne(_id);
    }

    @Put(':_id')
    updateOne(@Param(':_id') _id: string, @Body() user: IUser): Observable<IUser> {
      return this.userService.updateOne(_id, user);
    }

}
