import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Observable} from 'rxjs';
import {User} from '../models/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel
  ) {
  }

  create(user: User): Observable<User> {
    const createdUser = new this.userModel(user);
    return createdUser.save();
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
}
