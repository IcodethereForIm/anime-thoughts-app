import {EventEmitter} from "node:events"
import { createAlerts } from "../utils/createAlerts.js"

export const sightingsEvents = new EventEmitter()

sightingsEvents.on("sighting-added",createAlerts)