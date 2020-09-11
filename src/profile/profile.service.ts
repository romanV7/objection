import { Injectable } from '@nestjs/common';
import { InjectModel, synchronize } from 'nestjs-objection';
import { Profile } from 'src/entities/profile.entity';
import { CreateProfileDTO, ProfileResponse } from 'src/models/profile.model';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(Profile) private readonly profileModel: typeof Profile,
  ) {}

  async create(data: CreateProfileDTO): Promise<ProfileResponse> {
    await synchronize(Profile);
    const profile = await this.profileModel.query().insert(data);
    return profile
  }

  async read(id: string): Promise<ProfileResponse> {
    await synchronize(Profile);
    const profile = await this.profileModel.query().where({id}).withGraphFetched('user')
    return profile[0]
  }

  async showAll(): Promise<ProfileResponse[]> {
    await synchronize(Profile);
    const profiles = await this.profileModel.query()
    return profiles
  }
}
