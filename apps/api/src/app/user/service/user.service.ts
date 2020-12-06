import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Observable, from } from 'rxjs';
import { User } from '../models/user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userModel
        ) {}

        create(user: User): Observable<string> {
            const _user: User = this.userModel.save(user);
            if (!_user) {
                return from('okay');
            } else {
                return from('');
            }
        }
}
