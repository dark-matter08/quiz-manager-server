import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SETTINGS } from 'src/app.utils';
import { UserRegisterRequestDTO } from './dto/user-register.req.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@ApiTags('User Endpoints')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiCreatedResponse({
    description: 'Created user object response',
    type: User,
  })
  @ApiBadRequestResponse({
    description: 'User cannot register, try again',
  })
  @Post('/register')
  async doUserRegistration(
    @Body(SETTINGS.VALIDATION_PIPE)
    user: UserRegisterRequestDTO,
  ): Promise<User> {
    return await this.userService.doUserRegistration(user);
  }
}
