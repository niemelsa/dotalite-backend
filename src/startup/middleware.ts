import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';

export default (app: Application) => {
    app.set("port", process.env.PORT);
    app.use(helmet());
    app.use(cors());
    app.use(express.json());
}