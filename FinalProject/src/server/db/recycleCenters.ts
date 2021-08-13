import { Query } from "./index";


// const findSomeByMaterial = () => Query(`SELECT materials.id, materials.name
// FROM materials;
// `, []);

const one = (id: string) => Query(`
SELECT * FROM recycleCenters WHERE recycleCenters.id = ?;
`, [id]);

const all = (id: string) => Query(`
SELECT recycleCenters.id, recycleCenters.name, recycleCenters.addr, recycleCenters.hours, county.name as county 
FROM recycleCenters 
JOIN county ON county.id = recycleCenters.countyid;
`, [id]);

export default {
  all,
  one,
  // findSomeByMaterial
};
