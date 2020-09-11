import { Injectable } from '@nestjs/common';
import { InjectModel, synchronize } from 'nestjs-objection';
import { User } from 'src/entities/user.entity';
import { Comment } from 'src/entities/comment.entity'
import { CreateCommentDTO, CommentResponse } from 'src/models/comment.model';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment) private readonly commentModel: typeof Comment,
  ) {}

  async create(data: CreateCommentDTO): Promise<CommentResponse> {
    await synchronize(User)
    await synchronize(Comment)
    const comment = await this.commentModel.query().insert({userId: data.userId, profileId: data.profileId, comment: data.comment})
    return comment
  }

  async read(id: string): Promise<CommentResponse> {
    await synchronize(Comment)
    const comment = await this.commentModel.query().where({id})
    return comment[0]
  }

  async showAll(): Promise<CommentResponse[]> {
    await synchronize(Comment)
    const comments = await this.commentModel.query()
    return comments
  }
}
