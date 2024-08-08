import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks:{
    async signIn({user, account, profile}) {
        if (account?.provider === "github") {
            if (user.email === 'alexpleonhardt@gmail.com') return true;
        }
        return false;
    },
  }
});