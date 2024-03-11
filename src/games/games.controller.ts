import { Body, Controller, Logger, Post } from "@nestjs/common";
import { CreateGameDto, JoinGameDto } from "./dto/games.dto";
import { GamesService } from "./games.service";

@Controller('games')
export class GamesController {
  constructor(private gamesService: GamesService) { }
  @Post()
  async create(@Body() createGameDto: CreateGameDto) {
    const result = await this.gamesService.createGame(createGameDto)
    console.log(result)
    return result
  }
  @Post('/join')
  async join(@Body() joinGameDto: JoinGameDto) {
    const result = await this.gamesService.joinGame(joinGameDto)
    console.log(result)
    return result
  }
  @Post('/rejoin')
  async rejoin() {
    // Logger.log('In rejoin!')
    const result = await this.gamesService.rejoinGame({
      game_id: 'From token',
      user_id: 'also toekn',
      username: 'tokensito'
    })
    return result
  }
}