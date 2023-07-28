import { ApiProperty } from '@nestjs/swagger';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Question } from './question.entity';

@Entity('quizes')
export class Quiz extends BaseEntity {
  @ApiProperty({
    description: 'This is the quiz unique identifier, i.e Primary Key',
    example: 1,
  })
  @PrimaryGeneratedColumn({
    comment: 'This is the quiz unique identifier',
  })
  id: number;

  @ApiProperty({
    description: 'The quiz Title',
    example: 'Geography Quiz1',
  })
  @Column({
    type: 'varchar',
  })
  title: string;

  @ApiProperty({
    description: "The Quiz's description",
    example: 'This is the first quiz for geography',
  })
  @Column({
    type: 'text',
  })
  description: string;

  @ApiProperty({
    description:
      'This is a boolean indicating if the quiz is active. it defaults to true',
    example: 1,
  })
  @Column({
    type: 'boolean',
    default: 1,
  })
  isActive: boolean;

  @ApiProperty({
    description: "The relationship of a quiz to it's questions",
    example: [() => Question],
  })
  @OneToMany(() => Question, (question) => question.quiz)
  questions: Question[];
}
