// export interface Rooms {
//   [key: string]: string;
// }

export interface Rooms extends Map<string, string[]> {}

export class User {
  id: string;
  username: string;
  score: number;
  guesses: number[];
}
