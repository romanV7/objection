import { Injectable } from '@nestjs/common';
import { InjectModel, synchronize } from 'nestjs-objection';
import { User } from 'src/entities/user.entity';
import { CreateUserDTO, UserResponse } from 'src/models/user.model';

@Injectable()
export class UserService {
  constructor(
   @InjectModel(User) private readonly userModel: typeof User,
 ) {}

 async create(data: CreateUserDTO): Promise<UserResponse> {
   await synchronize(User)
   const user = await this.userModel.query().insert(data)
   return user
 }

 async read(id: string): Promise<UserResponse> {
   await synchronize(User);
   const user = await this.userModel.query().where({id}).withGraphFetched('comments')
   return user[0]
 }

 async showAll(): Promise<UserResponse[]> {
   await synchronize(User);
   const users = await this.userModel.query().withGraphFetched('comments')
   return users
 }
}
