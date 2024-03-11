import { Length, IsString, IsDefined, IsArray, ArrayMaxSize, isString, isDefined, ArrayMinSize, IsNotEmpty } from 'class-validator'

export class CreateGameDto {
  // @IsNotEmpty()
  // @ArrayMinSize(1)
  // users: User[]

  @IsString()
  @IsDefined()
  id: string

  @IsString()
  @IsDefined()
  user_id: string
}


export class User {
  @IsString()
  @IsDefined()
  id: string

  @IsArray()
  @ArrayMaxSize(10)
  guesses: number[]

  @IsString()
  @IsDefined()
  @Length(1, 25)
  name: string
}


export class JoinGameDto {
  @IsString()
  @Length(6, 6)
  game_id: string;

  @IsString()
  @Length(1, 25)
  name: string;
}