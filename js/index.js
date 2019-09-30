const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

/***** NAV LINKS *****/
// create new elements for task 3
siteContent["nav"][`nav-item-7`] = "Turtles";
siteContent["nav"][`nav-item-0`] = "Ninja";
console.log(siteContent.nav);
let anchor = document.createElement("a");
let anchor2 = document.createElement("a");
let nav = document.querySelector("nav");
nav.appendChild(anchor);
nav.prepend(anchor2);


let links = document.querySelectorAll("a"); //selector
console.log(links);
// let counter = 1; //counter to index objects from initial tasks
let counter = 0; // new counter for prepend
//loops through links and sets attribute to nav-item
Array.from(links).forEach(i => {
  console.log(i.tagName);
  i.textContent = siteContent["nav"][`nav-item-${counter}`];
  i.style.color = "green"; // for task 3
  counter++;
})
counter = 0; //reset counter for next loop


/***** CTA LOGO *****/
let ctalogo = document.getElementById("cta-img");
ctalogo.setAttribute('src', siteContent["cta"]["img-src"]);

/***** CTA H1 *****/
let ctah1 = document.querySelector("h1");
ctah1.textContent = siteContent.cta.h1;
ctah1.style.fontSize = "100px";
ctah1.style.color = "red";

/***** CTA BUTTON *****/
let ctabutton = document.querySelector("button");
ctabutton.textContent = siteContent.cta.button;


/***** MAIN H4 *****/
let mainh4 = document.querySelectorAll("h4");

// get list of values from h4 keys
const h4List = [];
for(key in siteContent["main-content"]) {
  if(key.includes('h4')){
    h4List.push(siteContent["main-content"][key]);
  }
}

// apply values from h4 keys to list of features references
Array.from(mainh4).forEach(i => {  
  mainh4[counter].textContent = h4List[counter];
  counter++;  
})
counter = 0;

/***** MAIN P *****/
let mainP = document.querySelectorAll("p");

const pList = [];
for(key in siteContent["main-content"]) {
  if(key.includes('content')){
    pList.push(siteContent["main-content"][key]);
  }
}

Array.from(mainP).forEach(i => {  
  mainP[counter].textContent = pList[counter];
  counter++;  
})
counter = 0;

/***** MIDDLE IMG *****/
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

/***** CONTACT H4 ******/
let contacth4 = document.querySelectorAll("h4");
contacth4 = contacth4[contacth4.length - 1];
contacth4.textContent = siteContent["contact"]["contact-h4"];

/***** CONTACT P *****/
let container = document.querySelector(".contact");
let contactP = container.querySelectorAll("p");

const contactPList = [];
for(key in siteContent["contact"]) {
  if(key.includes('h4') === false){
    contactPList.push(siteContent["contact"][key]);
  }  
}

Array.from(contactP).forEach(i => {  
  contactP[counter].textContent = contactPList[counter];
  counter++;  
})
counter = 0;

/***** FOOTER P *****/
container = document.querySelector("footer");
let footerP = container.querySelector("p");
footerP.textContent = siteContent["footer"]["copyright"];



