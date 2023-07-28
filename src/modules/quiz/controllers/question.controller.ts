import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateQuestionDTO } from '../dto/create-question.dto';
import { Question } from '../entities/question.entity';
import { QuestionService } from '../services/question.service';
import { QuizService } from '../services/quiz.service';

@ApiTags('Question Endpoints')
@Controller('question')
export class QuestionController {
  constructor(
    private readonly questionService: QuestionService,
    private readonly quizService: QuizService,
  ) {}

  @ApiCreatedResponse({
    description: 'Created question object response',
    type: Question,
  })
  @ApiBadRequestResponse({
    description: 'User question cannot be sent, try again',
  })
  @Post('/')
  @UsePipes(ValidationPipe)
  async createQuestion(@Body() question: CreateQuestionDTO): Promise<Question> {
    const quiz = await this.quizService.getQuizById(question.quizid);
    return await this.questionService.createQuestion(question, quiz);
  }
}
