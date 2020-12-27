import { CountDocument } from "./../models/count.model";
import { Request, Response } from "express";
import Count from "../models/count.model";
import Axios from "axios";

const topSearchedController = (req: Request, res: Response) => {
  Count.find({}, null, { sort: { count: -1 }, limit: 10 }).then((topSearcheds: any[]) => {
    Axios.get("https://api.thecatapi.com/v1/breeds").then((result) => {
      res.json(
        topSearcheds.map((topSearched) => {
          let cat = result.data.find((e: any) => e.id == topSearched.breed_id);
          return { id: topSearched.breed_id, name: cat.name, description: cat.description, image: cat.image.url };
        })
      );
    });
  });
};

export default topSearchedController;
