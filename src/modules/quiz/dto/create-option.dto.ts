import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateOptionDTO {
  @ApiProperty({
    description: 'The question option answer',
    example: 'Debuncha',
  })
  @IsNotEmpty()
  @Length(1)
  text: string;

  @ApiProperty({
    description:
      'A boolean if this answer is wrong or correct, booean can be true or 1 --or-- false or 0',
    example: 1,
  })
  @IsNotEmpty()
  isCorrect: boolean;

  @ApiProperty({
    description: 'The question which this option answer is linked to',
    example: 1,
  })
  @IsNotEmpty()
  questionid: number;
}
