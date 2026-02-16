import http from "node:http"
import path from "node:path"
import { serveStatic } from "./utils/staticServer.js"
import fs from "node:fs"
import { getData } from "./utils/getData.js"
import { handleGet } from "./handelers/routehandlers.js"
import { handlePost } from "./handelers/routehandlers.js"
import { handleFacts } from "./handelers/routehandlers.js"

const PORT = 9000

const __dirName = import.meta.dirname
 
const server = http.createServer(async(req,res)=>{

    if(req.url ==="/api"){
        if(req.method === "GET"){
           return handleGet(res)
        }
        else if(req.method === "POST"){
            handlePost(req,res)
        }
    }
    else if(req.url === "/api/facts"){
        return await handleFacts(req,res)
    }

    else if(!req.url.startsWith("/api")){

        return await serveStatic(req,res,__dirName)
    }
   
})
server.listen(PORT,()=> console.log(`Connected to the Port : ${PORT}`))