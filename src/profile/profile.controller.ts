import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDTO, ProfileResponse } from 'src/models/profile.model';
import { ResponseObject } from 'src/models/response.model';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Post()
  async createProfile(@Body() data: CreateProfileDTO): Promise<ResponseObject<'profile', ProfileResponse>> {
    const profile = await this.profileService.create(data)
    return { profile }
  }

  @Get(':id')
  async readProfile(@Param('id') id: string): Promise<ResponseObject<'profile', ProfileResponse>> {
    const profile = await this.profileService.read(id)
    return { profile }
  }

  @Get()
  async showAllProfiles(): Promise<ResponseObject<'profiles', ProfileResponse[]>> {
    const profiles = await this.profileService.showAll()
    return { profiles }
  }
}
