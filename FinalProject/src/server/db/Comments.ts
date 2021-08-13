import { Query } from "./index";

const all = async () => Query(`
SELECT Comments.id, Comments.content, Users.name
FROM Comments
JOIN Users ON Comments.userid = Users.id;
`);

const one = async (id: string) => Query(`
SELECT Comments.content, Users.name 
FROM Comments
JOIN Users ON Comments.userid = Users.id
WHERE Comments.id = ?;
`, [id]);

const post = (userid: string, content: string) => Query(`
INSERT INTO Comments (userid, content) values (?, ?)
`,[userid, content]);

const put = async (id: string, newContent: string) => Query(`
UPDATE Comments
SET content = ?
WHERE Comments.id = ?; 
`,[newContent, id]);

const destroy = async (id: string) => Query (`
DELETE FROM Comments WHERE Comments.id = ?;
`, [id]);

export default {
  all,
  one,
  post,
  put,
  destroy
};
