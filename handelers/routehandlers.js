import {getData} from "../utils/getData.js"
import {sendResponse} from "../utils/giveRes.js"
import {parseJsonBody} from "../utils/parseJSONbody.js"
import { addNewSightings } from "../utils/addNewSightings.js"
import { sanitizeHTML } from "../utils/sanitizehtml.js"
import { sightingsEvents } from "../events/sightingEvents.js"
import { facts } from "../Data/excitingFacts.js"

export async function handleGet(res){
    const data = await getData()
    const content = JSON.stringify(data)
    sendResponse(res,200,"application/json",content)

}

export async function handlePost(req,res){
    try {
        const parseBody = await parseJsonBody(req)
        const sanitizeBody = sanitizeHTML(parseBody)
        addNewSightings(sanitizeBody)
        sightingsEvents.emit("sighting-added",sanitizeBody)
        sendResponse(res,201,"application/json",JSON.stringify(sanitizeBody))
    } catch (err) {
        sendResponse(res,400,"application/json",JSON.stringify({Error:err}))
    }
}

export async function handleFacts(req,res) {
    res.statusCode = 200
    res.setHeader("Content-Type","text/event-stream")
    res.setHeader("Cache-Control","no-cache")
    res.setHeader("Connection","keep-alive")


    setInterval(()=>{
        let ranIndex = Math.floor(Math.random()*facts.length)

        res.write(`data: ${JSON.stringify({event:"facts-update",facts:facts[ranIndex]})}\n\n`)
    },3000)
}