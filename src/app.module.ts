import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Report } from './reports/report.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite', // Specifies which type of DB we use with TypeORM
      database: 'db.sqlite', // Name of the DB
      entities: [User, Report], // List out all entities/things we want to store inside our app.
      synchronize: true,
    }),
    UsersModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
