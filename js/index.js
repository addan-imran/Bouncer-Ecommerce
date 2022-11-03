
// Dropdown
let show = document.getElementById('dropdownTrigger');
let dropdown = document.getElementsByClassName("dropdown")[0];

show.addEventListener('click',()=>{
    console.log("first")
    if(dropdown.style.display = "none"){
        dropdown.style.display = "grid";

    }else{
        dropdown.style.display = "none";
        console.log("third")
    }
});
dropdown.addEventListener('click',()=>{
    console.log("first")
    if(dropdown.style.display = "grid"){
        dropdown.style.display = "none";
    }else{
        dropdown.style.display = "grid";
        console.log("third")
    }
});



// banner carousal
var currentIndex = 1;
displaySlides(currentIndex);

function setSlides(num) {
    displaySlides(currentIndex += num);
}

function displaySlides(num) {
    var x;
    var slides = document.getElementsByClassName("imageSlides");
    if (num > slides.length) { currentIndex = 1 }
    if (num < 1) { currentIndex = slides.length }
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    slides[currentIndex - 1].style.display = "flex";
}


// grid
// let btn = document.getElementsByClassName('eventClic')
// let All = document.getElementById('all');
// let Mac = document.getElementById('mac');
// let Iphone = document.getElementById('iphon');
// let Ipad = document.getElementById('ipad');
// let Ipod = document.getElementById('ipod');
// let Accessories = document.getElementById('acc');
// btnLenght = btn.length
// if(btnlenght==0 ){

// }
