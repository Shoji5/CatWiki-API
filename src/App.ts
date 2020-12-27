import { mongo_uri } from "./config/index.config";
import cors from "cors";
import express, { Application } from "express";
import mongoose from "mongoose";
import NotFound from "./middlewares/notFound.middleware";
import BreedsRoute from "./routes/breeds.route";
import TopSearchedRoute from "./routes/topSearched.route";

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
    mongoose.connect(mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
      console.log("✅ connected mongoDB")
    );
  }

  private middlewaresInput() {
    this.app.use(cors());
  }

  private routes() {
    this.app.use("/api/breeds", BreedsRoute);
    this.app.use("/api/topsearched", TopSearchedRoute);
  }

  private middlewaresOutput() {
    this.app.use(NotFound);
  }

  public start() {
    this.app.listen(this.port, () => console.log(`✅ server is running on http://localhost:${this.port}/`));
  }
}
