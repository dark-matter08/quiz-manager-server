import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateOptionDTO } from '../dto/create-option.dto';
import { Option } from '../entities/option.entity';
import { OptionService } from '../services/option.service';
import { QuestionService } from '../services/question.service';

@Controller('question/option')
export class OptionController {
  constructor(
    private readonly questionService: QuestionService,
    private readonly optionService: OptionService,
  ) {}

  @Post('/')
  @UsePipes(ValidationPipe)
  async createOption(@Body() option: CreateOptionDTO): Promise<Option> {
    const question = await this.questionService.getQuestionById(
      option.questionid,
    );
    return await this.optionService.createOption(option, question);
  }
}
