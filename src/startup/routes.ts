import { Application } from "express";
import test from '../routes/test';

export default (app: Application) => {
    app.use('/test', test);
};