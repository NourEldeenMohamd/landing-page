##########################
## Landing Page Project ##
##########################

## Languages Used:-
-> HTML
-> CSS 3
-> ES 6

## Folder Structure:-
* css
  - styles.css    
* index.html
* js
  - app.js
* README.md 

## Features:- 
-> responsive (usable across modern desktop, tablet, and phone browsers)
-> navigation dynamically 
-> smoothly (navigate between sections smoothly)
-> active class (adding 'active' class when navigate between sections and links)

## Additions:-
-> HTML
    - Adding two sections (section 4 & section 5)
-> CSS
    - Modify '.navbar__menu ul' class [text-align - width - margin]
    - Adding 'active' class for anchor links
    - Changing background color for 'your-active-class' class
-> JS
    - Create navigation dynamically (unordered list) 

## Explanation:- 
    - Sections loop with 'forEach' to make links to the names of sections
    - Use 'addEventListener()' method to add event by click to navigate between sections  
    - Use 'preventDefault()' method to prevent the primary function of the anchor link from working
    - Use 'scrollIntoView()' method to navigate between sections smoothly
    - Appending 'ul' with 'fragment' to add 'li' elements all at once
    - Use 'addEventListener()' method to add event by scroll to navigate between sections  
    - Use 'getBoundingClientRect()' to get dimensions of the sections
    - Check if the section in viewport or no, to add or remove '.your-active-class' class to sections
    - Check if 'dataNavSections' equal link 'textNode' or no, to add or remove '.active' class to links
    - Scroll to section on link click to add or remove '.active' class to links
