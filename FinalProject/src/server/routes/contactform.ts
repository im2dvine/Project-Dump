import * as express from "express";
import DB from "../db";

const router = express.Router();

router.get("/:id?", async (req, res) => {
  const id: string = req.params.id;

  if (id) {
    const contactform = await DB.ContactForm.one(id);
    res.json(contactform[0]);
  } else {
    const contactforms = await DB.ContactForm.all();
    res.json(contactforms);
  }
});

router.post("/", async (req, res) => {
  const contactformObj: contactform = req.body;

  try {
    const newContactForm =  DB.ContactForm.post(contactformObj.name, contactformObj.email, contactformObj.content);

  
    res.send("success");
  } catch (error) {
    console.log(error);
  }
});



interface contactform {
  name: string;
  email: string;
  content: string;
}

export default router;
