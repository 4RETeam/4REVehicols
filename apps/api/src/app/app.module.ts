import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { UserModule } from './user/user.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [CategoriesModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
