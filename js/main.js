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