import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { InjectModel, synchronize, InjectConnection, Connection } from 'nestjs-objection';
import { User } from 'src/entities/user.entity';
import { Profile } from 'src/entities/profile.entity';
import { CreateUserDTO, UserResponse } from 'src/models/user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() data: CreateUserDTO): Promise<UserResponse> {
    const user = await this.userService.create(data)
    return user
  }

  @Get(':id')
  async readUser(@Param('id') id: string): Promise<UserResponse> {
    const user = await this.userService.read(id)
    return user
  }

  @Get()
  async showAllUsers(): Promise<UserResponse[]> {
    const users = await this.userService.showAll()
    return users
  }
}
