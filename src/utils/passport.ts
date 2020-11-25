import passport from 'passport';
import { Strategy } from 'passport-steam';
import config from '../config/index';
import { PrismaClient } from '@prisma/client';
import bigInt from 'big-integer';

const prisma = new PrismaClient();

export default async () => {
  passport.use(
    new Strategy(
      {
        returnURL: 'http://localhost:3000/auth/steam/return',
        realm: 'http://localhost:3000/',
        apiKey: config.secrets.steamKey,
      },
      async (identifier: any, profile: any, done: any) => {
        // convert 64bit steamid to 32bit
        let id32 = bigInt(profile.id).minus('76561197960265728').valueOf();

        let user = await prisma.user.findOne({
          where: {
            id: id32,
          },
        });

        if (!user) {
          try {
            user = await prisma.user.create({
              data: {
                id: id32,
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
