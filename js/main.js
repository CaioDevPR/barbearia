let ul = document.querySelector('nav .ul');

function openMenu(){
    ul.classList.add('open');
}

function closeMenu(){
    ul.classList.remove('open');
}


/* SLIDER AUTO */

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
nextImage();
}, 2000)

function nextImage(){
    count++;
    if(count>3){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true; 
}




const debounce = function(func, wait, immediate) {
    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow)  func.apply(context, args);
    };
};


const target = document.querySelectorAll('[data-anime]');   
const animationClass = 'animate';

function animeScroll() { 
const windowTop = window.pageYOffset + (window.innerHeight * 0.75);
target.forEach(function(element){
    if((windowTop) > element.offsetTop){
        element.classList.add(animationClass);
    } else {
        element.classList.remove(animationClass);
    }
})
}

animeScroll();

if(target.length) {
    window.addEventListener('scroll' , debounce(function() {
        animeScroll();
    }, 200));
}



