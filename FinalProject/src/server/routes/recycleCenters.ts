import * as express from "express";
import DB from "../db";

const router = express.Router();

router.get("/:id?", async (req, res) => {
  const id = req.params.id;
  //get one center
  if (id) {
    try {
      let recycleCenter = await DB.RecycleCenters.one(id);
      res.json(recycleCenter);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  } else {
    //get all centers
    try {
      let recycleCenters = await DB.RecycleCenters.all(id);
      res.json(recycleCenters);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
});

// router.get('/api/centerMaterials', async (req, res) =>{

// })

// router.get('/api/county', async (req, res) =>{

// })

export default router;
