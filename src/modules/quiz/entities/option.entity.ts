import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Question } from './question.entity';

@Entity('option')
export class Option extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'This is the question unique identifier',
  })
  id: number;

  @Column({
    type: 'varchar',
  })
  text: string;

  @Column({
    type: 'boolean',
  })
  isCorrect: boolean;

  @ManyToOne(() => Question, (question) => question.options)
  question: Question;
}
