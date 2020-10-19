import express from "express";
import path from "path";
import "express-async-errors";
import cors from "cors";

import "./database/connection";

import routes from "./routes";
import errorHandler from "./errors/handler";

const app = express();

app.use(cors()); //if empty allows api requests from any frontend app
app.use(express.json()); //define o express para ler json data
app.use(routes);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads"))); //creates url for uploaded images.
app.use(errorHandler);
app.listen(3333);
