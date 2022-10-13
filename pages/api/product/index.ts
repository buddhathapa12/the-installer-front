import { NextApiRequest, NextApiResponse } from "next";
import { IProduct, ProductsData } from "../../../fixtures/BookOnline/productList";
import Product from "../../../models/Product";
import db from "../../../utils/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const database = db.connectToDatabase();
  const productList: IProduct[] = await Product.find();
  res.status(200).send(productList);
}
