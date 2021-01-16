import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const removeFavoriteFromUser = async (
  uid: string,
  favoriteId: string
) => {
  let user;

  try {
    user = await prisma.user.update({
      where: {
        uid,
      },
      data: {
        favorites: {
          deleteMany: { favoriteId },
        },
      },
      include: {
        favorites: true,
      },
    });
  } catch (err) {
    console.log(err);
  }

  return user;
};
