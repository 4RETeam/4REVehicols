import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';
import { from, Observable, of, Subscriber, throwError} from 'rxjs';
import { catchError, first, map, switchMap } from 'rxjs/operators';
import { AuthService } from '../../auth/service/auth.service';
import { LoginDto } from '../dto/login.dto';
import {User} from '../models/user.schema';
import { IUser } from '../models/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel:Model<User>,
    private authService: AuthService
  ) {
  }

  create(user: IUser): Observable<IUser> {
    return this.authService.hashPassword(user.password).pipe(
      switchMap((passwordHash: string) => {
        const _User = new User();
        _User.firstName = user.firstName;
        _User.lastName = user.lastName;
        _User.username = user.username;
        _User.email = user.email;
        _User.password = passwordHash;
        _User.address = user.address;
        _User.phone = user.phone;

        return from(this.userModel.create(_User)).pipe(
          map((user: IUser) => {
              const {password, ...result} = user;
              return result; 
          }),
          catchError(err => throwError(err))
        )
      })
    )
  }

  findOne(_id: string): Observable<IUser> {
      return from(this.userModel.findOne({_id})).pipe(
        map((user: User) => {
          const {password, ...result} = user;
          return result;
        })
      )
  }

  findAll(): Observable<IUser[]> {
      return from(this.userModel.find()).pipe(
        map((users) => {
          users.forEach(function (v) {delete v.password});
          return users;
        })
      )
  }

  deleteOne(_id: string): Observable<IUser> {
      return from(this.userModel.findOneAndDelete({_id}));
  }

  updateOne(_id: string, user: IUser): Observable<IUser> {
    delete user.email;
    delete user.password;
      return from(this.userModel.findOneAndUpdate({_id}, user));
  }

  login(user: IUser): Observable<string> {
    return this.validateUser(user.email, user.password).pipe(
      switchMap((user: IUser) => {
        if(user) {
          return this.authService.generateJWT(user).pipe(map((jwt: string) => jwt));
        } else {
          return 'Wrong credentials';
        }
      })
    )
  }

  validateUser(email: string, password: string): Observable<IUser> {
    return this.findByMail(email).pipe(
      switchMap((user: IUser) => this.authService.comparePasswords(password, user.password).pipe(
        map((match: boolean) => {
          if(match) {
            const {password, ...result} = user;
            return result;
          } else {
            throw Error;
          }
        })
      ))
    )
  }

  findByMail(email: string): Observable<IUser> {
    return from(this.userModel.findOne({email}));
  }
}
