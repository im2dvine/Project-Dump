import * as express from "express";
import DB from "../db";

const router = express.Router();

router.get("/:id?", async (req, res) => {
  const id: string = req.params.id;

  if (id) {
    const comment = await DB.Comments.one(id);
    res.json(comment[0]);
  } else {
    const comments = await DB.Comments.all();
    res.json(comments);
  }
});

router.post("/", async (req, res) => {
  const commentObj: comment = req.body;

  try {
    const newUser = await DB.Users.post(commentObj.name);

    await DB.Comments.post(newUser.insertId, commentObj.content);

    res.send("success");
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id?", async (req, res) => {
  const id: string = req.params.id;
  const newContent: string = req.body.content;

  try {
    await DB.Comments.put(id, newContent);

    res.send("edited successfully");
  } catch (error) {
    console.log(error);
  }
});

router.delete('/:id', async (req, res) => {
  const id: string = req.params.id;

  try {
  await DB.Comments.destroy(id);

  res.send("deleted successfully");
  } catch (error) {
    console.log(error);
  }
});

interface comment {
  id?: string;
  name: string;
  content: string;
}

export default router;
