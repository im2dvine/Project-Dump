import { Query } from "./index";

const post = async (name: string) => Query(`
INSERT INTO Users (name) value (?);
`,[name]);

export default {
  post,
};
