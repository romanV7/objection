import { Controller, Body, Param, Post, Get } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentResponse, CreateCommentDTO } from 'src/models/comment.model';

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Get()
  async showAllComments(): Promise<CommentResponse[]> {
    const comments = await this.commentService.showAll()
    return comments
  }

  @Post()
  async createComment(@Body() data: CreateCommentDTO): Promise<CommentResponse> {
    const comment = await this.commentService.create(data)
    return comment
  }

  @Get(':id')
  async readComment(@Param('id') id: string): Promise<CommentResponse> {
    const comment = await this.commentService.read(id)
    return comment
  }
}
