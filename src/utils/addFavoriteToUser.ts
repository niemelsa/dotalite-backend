import { Favorite } from './../interfaces/favorite.interface';
import { UserInfo } from './../interfaces/user-info.interface';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const addFavoriteToUser = async ({
  userId,
  favoriteId,
  type,
  image,
  title,
}: Favorite) => {
  let user;

  try {
    user = await prisma.user.update({
      where: {
        uid: userId,
      },
      data: {
        favorites: {
          create: {
            type,
            favoriteId,
            image,
            title,
          },
        },
      },
    });
  } catch (err) {
    console.log(err);
  }

  return user as UserInfo;
};
