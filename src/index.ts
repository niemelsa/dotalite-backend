import express, { Application, json, urlencoded } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import config from './config';
import authRouter from './resources/auth/auth.router';
import userRouter from './resources/user/user.router';
import playersRouter from './resources/players/players.router';
import searchRouter from './resources/search/search.router';
import session from 'express-session';

import * as admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

const app: Application = express();

app.disable('x-powered-by');

// middleware
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(helmet());
app.use(
  session({
    secret: config.secrets.sessionSecret,
    name: 'dotalite-session',
    resave: true,
    saveUninitialized: true,
  })
);

// routes
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/players', playersRouter);
app.use('/search', searchRouter);

async function bootstrap() {
  app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}...`);
  });
}

bootstrap();
