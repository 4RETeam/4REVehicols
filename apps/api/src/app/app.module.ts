import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [CategoriesModule, UserModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
