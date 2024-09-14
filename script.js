

const loaderTimer= document.querySelector('#counting h4');
let grow=1;

setInterval(function() {
    if(grow<100){
        loaderTimer.innerHTML = grow++;
        // console.log(grow);
    }else{ loaderTimer.innerHTML = 100;}
}, 35)


let TL = gsap.timeline();
TL.from("#counting" , {
    x: -100,
    stagger: 0.2,
    duration: 0.1,
    ease: "expo.inOut",
    autoAlpha: 0, 
})
TL.from(".statement h1", {
    y: 160,
    stagger: 0.2,
    duration: 0.7,
    ease: "expo.inOut",
    autoAlpha: 0,
    // delay: 0.8,
})
// TL.from("#counting" , {
//     x: -100,
//     stagger: 0.2,
//     duration: 0.1,
//     ease: "expo.inOut",
//     autoAlpha: 0, 
// })
TL.to("#loader",{
    opacity:0,
    duration:0.6,
    delay:3
})