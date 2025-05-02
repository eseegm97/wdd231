// import { getParkData, parkInfoLinks } from "./parkService.mjs";
// import setHeaderFooter from "./setHeaderFooter.mjs";
// import { mediaCardTemplate } from "./templates.mjs";
// const parkData = getParkData();

// function setParkIntro(data) {
//     const introE1 = document.querySelector(".info");
//     introE1.innerHTML = `<h1>${data.fullName}</h1>
//     <p>${data.description}</p>`;
// }

// function setParkInfoLinks(data) {
//     const infoE1 = document.querySelector(".info");
//     const html = data.map(mediaCardTemplate);
//     infoE1.insertAdjacentHTML("afterbegin", html.join(""));
// }

// function parkInfoTemplate(info) {
//     return `<a href="/" class="hero-banner__title">${info.name}</a>
//     <p class="hero-banner__subtitle">
//         <span>${info.designation}</span>
//         <span>${info.states}</span>
//     </p>`;
// }

// function setHeaderInfo(parkData) {
//     const disclaimer = document.querySelector(".disclaimer > a");
//     disclaimer.href = parkData.url;
//     disclaimer.innerHTML = parkData.fullName;

//     document.querySelector("head > title").textContent = parkData.fullName;
//     document.querySelector(".hero-banner > img").src = parkData.images[0].url;
//     document.querySelector(".hero-banner__content").innerHTML = 
//         parkInfoTemplate(parkData);
// }

// setHeaderFooter(parkData);
// setParkIntro(parkData);
// setParkInfoLinks(parkInfoLinks);

import { getParkData, parkInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";
const parkData = getParkData();

function setParkIntro(data) {
  const introEl = document.querySelector(".intro");
  introEl.innerHTML = `<h1>${parkData.fullName}</h1>
  <p>${parkData.description}</p>`;
}

function setParkInfoLinks(data) {
  const infoEl = document.querySelector(".info");
  // we have multiple links to build...so we map to transform the array of objects into an array of HTML strings.
  const html = data.map(mediaCardTemplate);
  // join the array of strings into one string and insert it into the section
  infoEl.insertAdjacentHTML("afterbegin", html.join(""));
}

setHeaderFooter(parkData);
setParkIntro(parkData);
setParkInfoLinks(parkInfoLinks);
