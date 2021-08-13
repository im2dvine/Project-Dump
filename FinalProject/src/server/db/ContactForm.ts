import { Query } from "./index";

const all = async () => Query(`
SELECT ContactForm.id, ContactForm.content, ContactForm.name, ContactForm.email
FROM Comments
`);

const one = async (id: string) => Query(`
SELECT ContactForm.content, ContactForm.name 
FROM Comments
`, [id]);

const post = (name: string, email: string, content: string) => Query(`
INSERT INTO ContactForm (name, email, content) values (?, ?, ?)
`,[name, email, content]);



export default {
  all,
  one,
  post
};
