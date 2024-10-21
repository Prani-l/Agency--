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
    const videoContainer = document.querySelector("#videoContainer");
    const video = document.querySelector("#videoContainer video");
    const videoCursor = document.querySelector("#videoCursor");
    videoContainer.addEventListener("mouseenter", function(){
        videoContainer.addEventListener("mousemove",function(dets){
            gsap.to("#crsr",{
                opacity:0,
            });
            gsap.to("#videoCursor",{
                top: dets.y-210,
                left: dets.x-480,
            });
        });
        })  
    videoContainer.addEventListener("mouseleave", function(){
        gsap.to("#crsr",{
            opacity:1,
        });
        gsap.to("#videoCursor",{ 
        top:"-12%",
        right: "20%",
        });
    });       
    let flag=0
    videoContainer.addEventListener("click",function (){
        if(flag==0){
            video.play()
            video.style.opacity = 1
            videoCursor.innerHTML = `<svg class="button__pause-icon" width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 24V0H7.36842V24H0Z" fill="#FFFFFF"></path>
                            <path d="M12.6316 24V0H20V24H12.6316Z" fill="#FFFFFF"></path>
                        </svg>`
            gsap.to("#videoCursor",{
                scale:0.5,
            })
            flag=1
        }else{
            video.pause()
            video.style.opacity = 0
            videoCursor.innerHTML = `<svg class="button__play-icon" width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 12L2.43406e-07 24L-7.15256e-07 -8.74228e-07L20 12Z" fill="#FFFFFF"></path>
                      </svg>`
            gsap.to("#videoCursor",{
                scale:1,
            })
            flag=0
        }
    });
}


    function imgAnimation(){
        Shery.imageEffect(".imgdiv", {
            style:5,
            // debug:true,
            //config: {"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272667488697082},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.43,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.4,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
            gooey: true,
        })
    }
imgAnimation();

loadingPageAnimation();

cursorAnimation();

locomotiveScrollTrigger();
