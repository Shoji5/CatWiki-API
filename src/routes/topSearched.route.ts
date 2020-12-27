import { Router } from "express";
import topSearchedController from "../controllers/topSearched.controller";

const TopSearchedRoute = Router();

TopSearchedRoute.get("/", topSearchedController);

export default TopSearchedRoute;
