document.querySelector(".r-btn").addEventListener('click', event =>{
    document.querySelector(".product-slide").scrollLeft +=600;
    event.preventDefault();

})

document.querySelector(".l-btn").addEventListener('click', event =>{
    document.querySelector(".product-slide").scrollLeft -= 600;
    event.preventDefault();

})

document.querySelector(".btn-1a").addEventListener('click', event =>{
    document.querySelector(".product-slide-1").scrollLeft +=900;
    event.preventDefault();

})

document.querySelector(".btn-1b").addEventListener('click', event =>{
    document.querySelector(".product-slide-1").scrollLeft -=900;
    event.preventDefault();

})

document.querySelector(".btn-2a").addEventListener('click', event =>{
    document.querySelector(".product-slide-2").scrollLeft +=900;
    event.preventDefault();

})

document.querySelector(".btn-2b").addEventListener('click', event =>{
    document.querySelector(".product-slide-2").scrollLeft -=900;
    event.preventDefault();

})

document.querySelector(".btn-3a").addEventListener('click', event =>{
    document.querySelector(".product-slide-3").scrollLeft +=500;
    event.preventDefault();

})

document.querySelector(".btn-3b").addEventListener('click', event =>{
    document.querySelector(".product-slide-3").scrollLeft -=500;
    event.preventDefault();

})


const backtop = document.querySelector(".backtop");

backtop.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
})

const sideBar = document.querySelector(".sidebar");
const cross = document.querySelector(".fa-xmark");
const black = document.querySelector(".black");
const sidBtn = document.querySelector(".second-1");

sidBtn.addEventListener('click',() =>{
    sideBar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
    document.body.classList.add("stop-scroll");
})

cross.addEventListener('click',() =>{
    sideBar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active");
    document.body.classList.remove("stop-scroll");
})

const sign = document.querySelector(".sign");
const tri = document.querySelector(".trianfle");
const signin = document.querySelector(".hdn-sign");

sign.addEventListener('click', ()=>{
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    tri.classList.toggle("active");
})

black.addEventListener('click',()=>{
    black.classList.remove("active-1");
    signin.classList.remove("active");
})

sign.addEventListener('mouseover', (event) => {
    black.classList.add("active-1");
    signin.classList.add("active");
    tri.classList.add("active");
});
