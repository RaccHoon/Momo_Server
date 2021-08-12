import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PreTestingModule } from './pre-testing/pre-testing.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { GroupModule } from './group/group.module';
import "reflect-metadata";

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PreTestingModule,
    UsersModule,
    GroupModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
