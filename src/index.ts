import express, { Application, json, urlencoded } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import config from './config';
import authRouter from './resources/auth/auth.router';
import userRouter from './resources/user/user.router';
import playersRouter from './resources/players/players.router';
import searchRouter from './resources/search/search.router';
import session from 'express-session';
import passportInit from './utils/passport';
import passport from 'passport';

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
passportInit();
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/players', playersRouter);
app.use('/search', searchRouter);

app.get('/', (req, res) => {
  console.log(req.isAuthenticated());
  res.send(req.user);
});

app.get('/test', (req, res) => {
  const testObj = {
    token: '326726432743264327',
    message: 'hellou',
  };

  res.status(200).send(testObj);
});

async function bootstrap() {
  app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}...`);
  });
}

bootstrap();
