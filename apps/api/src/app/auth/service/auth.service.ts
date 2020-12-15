import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable, from, of } from 'rxjs';
import { User } from '../../user/models/user.schema';
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {

    constructor(private readonly jwtService: JwtService){}

    generateJWT(user: User): Observable <string> {
        return from(this.jwtService.sign({user}));
    }

    hashPassword(password: string): Observable <string> {
        return from<string>(bcrypt.hash(password, 8));
    }

    comparePasswords(newPassword: string, passwordHash: string): Observable <boolean> {
        return of<boolean>(bcrypt.compare(newPassword, passwordHash, 8));
    }

}