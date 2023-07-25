import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuizDTO {
  @IsNotEmpty({
    message: 'The quiz sould have a title',
  })
  @Length(3, 255)
  title: string;

  @IsNotEmpty({
    message: 'The quiz should have a description',
  })
  @Length(3)
  description: string;
}
