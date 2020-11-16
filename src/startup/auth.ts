import { Application } from "express";
import passport from 'passport';

export default async (app: Application) => {
    passport.serializeUser(async (user: any, done) => {
        done(null, user.id);
    });
};