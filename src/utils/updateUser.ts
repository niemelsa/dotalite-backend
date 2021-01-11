import { UserInfo } from './../interfaces/user-info.interface';
import { PrismaClient } from '@prisma/client';
import { findUser } from './findUser';

const prisma = new PrismaClient();

interface UpdateUserOptions {
  name?: string;
  image?: string;
  playerId?: string;
}

export const updateUser = async (uid: string, newValues: UpdateUserOptions) => {
  let user: any = await findUser(uid);

  if (!user) {
    return null;
  }

  try {
    let updatedValues = { ...user, ...newValues };

    user = await prisma.user.update({
      where: {
        uid,
      },
      data: {
        ...updatedValues,
      },
    });
  } catch (error) {
    console.log(error);
  }

  return user as UserInfo;
};
