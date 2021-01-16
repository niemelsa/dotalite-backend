import { IsNumber, IsString, Length, Max, Min } from 'class-validator';

export class AddFavoriteRequest {
  @IsNumber()
  favoriteId: number | null = null;

  @IsString()
  image: string | null = null;

  @IsString()
  @Length(4, 10)
  type: string | null = null;

  @IsString()
  title: string | null = null;

  constructor(init?: Partial<AddFavoriteRequest>) {
    Object.assign(this, init);
  }
}

export class HasPlayerId {
  @IsNumber()
  @Min(10000)
  playerId: number | null = null;

  constructor(init?: Partial<AddFavoriteRequest>) {
    Object.assign(this, init);
  }
}
