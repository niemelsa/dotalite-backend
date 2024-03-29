import { Favorite } from './favorite.interface';

export interface UserInfo {
  id: number;
  name: string;
  email: string;
  image: string;
  uid: string;
  playerId?: string;
  favorites?: Favorite[];
}

export interface FirebaseUser {
  name: string;
  email: string;
  picture: string;
  uid: string;
}
