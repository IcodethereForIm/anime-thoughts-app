export function sendResponse(res,statuscode,contenttype,payload){
    res.statusCode = statuscode
    res.setHeader("Content-Type",contenttype)
    res.end(payload)
}