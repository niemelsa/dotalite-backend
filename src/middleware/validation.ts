import { ValidationError, Validator } from 'class-validator';
import { Request, RequestHandler, Response, NextFunction } from 'express';
import { deserialize } from 'json-typescript-mapper';

type Constructor<T> = { new (): T };

export function validate<T>(type: Constructor<T>): RequestHandler {
  let validator = new Validator();

  return (req, res, next) => {
    let input: object = deserialize<any>(type, req.body);

    let errors = validator.validateSync(input);
    if (errors.length > 0) {
      next(errors);
    } else {
      req.body = input;
      next();
    }
  };
}

export function validationError(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof Array && err[0] instanceof ValidationError) {
    res.status(400).send({ errors: err });
  } else {
    next(err);
  }
}
