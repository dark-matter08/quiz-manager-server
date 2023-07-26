import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuestionDTO } from '../dto/create-question.dto';
import { Question } from '../entities/question.entity';
import { QuestionService } from '../services/question.service';
import { QuizService } from '../services/quiz.service';

@Controller('question')
export class QuestionController {
  constructor(
    private readonly questionService: QuestionService,
    private readonly quizService: QuizService,
  ) {}

  @Post('/')
  @UsePipes(ValidationPipe)
  async createQuestion(@Body() question: CreateQuestionDTO): Promise<Question> {
    const quiz = await this.quizService.getQuizById(question.quizid);
    return await this.questionService.createQuestion(question, quiz);
  }
}
