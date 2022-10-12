import { NextApiRequest, NextApiResponse } from "next";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import NextAuth from "../auth/[...nextauth]";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Api is called");
  // const session = await getServerSession({ req, res }, NextAuth);
  // console.log("server Session:", session);
  res.send(200);
}
