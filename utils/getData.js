import path from "node:path"
import fs from "node:fs/promises"

export async function getData(){
    
try{
    
    const jsonPath = path.join("Data","data.json")
    const data = await fs.readFile(jsonPath,"utf8")
    const parseData = JSON.parse(data)
    return parseData
}catch(err){
    console.log(err)
    return []
}
}
