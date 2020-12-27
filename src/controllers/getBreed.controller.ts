import { CountDocument } from "./../models/count.model";
import Axios from "axios";
import { Request, Response } from "express";
import Count from "../models/count.model";

const getBreedController = (req: Request, res: Response) => {
  Axios.get("https://api.thecatapi.com/v1/images/search", {
    params: {
      limit: 9,
      breed_id: req.params.id,
    },
  }).then((result) => {
    if (result.data.length === 0) return res.json({ status: "err", msg: "wrong breed id" });
    Count.findOne({ breed_id: req.params.id }, (err, res: CountDocument) => {
      if (!res) new Count({ breed_id: req.params.id, count: 1 }).save();
      else {
        res.count++;
        res.save();
      }
    });
    let temp = result.data[0].breeds[0];
    return res.json({
      id: temp.id,
      name: temp.name,
      description: temp.description,
      temperament: temp.temperament,
      origin: temp.origin,
      life_span: temp.life_span,
      adaptability: temp.adaptability,
      affection_level: temp.affection_level,
      child_friendly: temp.child_friendly,
      grooming: temp.grooming,
      intelligence: temp.intelligence,
      health_issues: temp.health_issues,
      social_needs: temp.social_needs,
      stranger_friendly: temp.stranger_friendly,
      images: result.data.map((x: any) => x.url),
    });
  });
};

export default getBreedController;
