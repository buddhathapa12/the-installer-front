import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import UserDetail from "../../../models/User";
import db from "../../../utils/db";

export default NextAuth({
  secret: process.env.JWT_SECRET,
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn(params) {
      console.log("Params from sign in: ", { ...params });
      const database = await db.connectToDatabase();
      const user = await UserDetail.findOne({ email: params.user.email });
      if (!user) {
        await UserDetail.create({ ...params.user });
      }
      return true;
    },
  },
});
