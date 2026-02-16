Description

A full-stack Anime Thoughts web application built with Node.js and vanilla JavaScript.
Users can share their thoughts about anime, explore what others have posted, and enjoy a live “Exciting Facts” section about different anime.

Features

Post your own thoughts about any anime (with title, email, last watched date, and thoughts).

Read thoughts from other users in a dynamic review section.

Live Exciting Facts about anime using Server-Sent Events (SSE).

Background images rotate dynamically for better user experience.

Data is stored in JSON files (data.json) and sanitized for safety.

ProjectFolders/
│
├─ Data/
│   ├─ data.json
│   └─ excitingFacts.js
│
├─ events/
│   └─ sightingEvents.js
│
├─ handelers/
│   └─ routehandlers.js
│
├─ public/
│   ├─ index.html, facts.html, read.html, upload.html
│   ├─ index.js, sighting.js, facts.js
│   ├─ style.css
│   └─ assets/
│       └─ assets.js + images
│
├─ utils/
│   ├─ addNewSightings.js, createAlerts.js, getData.js
│   ├─ giveRes.js, parseJSONbody.js, sanitizehtml.js
│   └─ staticServer.js
│
├─ server.js
├─ package.json
└─ package-lock.json

How to Run Locally

git clone https://github.com/IcodethereForIm/anime-thoughts-app.git
cd anime-thoughts-app
npm install
node server.js
http://localhost:9000


Technologies Used

Node.js – Backend server & routing

Vanilla JavaScript – Frontend interactivity

Server-Sent Events (SSE) – Real-time facts section

HTML/CSS – Frontend structure & styling

Notes

Make sure node_modules is installed before running the server.

Data is stored locally in Data/data.json.

Images are located in public/assets/images/.
