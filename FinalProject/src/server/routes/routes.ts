import * as express from "express";
import DB from "../db";
import commentsRouter from "./comments";
import recycleCentersRouter from "./recycleCenters";
import materialsRouter from "./materials"
import contactformRouter from "./contactform";
import centerMaterialsRouter from "./centerMaterials";

const router = express.Router();

router.use("/comments", commentsRouter);

router.use("/recycleCenters", recycleCentersRouter);

router.use("/materials", materialsRouter);

router.use("/contactform", contactformRouter);

router.use("/centerMaterials", centerMaterialsRouter);

export default router;
