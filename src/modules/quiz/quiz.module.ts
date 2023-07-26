import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionController } from './controllers/question.controller';
import { Question } from './entities/question.entity';
import { QuestionService } from './services/question.service';
import { QuizController } from './controllers/quiz.controller';
import { Quiz } from './entities/quiz.entity';
import { QuizService } from './services/quiz.service';
import { Option } from './entities/option.entity';
import { OptionService } from './services/option.service';
import { OptionController } from './controllers/option.controller';
// import { QuizRepository } from './quiz.repository';

@Module({
  controllers: [QuizController, QuestionController, OptionController],
  imports: [TypeOrmModule.forFeature([Quiz, Question, Option])],
  providers: [QuizService, QuestionService, OptionService],
})
export class QuizModule {}
