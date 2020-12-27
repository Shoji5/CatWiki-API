import { Router } from "express";
import getAllBreedController from "../controllers/getAllBreeds.controller";
import getBreedController from "../controllers/getBreed.controller";

const BreedsRoute = Router();

BreedsRoute.get("/", getAllBreedController);
BreedsRoute.get("/:id", getBreedController);

export default BreedsRoute;
