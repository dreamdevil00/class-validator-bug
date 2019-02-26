import { Controller, Post, Body } from '@nestjs/common';

import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  // 创建用户
  @Post()
  async createUser(@Body() userDto: CreateUserDto): Promise<any> {
    return {};
  }
}
