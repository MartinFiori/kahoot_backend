// export interface Rooms {
//   [key: string]: string;
// }

export interface Rooms extends Map<string, string[]> { }

export type User = {
  id: string;
  username: string;
  score: number;
  guesses: number[];
};

export type CreateGame = {
  id: string;
  user_id: string;
};

export type JoinGame = {
  game_id: string;
};

export type RejoinGame = {
  game_id: string;
  user_id: string;
  username: string;
};
