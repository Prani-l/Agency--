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
    display: 'none',
})
}

function cursorAnimation(){

    document.addEventListener("mousemove", function(dets){
        console.log(dets.x,dets.y);
        gsap.to("#crsr",{
            top: dets.y-10,
            left: dets.x-15,
            // // duration: 0.5,
            // delay: 0.1,
            // scale: 1,
            // ease: "power2.in",
        });
    });
    // shery JS here for magnet effect
    Shery.makeMagnet("#nav-part2 li", {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        // duration: 1,
      });
    }

loadingPageAnimation();

cursorAnimation();