import express from "express";
import {
  deleteCategory,
  getOneCategory,
  getCategory,
  postCategory,
  putCategory,
} from "../controllers/categoryControllers.js";

const routes = express.Router();

routes.get("/getCategory", getCategory);
routes.post("/postCategory", postCategory);
routes.put("/putCategory/:id", putCategory);
routes.get("/getOneCategory/:id", getOneCategory);
routes.delete("/deleteCategory/:id", deleteCategory);

export default routes;
