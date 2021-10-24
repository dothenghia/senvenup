const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const $c = document.getElementsByClassName.bind(document);
const $i = document.getElementById.bind(document);

//////////// Sub Navigation List ///////////
const subnavItems = $$(".subnav-item");
const subnavItemActived = $(".subnav-item.subnav-active");
const subnavLine = $(".subnav-line");

subnavLine.style.left = subnavItemActived.offsetLeft + 'px';
subnavLine.style.width = subnavItemActived.offsetWidth + 'px';

subnavItems.forEach((subnavItem)=>{
    subnavItem.onclick = function(){
        $(".subnav-item.subnav-active").classList.remove("subnav-active");
        this.classList.add("subnav-active");
        subnavLine.style.left = subnavItem.offsetLeft + 'px';
        subnavLine.style.width = subnavItem.offsetWidth + 'px';
    }
})


///////////// Slider ///////////////////
var slideIndex = 0;
slideShow();

function slideShow(){
    const slides = $c("image-container");
    for (const slide of slides) {
        slide.style.display = "none";
    }
    slideIndex++;
    if(slideIndex> slides.length){
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(slideShow,3000);
}


