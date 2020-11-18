import passport from 'passport';
import { Strategy } from 'passport-steam';
import config from '../config/index';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async () => {
  passport.use(
    new Strategy(
      {
        returnURL: 'http://localhost:7000/auth/steam/return',
        realm: 'http://localhost:7000/',
        apiKey: config.secrets.steamKey,
      },
      async (identifier: any, profile: any, done: any) => {
        let user = await prisma.user.findOne({
          where: {
            id: parseInt(profile.id, 10),
          },
        });

        if (!user) {
          try {
            user = await prisma.user.create({
              data: {
                id: parseInt(profile.id, 10),
                displayName: profile.displayName,
                image: profile._json.avatarfull,
              },
            });
          } catch (err) {
            console.error(err);
            return done(err);
          }
        }

        return done(null, user);
      }
    )
  );
};
