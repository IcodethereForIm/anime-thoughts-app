import {signImg} from "./assets/assets.js"

function getsignImgContent(imageObj){
    //const signImgNm = imageObj.image

    // get last index from localStorage
    let currentIndex = localStorage.getItem("bgiIndex");

    // if first time
    if (currentIndex === null) {
        currentIndex = 0;
    } else {
        currentIndex = parseInt(currentIndex) + 1;
    }

    // if exceeds length → reset
    if (currentIndex >= imageObj.length) {
        currentIndex = 0;
    }

    // save new index
    localStorage.setItem("bgiIndex", currentIndex);

    const signImgNm = imageObj[currentIndex].image;
    
    return `
            <section class = "sign-in">
            <img src = "./images/${signImgNm}" alt= "Upload image">
            <div class = "sign-in-content">
            <label for="title">Title</label>
            <input type="text" id="title" placeholder="title">
            <label for="Email-Id">Email-Id</label>
            <input type="text" id="Email-Id" placeholder="Email-Id">
            <label for="dob">Last Watched</label>
            <input type="date" id="dob" name="dob">
            <label for="thoughts">Your Thoughts</label>
            <textarea
                id="thoughts"
                name="thoughts"
                placeholder="Write your Thoughts here..."></textarea>
                <button type="submit" id = "submitBtn">Submit</button>
            </div>
            </section>
            `
}

const signInCon = document.getElementById("Upload-in-container")

signInCon.innerHTML = getsignImgContent(signImg)

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", async function () {

    const data = {
        title: document.getElementById("title").value,
        email: document.getElementById("Email-Id").value,
        dob: document.getElementById("dob").value,
        thoughts: document.getElementById("thoughts").value
    };

    try {
        const response = await fetch("/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log(result);

        alert("Submitted Successfully 🚀");

    } catch (error) {
        console.error("Error:", error);
    }
});

