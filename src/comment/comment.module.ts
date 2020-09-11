import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { ObjectionModule } from 'nestjs-objection';
import { Comment } from 'src/entities/comment.entity';

@Module({
  imports: [
    CommentModule,
    ObjectionModule.forFeature([Comment]),
  ],
  providers: [CommentService],
  controllers: [CommentController]
})
export class CommentModule {}
