import { Query } from "./index";

const all = async (id: string) => Query(`
SELECT materials.id, materials.name
FROM materials;
`, [id]);

const one = (id: string) => Query(`
SELECT * FROM materials WHERE materials.id = ?;
`,[id]);

export default {
  all,
  one,
};
