import { Response } from 'express';
import { Request } from 'express';

const test = (req: Request, res: Response) => {
  res.status(200).send({ user: 'testing' });
};

export default {
  test,
};
