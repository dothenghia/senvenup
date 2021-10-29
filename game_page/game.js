const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const $c = document.getElementsByClassName.bind(document);
const $i = document.getElementById.bind(document);

//////////// Sub Navigation List ///////////
const subnavItems = $$(".subnav-item");
const subnavItemActived = $(".nav-button-sub .subnav-item.subnav-active");
const subnavLine = $(".subnav-line");

subnavLine.style.left = "0px";
subnavLine.style.width = "68px";
console.log(subnavItemActived)
subnavItems.forEach((subnavItem)=>{
    subnavItem.onclick = function(){
        $(".subnav-item.subnav-active").classList.remove("subnav-active");
        this.classList.add("subnav-active");
        subnavLine.style.left = subnavItem.offsetLeft + 'px';
        subnavLine.style.width = subnavItem.offsetWidth + 'px';
    }
})
