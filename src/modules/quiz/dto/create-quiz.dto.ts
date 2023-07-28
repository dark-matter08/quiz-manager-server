import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuizDTO {
  @ApiProperty({
    description: "The Quiz's Subject Title",
    example: 'Geography Quiz1',
  })
  @IsNotEmpty({
    message: 'The quiz sould have a title',
  })
  @Length(3, 255)
  title: string;

  @ApiProperty({
    description: "The Quiz's description",
    example: 'This is the first quiz for geography',
  })
  @IsNotEmpty({
    message: 'The quiz should have a description',
  })
  @Length(3)
  description: string;
}
