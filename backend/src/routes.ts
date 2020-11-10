import { Router } from "express";
import multer from "multer";

import uploadConfig from "./config/upload";
import AuthController from "./controllers/AuthController";
import OrphanagesController from "./controllers/OrphanagesController";
import UserController from "./controllers/UserController";
import authMiddeware from "./middlewares/authMiddleware";

const routes = Router();
const upload = multer(uploadConfig);

routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanage/:id", OrphanagesController.show);
routes.get("/user", authMiddeware, UserController.index);

routes.post("/orphanages", upload.array("images"), OrphanagesController.create);
routes.post("/register", UserController.create);
routes.post("/authenticate", AuthController.auth);

export default routes;
