import 'dotenv/config'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication, ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import * as http from 'http';

async function bootstrap() {
  const server = express()
  const app = await NestFactory.create<NestExpressApplication>(AppModule, new ExpressAdapter(server))
  await app.init()
  http.createServer(server).listen(process.env.PORT || 4000)
}
bootstrap();
