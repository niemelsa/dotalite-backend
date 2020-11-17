import express, { Application, json, urlencoded } from "express";
import config from './config';
import cors from 'cors';
import helmet from 'helmet';

const app: Application = express();

app.disable('x-powered-by');

app.use(cors())
app.use(json())
app.use(urlencoded());
app.use(helmet());

async function bootstrap() {
    app.listen(config.port, () => {
        console.log(`Listening on port ${config.port}...`);
    })
};

bootstrap();