import {backGroundImage} from "./assets/assets.js"



function getbgi(images){

    // get last index from localStorage
    let currentIndex = localStorage.getItem("bgiIndex");

    // if first time
    if (currentIndex === null) {
        currentIndex = 0;
    } else {
        currentIndex = parseInt(currentIndex) + 1;
    }

    // if exceeds length → reset
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    // save new index
    localStorage.setItem("bgiIndex", currentIndex);

    const bgi = images[currentIndex].image;

    return `<section class="wlecome-page">
            <img src = "./images/${bgi}"alt="Background image">

            <div class="content">
            <textarea id="dataInput" placeholder="Data will appear here"></textarea>
        </div>`

}

document.getElementById("container").innerHTML = getbgi(backGroundImage)


const eventSource = new EventSource("/api/facts")
const liveContainer = document.getElementById("dataInput")

eventSource.onmessage = (event)=>{
    const data = JSON.parse(event.data)
    const facts = data.facts
    liveContainer.textContent = facts
}

eventSource.onerror = ()=>{
    console.log("Connection lost: Connecting to reconnect.....")
}
