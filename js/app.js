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
 * Define Global letiables
 * 
 */



let pageSections = document.querySelectorAll('section');
let ulParent = document.getElementById("navbar__list");
let titlesection = document.querySelectorAll('section h2');















/**
 * End Global letiables
 * Start Helper Functions
 * 
 */




function isVisible(element) {

    let top_elem = element.getBoundingClientRect().top;
    let bot_elem = element.getBoundingClientRect().bottom;
    console.log(top_elem);
    console.log(bot_elem);

    if ((top_elem && bot_elem) > 0 && (top_elem && bot_elem) < 500) {
        return true;
    } else {
        return false;
    }

}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */


// build the nav


function createList(li, ind) {
    let dataAtr = li.getAttribute("data-nav");
    let listIt = document.createElement("li");
    listIt.setAttribute("class", "lists");

    listIt.innerHTML = `<a href="#section${ind+1}" class="link">${dataAtr}</a>`;
    return listIt;
}








// Add class 'active' to section when near top of viewport
function toggleClass() {
    titlesection.forEach((item) => {

        if (isVisible(item) == true) {
            item.classList.add('your-active-class');
            console.log(item);

        } else {
            item.classList.remove('your-active-class');
            console.log(item);

        }
    })
}


// Scroll to anchor ID using scrollTO event
document.querySelector('.navbar__menu').addEventListener('click', function(e) {
    if (e.target && e.target.className == 'link') {
        e.preventDefault();
        let destination = e.target.getAttribute('href');
        let destination_position = document.querySelector(destination).offsetTop;

        window.scrollTo({ top: destination_position, left: 0, behavior: 'smooth' });

    }
    console.log(e);

});

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 
pageSections.forEach((el, ind, els) => {
    ulParent.appendChild(createList(el, ind));
});

// Scroll to section on link click
window.addEventListener('scroll', toggleClass);


// SUGGESTED
//Add an active state to your navigation items when a section is in the viewport.

//Hide fixed navigation bar while not scrolling (it should still be present on page load).

let timer = null;
window.addEventListener('scroll', function() {
    window.addEventListener('scroll', hide);

    if (timer !== null) {
        clearTimeout(timer);
    }
    timer = setTimeout(function() {
        show();

    }, 50);
}, false);


function hide() {
    element = document.querySelector('.navbar__menu')
    element.classList.add("hide");
}

function show() {
    element = document.querySelector('.navbar__menu')
    element.classList.remove("hide");
}

//Add a scroll to top button on the page that’s only visible when the user scrolls below the fold of the page.

window.addEventListener('scroll', function() {
    if (window.scrollY > 513) {

        document.getElementById('top').style.display = "block";
    } else {
        document.getElementById('top').style.display = "none";

    }


});



//Update/change the design/content.
//Make sections collapsible.

titlesection.forEach(function(el) {
    el.addEventListener('click', function(e) {
        if (el.nextElementSibling.getAttribute("class") != "hide") {

            el.nextElementSibling.setAttribute("class", "hide");
            el.setAttribute("class", "cont_hide");


        } else {
            el.nextElementSibling.setAttribute("class", "show");
            el.setAttribute("class", "cont_show");


        }
    });
});