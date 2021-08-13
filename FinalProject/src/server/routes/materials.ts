import * as express from "express";
import DB from "../db";

const router = express.Router();

router.get("/:id?", async (req, res) => {
  const id = req.params.id;
  //get one material
  if (id) {
    try {
      let materials = await DB.materials.one(id);
      res.json(materials[0]);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  } else {
    //get all materials
    try {
      let materials = await DB.materials.all(id);
      res.json(materials);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
});

export default router;
