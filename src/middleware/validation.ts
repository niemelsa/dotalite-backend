import { ValidationError, Validator } from 'class-validator';
import { Request, RequestHandler, Response, NextFunction } from 'express';

type Constructor<T> = { new (): T };

export function validate<T extends object>(
  type: Constructor<T>
): RequestHandler {
  let validator = new Validator();
  let instance = new type();

  return (req: Request, res: Response, next: NextFunction) => {
    Object.keys(instance).forEach((key) => {
      instance[key as keyof T] = req.body[key];
    });

    let errors = validator.validateSync(instance);
    if (errors.length > 0) {
      next(errors);
    } else {
      Object.assign(req.body, instance);
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
