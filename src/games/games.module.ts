import { Module } from '@nestjs/common';
import { GamesGateway } from './games.gateway';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [GamesController],
  providers: [GamesService]
})
export class GamesModule { }
