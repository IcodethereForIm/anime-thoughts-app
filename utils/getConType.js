export function getContententType(ext){
    const content = {
        ".js" : "text/javascript",
        ".css" : "text/css",
        ".json" : "application/json",
        ".png" : "img/png",
        ".jpg" : "image/jpeg",
        ".jpeg" : "image/jpeg",
        ".gif" : "image/gif",
        ".svg" : "image/svg+xml"
    }
    return content[ext.toLowerCase()] || "text/html"
}