import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from 'src/entities/user.entity';
import { Comment } from 'src/entities/comment.entity';
import config from '../config.js'
import { CommentModule } from 'src/comment/comment.module';
import { ObjectionModule, Model } from 'nestjs-objection'
import { Profile } from 'src/entities/profile.entity';

@Module({
  imports: [
    UserModule,
    //CommentModule,
    //ObjectionModule.forRoot({ Model, config: config}),
    ObjectionModule.forFeature([User, Profile]),
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
