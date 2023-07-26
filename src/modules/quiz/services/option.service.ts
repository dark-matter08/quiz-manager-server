import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOptionDTO } from '../dto/create-option.dto';
import { Option } from '../entities/option.entity';
import { Question } from '../entities/question.entity';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(Option)
    private readonly optionRepository: Repository<Option>,
  ) {}
  async createOption(
    option: CreateOptionDTO,
    question: Question,
  ): Promise<Option> {
    const newOption = await this.optionRepository.save({
      text: option.text,
      isCorrect: option.isCorrect,
    });

    console.log(question.options);

    question.options = [...question.options, newOption];

    await question.save();

    return newOption;
  }
}
