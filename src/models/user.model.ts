import { IsString, IsBoolean, IsNumber } from "class-validator";
import { Profile } from "src/entities/profile.entity";

export class CreateUserDTO {
  @IsString()
  email?: string

  @IsBoolean()
  active?: boolean

  @IsBoolean()
  ban?: boolean

  @IsNumber()
  profileId: number
}

export class UserResponse {
  id?: number
  email?: string
  active?: boolean
  ban?: boolean
  profileId?: number
  profile?: Profile
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}
