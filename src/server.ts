import express, { Application } from "express";
import config from './config';
import initMiddleware from './startup/middleware';
import initRoutes from './startup/routes';

(async () => {

    const app: Application = express();

    await initMiddleware(app);
    await initRoutes(app);

    app.listen(config.port, () => {
        console.log(`Listening on port ${config.port}...`);
    })

})();