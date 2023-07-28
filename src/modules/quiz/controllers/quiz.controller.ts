import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiFoundResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { ApiPaginatedResponse } from 'src/common/decorator/api-pagination.decorator';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { CreateQuizDTO } from '../dto/create-quiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { QuizService } from '../services/quiz.service';

@ApiTags('Quiz Endpoints')
@Controller('quiz')
@ApiSecurity('bearer')
@UseGuards(JwtAuthGuard)
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @ApiPaginatedResponse({ model: Quiz, description: 'List of quizzes' })
  @ApiBadRequestResponse({
    description: 'Could not fetch quizes',
  })
  @Get('/')
  async getAllQuiz(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 1,
  ): Promise<Pagination<Quiz>> {
    const options: IPaginationOptions = {
      limit,
      page,
    };
    return await this.quizService.paginate(options);
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
