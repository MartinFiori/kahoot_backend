import { Injectable } from "@nestjs/common";
import { CreateGame, JoinGame, RejoinGame } from "./entity/games.entity";
import { createGameID, createUserID } from "src/utils/id";

@Injectable()
export class GamesService {
  async createGame(config: CreateGame) {
    const game_id = createGameID()
    const user_id = createUserID()
    return {
      ...config,
      user_id,
      game_id
    }
  }
  async joinGame(config: JoinGame) {
    const user_id = createUserID()

    return {
      ...config,
      user_id
    }
  }
  async rejoinGame(config: RejoinGame) {
    return config
  }
}