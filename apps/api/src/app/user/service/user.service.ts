import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { from, Observable, of, Subscriber} from 'rxjs';
import { first, map } from 'rxjs/operators';
import { AuthService } from '../../auth/service/auth.service';
import { LoginDto } from '../dto/login.dto';
import {User, UserDocument} from '../models/user.schema';
import { UserModule } from '../user.module';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel,
    private authService: AuthService
  ) {
  }

  create(user: User): Observable<User | boolean> {
        const createdUser = new this.userModel(user);
        const obsever = { next: x => { createdUser.password = x ; return createdUser; }};
        const newUser = this.authService.hashPassword(createdUser.password).subscribe(obsever)
        return newUser.save();
  }

  findOne(_id: string): Observable<User> {
      return this.userModel.findOne({_id});
  }

  findAll(): Observable<User[]> {
      return this.userModel.find();
  }

  deleteOne(_id: string): Observable<User> {
      return this.userModel.findOneAndDelete('_id');
  }

  updateOne(_id: string, user: User): Observable<User> {
      return this.userModel.findOneAndUpdate({_id}, user);
  }

  findOneByEmail(email :string): User {
    return this.userModel.findOne({email});
  }

  login(login: LoginDto): User | boolean {
    const _user = this.findOneByEmail(login.email)
      return this.authService.comparePasswords(login.password,_user.password) ? _user : false;
  }
}
