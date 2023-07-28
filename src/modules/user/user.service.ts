import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRegisterRequestDTO } from './dto/user-register.req.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async doUserRegistration(user: UserRegisterRequestDTO): Promise<User> {
    const newUser = new User();

    newUser.name = user.name;
    newUser.email = user.email;
    newUser.password = user.password;

    await newUser.save();

    return newUser;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return await User.findOne({ where: { email } });
  }
}
