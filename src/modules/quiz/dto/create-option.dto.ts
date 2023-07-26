import { IsNotEmpty, Length } from 'class-validator';

export class CreateOptionDTO {
  @IsNotEmpty()
  @Length(3)
  text: string;

  @IsNotEmpty()
  isCorrect: boolean;

  @IsNotEmpty()
  questionid: number;
}
