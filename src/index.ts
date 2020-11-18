import express, { Application, json, urlencoded } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import config from './config';
import authRouter from './resources/auth/auth.router';
import userRouter from './resources/user/user.router';

const app: Application = express();

app.disable('x-powered-by');

// middleware
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(helmet());

// routes
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

async function bootstrap() {
  app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}...`);
  });
}

bootstrap();
