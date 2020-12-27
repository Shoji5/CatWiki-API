import Axios from "axios";
import { Request, Response } from "express";

const getAllBreedController = (req: Request, res: Response) => {
  Axios.get("https://api.thecatapi.com/v1/breeds").then((result) => {
    res.json(result.data.map((x: any) => ({ name: x.name, id: x.id })));
  });
};

export default getAllBreedController;
