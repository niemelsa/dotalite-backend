import { UserInfo } from './../interfaces/user-info.interface';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const findUser = async (uid: string) => {
  let user;

  try {
    user = await prisma.user.findOne({
      where: {
        uid,
      },
    });
  } catch (error) {
    console.log(error);
  }

  return user as UserInfo;
};
