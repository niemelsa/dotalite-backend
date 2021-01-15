import { IsNumber, IsString, Length } from 'class-validator';

export class HasPlayerId {
  @IsNumber()
  playerId!: string;
}

export class AddFavoriteRequest {
  @IsNumber()
  playerId!: string;

  @IsString()
  image!: string;

  @IsString()
  @Length(4, 10)
  type!: string;

  @IsString()
  title!: string;
}

export class RemoveFavoriteRequest {
  @IsNumber()
  playerId!: string;
}
