const imageContainerEl = document.querySelector(".image-container")

const prevEl = document.getElementById("prev")
const nextEl = document.getElementById("next")

let x = 0;

prevEl.addEventListener("click", () =>{
    x = x + 45;
    updateGallery();
});

function updateGallery(){
    imageContainerEl.sty
};