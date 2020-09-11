import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { ObjectionModule } from 'nestjs-objection'
import { Profile } from '../entities/profile.entity';

@Module({
  imports: [
    ProfileModule,
    ObjectionModule.forFeature([Profile]),
  ],
  providers: [ProfileService],
  controllers: [ProfileController]
})
export class ProfileModule {}
