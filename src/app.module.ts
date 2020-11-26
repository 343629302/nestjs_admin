import { Module } from '@nestjs/common';
import { dbHost, dbName } from './config/db.configt';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot(`${dbHost}${dbName}`), UserModule],
})
export class AppModule {}
