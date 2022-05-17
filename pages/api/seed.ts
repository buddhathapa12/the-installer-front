import nc from "next-connect";
import Product from "../../models/Product";
import db from "../../utils/db";
import { IProduct, ProductsData } from "../../fixtures/BookOnline/productList";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = nc();

handler.get(async (req: NextApiRequest, res: NextApiResponse<any>) => {
  await db.connect();
  await Product.deleteMany();
  await Product.insertMany(ProductsData);
  await db.disconnect();
  res.send({ message: "seeded successfully" });
});

export default handler;
