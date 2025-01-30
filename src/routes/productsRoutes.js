import express from "express";
import {
  deleteProducts,
  getOneProduct,
  getProducts,
  postProducts,
  putProducts,
} from "../controllers/productsCotrollers.js";

const routes = express.Router();

routes.get("/getProducts", getProducts);
routes.post("/postProducts", postProducts);
routes.put("/putProducts/:id", putProducts);
routes.get("/getOneProduct/:id", getOneProduct);
routes.delete("/deleteProducts/:id", deleteProducts);

export default routes;
