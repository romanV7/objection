import { IsString, IsOptional } from "class-validator";
import { User } from "src/entities/user.entity";
import { Profile } from "src/entities/profile.entity";

export class CreateCommentDTO {
  comment: string
  profileId: number
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
