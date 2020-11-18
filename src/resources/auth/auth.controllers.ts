import { UserRequest } from './../../interfaces/user-request.interface';
import { PrismaClient } from '@prisma/client';
import { Response } from 'express';

const prisma = new PrismaClient();

const handleLogin = async (req: UserRequest, res: Response) => {
  console.log(req.user);
};

export default {
  handleLogin,
};
