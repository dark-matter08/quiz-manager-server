import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuizDTO } from './dto/CreateQuiz.dto';
import { Quiz } from './quiz.entity';
// import { QuizRepository } from './quiz.repository';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,
  ) {}
  getAllQuiz() {
    return [1, 2, 3, 4];
  }

  async createQuiz(quiz: CreateQuizDTO) {
    return await this.quizRepository.save(quiz);
  }
}
