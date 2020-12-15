import { catAPIKey } from "./../config/index.config";
import { NextFunction, Request, Response } from "express";

const CatAPI = (req: Request, res: Response, next: NextFunction) => {
  res.append("x-api-key", catAPIKey);
  next();
};

export default CatAPI;
