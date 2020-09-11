import { Controller, Body, Param, Post, Get } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentResponse, CreateCommentDTO } from 'src/models/comment.model';
import { ResponseObject } from 'src/models/response.model';

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Get()
  async showAllComments(): Promise<ResponseObject<'comments', CommentResponse[]>> {
    const comments = await this.commentService.showAll()
    return { comments }
  }

  @Post()
  async createComment(@Body() data: CreateCommentDTO): Promise<ResponseObject<'comment', CommentResponse>> {
    const comment = await this.commentService.create(data)
    return { comment }
  }

  @Get(':id')
  async readComment(@Param('id') id: string): Promise<ResponseObject<'comment', CommentResponse>> {
    const comment = await this.commentService.read(id)
    return { comment }
  }
}
