import path from "node:path"
import fs from "node:fs/promises"
import { getData } from "./getData.js"
export async function addNewSightings(newSightings) {
    
try {
    const sightings = await getData()
    sightings.push(newSightings)
    const pathJson = path.join("Data","data.json")
    await fs.writeFile(pathJson,JSON.stringify(sightings,null,2),"utf8")
} catch (err) {
    throw new Error(err)
}
    
}