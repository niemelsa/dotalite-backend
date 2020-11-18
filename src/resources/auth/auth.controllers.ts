import { Response } from 'express';
import { Request } from 'express';

const test = (req: Request, res: Response) => {
  res.status(200).send({ message: 'heloustia' });
};

export default {
  test,
};
