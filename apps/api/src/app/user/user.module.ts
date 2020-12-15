import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './models/user.schema';
import { AuthModule } from '../auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from '../enums/role.guard';

@Module({
  imports: [ 
    MongooseModule.forFeature([
      {name: 'User', schema: UserSchema}
    ]),
    AuthModule
   ],
  providers: [UserService, {
    provide: APP_GUARD,
    useClass: RolesGuard,
  }],
  controllers: [UserController]
})
export class UserModule {}
