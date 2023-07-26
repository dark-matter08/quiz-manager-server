import { IsNotEmpty, Length } from 'class-validator';

export class CreateOptionDTO {
  @IsNotEmpty()
  @Length(1)
  text: string;

  @IsNotEmpty()
  isCorrect: boolean;

  @IsNotEmpty()
  questionid: number;
}
