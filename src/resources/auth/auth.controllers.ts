import { newToken } from './../../utils/jwt';
import { UserRequest } from './../../interfaces/user-request.interface';
import { PrismaClient } from '@prisma/client';
import { Response } from 'express';

const prisma = new PrismaClient();

const handleLogin = async (req: UserRequest, res: Response) => {
  try {
    const token = newToken(req.user);
    res.status(200).header('token', token).redirect('/');
  } catch (e) {
    console.error(e);
    res.send({ message: 'shit happens' });
  }
};

export default {
  handleLogin,
};
