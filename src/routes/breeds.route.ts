import { Router } from "express";
import getAllBreedController from "../controllers/getAllBreeds.controller";

const BreedsRoute = Router();

BreedsRoute.get("/", getAllBreedController);

export default BreedsRoute;
