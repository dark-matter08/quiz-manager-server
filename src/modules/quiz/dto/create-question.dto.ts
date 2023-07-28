import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuestionDTO {
  @ApiProperty({
    description: 'This is a quiz question',
    example: 'What is the wettest place in cameroon?',
  })
  @IsNotEmpty()
  @Length(3)
  question: string;

  @ApiProperty({
    description: 'The id of the quiz this question is linked to',
    example: 1,
  })
  @IsNotEmpty()
  quizid: number;
}
