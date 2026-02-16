import {backGroundImage} from "./assets/assets.js"

import { readBGI } from "./assets/assets.js"


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
            <h2>Hey Otaku heads</h2>
            <h1>What is your fav anime?</h1>
            <h1>Wanna know about some different anime experience that other gave...</h1>
            </div>
            </section>`
    
}

//document.getElementById("container").innerHTML = getbgi(backGroundImage[0])

 
// Function to fetch and render reviews
async function renderReviews(jsonPath, containerId, readBgi) {
  try {
    const response = await fetch(jsonPath);
    const reviews = await response.json();

    const readBackground = readBgi.image;

    const cardsContainer = document.getElementById(containerId);
    if (!cardsContainer) return;

    // ✅ Set the image (overwrite existing)
    const imageDiv = document.querySelector(".read-image");
    imageDiv.innerHTML = `<img src="./images/${readBackground}" alt="Anime background">`;

    // ✅ Clear old cards
    const reviewCardContainer = cardsContainer.querySelector(".review-card");
    reviewCardContainer.innerHTML = "";

    // ✅ Inject reviews
    reviews.forEach((review) => {

      const card = document.createElement("div");
      card.className = "review-card";

      const previewLength = 100;
      const shortText = review.thoughts.length > previewLength 
        ? review.thoughts.substring(0, previewLength) + "..." 
        : review.thoughts;

      card.innerHTML = `
        <h3><strong>Title:</strong>${review.title}</h3>
        <p><strong>Email:</strong> ${review.email}</p>
        <p><strong>Last Seen:</strong> ${review.dob}</p>
        <p><strong>Thoughts:</strong> 
          <span class="short-text">${shortText}</span>
          <span class="full-text">${review.thoughts}</span>
          <button class="read-more-btn">Read More</button>
        </p>
      `;

      const readMoreBtn = card.querySelector(".read-more-btn");

      readMoreBtn.addEventListener("click", function () {

      card.classList.toggle("expanded");

      if (card.classList.contains("expanded")) {
        readMoreBtn.textContent = "Read Less";
    } else {
        readMoreBtn.textContent = "Read More";
    }

});


      reviewCardContainer.appendChild(card);
    });

  } catch (error) {
    console.error("Error loading reviews:", error);
  }
}


const homeContainer = document.getElementById("container")

const cardCon = document.getElementById("card-container")

if(homeContainer){
    homeContainer.innerHTML = getbgi(backGroundImage)
}

if (cardCon) {
    renderReviews("/api", "card-container",readBGI[0]);
}

