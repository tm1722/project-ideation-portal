import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { compare } from 'bcrypt-ts';
import { getUser } from 'app/db';
import { authConfig } from 'app/auth.config';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize({ email, password }: any) {
        const users = await getUser(email);
        const user = users[0];

        if (!user) return null;

        const passwordsMatch = await compare(password, user.password!);
        if (!passwordsMatch) return null;

        // Must return a user object with id + email
        return {
          id: user.id,
          email: user.email,
          name: user.name ?? undefined, // optional
        };
      },
    }),
  ],
});
