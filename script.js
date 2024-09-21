function locomotiveScrollTrigger(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}


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
TL.from('nav',{
    opacity:0,
});
TL.from('.hero h1,.hero h2',{
    y:120,
    stagger:0.2,
});
}

function cursorAnimation(){

    document.addEventListener("mousemove", function(dets){
        // console.log(dets.x,dets.y);
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

//function executions 
loadingPageAnimation();

cursorAnimation();

locomotiveScrollTrigger();