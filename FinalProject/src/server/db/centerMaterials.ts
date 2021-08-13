import { Query } from "./index";

const all = async (id: string) => Query(`
SELECT * FROM centerMaterials`);

const one = (id: string) => Query(`
SELECT * FROM centerMaterials WHERE materials.id = ?;
`,[id]);

const getCenter = ( id: string) => Query (`
select recycleCenters.name, recycleCenters.addr, recycleCenters.hours, recycleCenters.countyid 
from recycleCenters
join centerMaterials on recycleCenters.id = centerid
where centerMaterials.materialsid = ?;
`, [id])

const getMaterialsByCenter = (id: string) => Query(`select materials.id, materials.name from materials
join centerMaterials on centerMaterials.materialsid = materials.id
where centerMaterials.centerid = ?`, [id])


export default {
  all,
  one,
  getCenter,
  getMaterialsByCenter
};
