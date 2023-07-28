import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiFoundResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateQuizDTO } from '../dto/create-quiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { QuizService } from '../services/quiz.service';

@ApiTags('Quiz Endpoints')
@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @ApiFoundResponse({
    description: 'The Result of Fetching quizes',
    type: [Quiz],
  })
  @ApiBadRequestResponse({
    description: 'Could not fetch quizes',
  })
  @Get('/')
  async getAllQuiz(): Promise<Quiz[]> {
    return await this.quizService.getAllQuiz();
  }

  @ApiFoundResponse({
    description: 'The Result of Fetching quiz by id',
    type: Quiz,
  })
  @ApiBadRequestResponse({
    description: 'Could not fetch quiz',
  })
  @Get('/:id')
  async getQuestionById(@Param('id', ParseIntPipe) id: number): Promise<Quiz> {
    return await this.quizService.getQuizById(id);
  }

  @ApiCreatedResponse({
    description: 'The quiz created response object',
    type: Quiz,
  })
  @ApiBadRequestResponse({
    description: 'Could create quiz, try again later',
  })
  @Post('/')
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: CreateQuizDTO): Promise<Quiz> {
    return await this.quizService.createQuiz(quizData);
  }
}
