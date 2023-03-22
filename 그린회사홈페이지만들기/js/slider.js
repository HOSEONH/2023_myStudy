const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");

const sliderItems = document.querySelectorAll(".slider-item");

const maxSlide = sliderItems.length;
let currSlide = 1;

nextButton.addEventListener("click", function(){
    if(currSlide<maxSlide) {
        currSlide++;
        for (let i=0; i<maxSlide; i++) {
            sliderItems[i].style.left=`${100+(-100)*currSlide}%`
        }
    }
}) //어떤 순서대로 움직이는건지..?

prevButton.addEventListener("click", function(){
    if(currSlide>1) {
        currSlide--;
        for (let i=0; i<maxSlide; i++) {
            sliderItems[i].style.left=`${100+(-100)*currSlide}%`
        }
    }
})