import path from "node:path";
import fs from "node:fs/promises"
import {sendResponse} from "./giveRes.js"
import {getContententType} from "./getConType.js"

export async function serveStatic(req,res,baseDir){

    /*if (req.url === "/favicon.ico") {
  sendResponse(res, 204, "text/plain", "");
  return;
}*/

    const publicDir = path.join(baseDir,"public")
    const filePath = path.join(publicDir,req.url==="./" ? "index.html":req.url)

    const ext = path.extname(filePath)
    const contenttype = getContententType(ext)

    try{
                                                                        //throw new Error("Forced server error")
        const content = await fs.readFile(filePath)
        sendResponse(res,200,contenttype,content)
    }catch(err){
        
        if(err.code ==="ENOENT"){
            const content = await fs.readFile(path.join(publicDir,"404.html"))
            sendResponse(res,404,"text/html",content)
        }
        else{
             sendResponse(res,500,"text/html","hey there its an server error")
        }
    
    }
    
}