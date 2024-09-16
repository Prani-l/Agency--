function loadingPageAnimation(){
const loaderTimer= document.querySelector('#counting h4');

let TL = gsap.timeline();
TL.from(".statement h2", {
    y: 160,
    opacity:0,
    stagger: 0.2,
    duration: 0.8,
    ease: "expo.inOut",
    autoAlpha: 0,
    // delay: 0.8,
})
TL.from("#counting,.statement h3" , {
    // x: -38,
    stagger: 0.2,
    opacity:0,
    duration: 0.4,
    ease: "expo.inOut",
    autoAlpha: 0, 
    onStart : function(){
        let grow=1;     
        setInterval(function() {
            if(grow<100){
                loaderTimer.innerHTML = grow++;
                // console.log(grow);
            }
            else{ loaderTimer.innerHTML = 100;
            }
        }, 25)
    }, 
})

TL.to("#loader",{
    opacity:0,
    duration:0.4,
    delay:2
})
TL.from('#page1',{
    y:1200,
    opacity:0.5,
    delay:0.3,
    ease: "expo.inOut",
})
TL.to('#loader',{
    display: none,
})
}

loadingPageAnimation();

document.addEventListener("mousemove", function(){
    console.log("helllo");
});