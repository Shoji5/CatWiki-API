import cors from "cors";
import express, { Application } from "express";
import NotFound from "./middlewares/notFound.middleware";
import BreedsRoute from "./routes/breeds.route";

export default class Server {
  private app: Application;

  constructor(private port: number) {
    this.app = express();
    this.settings();
    this.middlewaresInput();
    this.routes();
    this.middlewaresOutput();
  }
  private settings() {
    this.app.use(cors());
  }

  private middlewaresInput() {
    this.app.use("/api/breeds", BreedsRoute);
  }

  private routes() {}

  private middlewaresOutput() {
    this.app.use(NotFound);
  }

  public start() {
    this.app.listen(this.port, () => console.log(`✅ server is running on http://localhost:${this.port}/`));
  }
}
