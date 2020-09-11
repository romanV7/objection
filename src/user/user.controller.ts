import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateUserDTO, UserResponse } from 'src/models/user.model';
import { UserService } from './user.service';
import { ResponseObject } from 'src/models/response.model';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() data: CreateUserDTO): Promise<ResponseObject<'user', UserResponse>> {
    const user = await this.userService.create(data)
    return { user }
  }

  @Get(':id')
  async readUser(@Param('id') id: string): Promise<ResponseObject<'user', UserResponse>> {
    const user = await this.userService.read(id)
    return { user }
  }

  @Get()
  async showAllUsers(): Promise<ResponseObject<'users', UserResponse[]>> {
    const users = await this.userService.showAll()
    return { users }
  }
}
