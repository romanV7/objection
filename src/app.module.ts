import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProfileModule } from './profile/profile.module';
import { CommentModule } from './comment/comment.module';
import { ObjectionModule, Model } from 'nestjs-objection'
import config from './config.js'
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpErrorFilter } from './shared/http-error.filter';
import { LoggingInterceptor } from './shared/logging.interceptor';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ProfileModule,
    CommentModule,
    UserModule,
    ObjectionModule.forRoot({ Model, config: config}),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER, useClass: HttpErrorFilter
    },
    {
      provide: APP_INTERCEPTOR, useClass: LoggingInterceptor
    },
  ],
})
export class AppModule {}
