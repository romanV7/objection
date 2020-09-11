import { IsString, IsNumber } from "class-validator"


export class CreateCommentDTO {
  @IsString()
  comment: string

  @IsNumber()
  profileId: number

  @IsNumber()
  userId: number
}

export class CommentResponse {
  id?: number
  comment?: string
  userId?: number
  profileId?: number
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}
