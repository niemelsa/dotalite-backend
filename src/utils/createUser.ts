import { FirebaseUser, UserInfo } from './../interfaces/user-info.interface';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createUser = async ({
  uid,
  email,
  picture,
  name,
}: FirebaseUser) => {
  let user;

  try {
    user = await prisma.user.create({
      data: {
        uid,
        email,
        image: picture,
        name,
      },
    });
  } catch (error) {
    console.log(error);
  }

  return user as UserInfo;
};
