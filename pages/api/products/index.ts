import type { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "../../../fixtures/BookOnline/productList";
import Product from "../../../models/Product";
import nc from "next-connect";
import db from "../../../utils/db";

const handler = nc();

handler.get(async (req: NextApiRequest, res: NextApiResponse<IProduct[]>) => {
  await db.connect();
  const products = await Product.find({});
  await db.disconnect();
  res.status(200).json(products);
});

export default handler;

// export default async function handler(req: NextApiRequest, res: NextApiResponse<IProduct[]>) {
//   await db.connect();
//   const products = await Product.find({});
//   await db.disconnect();
//   res.status(200).json(products);
// }
