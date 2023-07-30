import { ApiProperty } from '@nestjs/swagger';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Question } from './question.entity';

@Entity('options')
export class Option extends BaseEntity {
  @ApiProperty({
    description: "The option's unique identifier or Primary key",
    example: 1,
  })
  @PrimaryGeneratedColumn({
    comment: 'This is the question unique identifier',
  })
  id: number;

  @ApiProperty({
    description: 'The question option answer',
    example: 'Debuncha',
  })
  @Column({
    type: 'varchar',
  })
  text: string;

  @ApiProperty({
    description:
      'A boolean if this answer is wrong or correct, booean can be true or 1 --or-- false or 0',
    example: 1,
  })
  @Column({
    type: 'boolean',
  })
  isCorrect: boolean;

  @ApiProperty({
    description: "The relationship of a option to it's question",
  })
  @ManyToOne(() => Question, (question) => question.options)
  question: () => Question;
}
