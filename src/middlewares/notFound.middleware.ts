import { Request, Response, Router } from "express";

const NotFound = Router();

NotFound.use((req: Request, res: Response) => {
  res.status(404).json({ status: "err", msg: "Not Found!!!" });
});

export default NotFound;
