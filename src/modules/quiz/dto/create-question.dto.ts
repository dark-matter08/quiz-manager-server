import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuestionDTO {
  @IsNotEmpty()
  @Length(3)
  question: string;

  @IsNotEmpty()
  quizid: number;
}
