import express, { Application } from "express";
import config from './config';
import initMiddleware from './startup/middleware';
import initRoutes from './startup/routes';
import initAuth from './startup/auth';

async function bootstrap() {
    const app: Application = express();

    await initMiddleware(app);
    await initRoutes(app);
    await initAuth(app);

    app.listen(config.port, () => {
        console.log(`Listening on port ${config.port}...`);
    })
};

bootstrap();