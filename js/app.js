/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
let sections = document.querySelectorAll("section");  // get all sections
const ul = document.getElementById("navbar__list"); // get navbar list
const fragment = document.createDocumentFragment(); // create fragment
// sections loop with 'forEach'
sections.forEach((section) => {
  const data_nav = section.getAttribute("data-nav");  // get 'data-nav' attribute from section
  const li = document.createElement("li");  // create new 'li'
  ul.appendChild(li); // 'li' appending with 'ul'
  const link = document.createElement("a"); // create new anchor link 'a'
  link.setAttribute("href", "#"); // setAttribute 'href' to anchor link 'a'
  link.setAttribute("class", "menu__link"); // setAttribute 'class' to anchor link 'a'
  li.appendChild(link); // anchor link 'a' appending with 'li'
  const link_text = document.createTextNode(data_nav);  // create new 'text node'
  link.appendChild(link_text); // 'text node' appending with anchor link 'a'


  link.addEventListener("click", (e) => {
    e.preventDefault(); // to prevent the primary function of the anchor link from working
    // to navigate between sections smoothly
    section.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  });

});
ul.appendChild(fragment); // 'ul' appending with 'fragment'



// Add class 'active' to section when near top of viewport
// add event 'scroll'
window.addEventListener('scroll', () => {
  sections.forEach((section) => { // sections loop with 'forEach'
    const rect = section.getBoundingClientRect(); //get dimensions of the sections
    // check if the section in viewport or no
    if (rect.top >= 0 && rect.bottom < window.innerHeight + 100) {
      let sections = document.querySelectorAll("section");  // get all sections
      sections.forEach((section) => { // sections loop with 'forEach'
        section.classList.remove("your-active-class");  // remove 'your-active-class' from section
      });
      section.classList.add("your-active-class"); //add 'your-active-class' to section


      // Scroll to anchor ID using scrollTO event
      const dataNavSections = section.getAttribute("data-nav"); // get 'data-nav' attribute from section
      const links = document.querySelectorAll(".menu__link"); // grt all anchor link 'a'
      links.forEach((link) => { // links loop with 'forEach'
      // check if 'dataNavSections' equal link 'textNode'
      if (dataNavSections == link.innerHTML) {
          links.forEach((link) => {  // links loop with 'forEach'
            link.classList.remove("active");  // remove 'active' from link
          });
          link.classList.add("active"); //add 'active' to link
        };
      });
    };
  });
  

});


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
const menu__links = document.querySelectorAll(".menu__link"); // grt all anchor link 'a'
menu__links.forEach((menu__link) => { // links loop with 'forEach'
  // add event 'click' 
  menu__link.addEventListener('click', () => {
    const active__links = document.querySelectorAll(".active");  // grt all 'active' class
    active__links.forEach((active__link) => { // links loop with 'forEach'
      active__link.classList.remove("active");  // remove 'active' from link
    });
    menu__link.classList.add("active");  //add 'active' to link
  });

});


// Set sections as active


