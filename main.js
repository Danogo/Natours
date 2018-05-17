// CACHE DOM
const scrollBtnsSmooth = document.querySelectorAll('.js-scrollBtn');
const scrollBtnsInstant = document.querySelectorAll('.js-scrollBtnI');
const sectionTours = document.querySelector('.js-sectionTours');

// SCROLLING LOGIC
function scrollIt(element) {
    //correct target's offset depends on what section it is
    let exactPosition;
    if (element.id === 'section-tours') {
        exactPosition = 250;
    } else if (element.id === 'section-features') {
        exactPosition = -90;
    } else {
        exactPosition = 0;
    }
    //scroll to target
    window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': element.offsetTop + exactPosition
    });
}

//instant scrolling for navigation
function scrollItInstant(element) {
    //correct target's offset depends on what section it is
    let exactPosition;
    if (element.id === 'section-tours') {
        exactPosition = 250;
    } else if (element.id === 'section-features') {
        exactPosition = -90;
    } else if (element.id === 'section-book') { 
        exactPosition = -65;
    } else if (element.id === 'section-stories') { 
        exactPosition = 110;
    } else {
        exactPosition = 0;
    }
    //scroll instant to target
    window.scrollTo({
        'behavior': 'instant',
        'left': 0,
        'top': element.offsetTop + exactPosition
    });
}

//EVENT LISTENERS
scrollBtnsSmooth.forEach(btn => {
    btn.addEventListener('click', evt => {
        //prevent deafult behavior of link
        evt.preventDefault();
        //cache target DOM node depending on his href
        //every btn has href equal to adequate section's id
        let scrollTarget = document.querySelector(evt.currentTarget.getAttribute('href'));
        //scrolling
        scrollIt(scrollTarget);
    });
});

scrollBtnsInstant.forEach(btn => {
    btn.addEventListener('click', evt => {
        evt.preventDefault();
        let scrollTarget = document.querySelector(evt.currentTarget.getAttribute('href'));
        scrollItInstant(scrollTarget);
    });
});