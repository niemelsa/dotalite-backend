import { UserInfo } from './../interfaces/user-info.interface';
import { UpdateUser } from './../interfaces/update-user.interface';
import { PrismaClient } from '@prisma/client';
import { findUser } from './findUser';

const prisma = new PrismaClient();

export const updateUser = async (uid: string, newValues: UpdateUser) => {
  let user: any = await findUser(uid);

  if (!user) {
    return null;
  }

  const { id, ...values } = user;

  try {
    let updated = { ...values, ...newValues };

    user = await prisma.user.update({
      where: {
        uid,
      },
      data: {
        ...updated,
      },
      include: {
        favorites: true,
      },
    });
  } catch (error) {
    console.log(error);
  }

  return user;
};
