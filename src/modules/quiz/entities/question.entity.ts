import { ApiProperty } from '@nestjs/swagger';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Option } from './option.entity';
import { Quiz } from './quiz.entity';

@Entity('questions')
export class Question extends BaseEntity {
  @ApiProperty({
    description:
      "This is the unique identifier of the Question, it's Primary Key",
    example: 1,
  })
  @PrimaryGeneratedColumn({
    comment: 'This is the question unique identifier',
  })
  id: number;

  @ApiProperty({
    description: 'This is a quiz question',
    example: 'What is the wettest place in cameroon?',
  })
  @Column({
    type: 'varchar',
  })
  question: string;

  @ApiProperty({
    description: "The relation ship of the quiz to it's Question",
    example: () => Quiz,
  })
  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quiz: () => Quiz;

  @ApiProperty({
    description: "The relation ship of the quiz to it's Option",
    example: () => Option,
  })
  @OneToMany(() => Option, (option) => option.question)
  options: Option[];
}
