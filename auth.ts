import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { clientPromise } from "@/services/mongodb";
import { authConfig } from "./auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  session: { strategy: "jwt" },
  ...authConfig,
  callbacks: {
    ...authConfig.callbacks,
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        // Whitelist checks against environment configured admin email
        if (user.email === process.env.ADMIN_EMAIL) {
          token.role = "admin";
        } else {
          token.role = user.role || "guest";
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = (token.role as "admin" | "guest") || "guest";
      }
      return session;
    },
  },
});
