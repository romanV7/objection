import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from 'src/entities/user.entity';
import { ObjectionModule } from 'nestjs-objection'
import { Profile } from 'src/entities/profile.entity';

@Module({
  imports: [
    UserModule,
    ObjectionModule.forFeature([User, Profile]),
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
