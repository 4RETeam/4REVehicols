import {Body, Controller, Post} from '@nestjs/common';
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
}
