import * as express from "express";
import DB from "../db";

const router = express.Router();

router.get("/materialsByCenter/:id", async (req, res) => {
  const id = req.params.id;
  let materialNames = await DB.centerMaterials.getMaterialsByCenter(id);
  res.json(materialNames);
})

router.get("/:id?", async (req, res) => {
  const id = req.params.id;
  if (id) {
    try {
      let centerMaterials = await DB.centerMaterials.getCenter(id);
      res.json(centerMaterials);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  } else {
    try {
      let centerMaterials = await DB.centerMaterials.all(id);
      res.json(centerMaterials);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
});


export default router;
