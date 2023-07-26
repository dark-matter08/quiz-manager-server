import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfigAsync } from './config/typeorm.config';
import { QuizModule } from './modules/quiz/quiz.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    QuizModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
