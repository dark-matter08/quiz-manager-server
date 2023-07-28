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
import { CreateOptionDTO } from '../dto/create-option.dto';
import { Option } from '../entities/option.entity';
import { OptionService } from '../services/option.service';
import { QuestionService } from '../services/question.service';
@ApiTags('Question Endpoints')
@Controller('question/option')
export class OptionController {
  constructor(
    private readonly questionService: QuestionService,
    private readonly optionService: OptionService,
  ) {}

  @ApiCreatedResponse({
    description: 'Created option object response',
    type: () => Option,
  })
  @ApiBadRequestResponse({
    description: 'Option could not be created',
  })
  @Post('/')
  @UsePipes(ValidationPipe)
  async createOption(@Body() option: CreateOptionDTO): Promise<Option> {
    const question = await this.questionService.getQuestionById(
      option.questionid,
    );
    return await this.optionService.createOption(option, question);
  }
}
