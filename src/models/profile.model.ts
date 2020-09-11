import { IsString } from "class-validator";
import { User } from "src/entities/user.entity";

export class CreateProfileDTO {
  @IsString()
  nickname?: string

  @IsString()
  firstName?: string

  @IsString()
  lastName?: string
}

export class ProfileResponse {
  id?: number
  nickname?: string
  firstName?: string
  lastName?: string
  user?: User
}
