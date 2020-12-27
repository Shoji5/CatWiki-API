import { config } from "dotenv";
config();

export const port = Number(process.env.PORT);
export const catAPIKey = process.env.CATAPI_KEY;
export const mongo_uri = process.env.MONGO_URI as string;
