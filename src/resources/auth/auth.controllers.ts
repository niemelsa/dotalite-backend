import { verifyJwtToken } from './../../utils/jwt';
import { UserRequest } from './../../interfaces/user-request.interface';
import { Response, Request } from 'express';
import * as admin from 'firebase-admin';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const verifyToken = async (req: UserRequest, res: Response) => {
  console.log('VERIFYING TOKEN');
  const token = req.token;

  verifyJwtToken(token)
    .then((user) => {
      res.send({ token, user });
    })
    .catch((error) => {
      res.status(403).send(error);
    });
};

const fetchUserInfo = async (req: Request, res: Response) => {
  const idToken = req.params['token'];

  let { uid, email, picture, name } = await admin.auth().verifyIdToken(idToken);

  let user = await prisma.user.findOne({
    where: {
      uid,
    },
  });

  if (!user) {
    try {
      user = await prisma.user.create({
        data: {
          uid,
          email,
          image: picture,
          name,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  res.status(200).send({ ...user });
};

export default {
  verifyToken,
  fetchUserInfo,
};
