gsap.to("#nav",{
   backgroundColor:"black",
   height:"90px",
   duration:0.5,
   scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    // markers:true,
    start:"top -10%",
    end:"top -11%",
    scrub:2
   }
})
gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroll:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2,
        // markers:true
    }
}
)
document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.container');
    
    containers.forEach(container => {
        const decreaseBtn = container.querySelector('.decreaseBtn');
        const increaseBtn = container.querySelector('.increaseBtn');
        const quantity = container.querySelector('.quantity');
        
        let count = 0;

        decreaseBtn.addEventListener('click', () => {
            if (count > 0) {
                count--;
                quantity.textContent = count;
            }
        });

        increaseBtn.addEventListener('click', () => {
            count++;
            quantity.textContent = count;
        });
    });
});

// let btn= document.querySelector("#nav2")
//     btn.addEventListener("click", () => {
//       gsap.to(window, {duration: 1, scrollTo:{y:"#about-us" , offsetY:150}});
//     });
//     let btn2= document.querySelector("#nav3")
//     btn2.addEventListener("click", () => {
//       gsap.to(window, {duration: 1, scrollTo:{y:"#cards-container" , offsetY:250}});
//     });
//     let btn5= document.querySelector("#nav5")
//     btn5.addEventListener("click", () => {
//       gsap.to(window, {duration: 1, scrollTo:{y:"#page3" , offsetY:60}});
//     });
//     let btn3= document.querySelector("#nav1")
//     btn3.addEventListener("click", () => {
//       gsap.to(window, {duration: 1, scrollTo:{y:"#page4" , offsetY:60}});
//     });
//     let btn7= document.querySelector("#arrow")
//     btn7.addEventListener("click", () => {
//       gsap.to(window, {duration: 1, scrollTo:{y:"#green-div" , offsetY:60}});
//     });


// var crsr= document.querySelector("#cursor")
// document.addEventListener("mousemove",function(dets){
//     crsr.style.left =dets.x+"px"
//     crsr.style.top=dets.y+"px"
// })
// let text = document.querySelector ("#nav");

// let animation = gsap.to(crsr, {
// height: 50,
// width:50,
// duration:0.3,
// backgroundColor:"transparent",
// borderColor:"black",
// borderWidth:1
// });
// text.addEventListener("mouseenter",function(){
//     crsr.style.border="4px solid #fff"
// })
// text.addEventListener("mouseenter", () => animation.play());
// text.addEventListener("mouseleave", () => animation.reverse());

// var crsr2= document.querySelector("#cursor-blur")
// document.addEventListener("mousemove",function(dets){
//     crsr2.style.left =dets.x-250+"px"
//     crsr2.style.top=dets.y-250+"px"
// })
// // $("#dev").click(function() {
// //     kill();
// //     mySplitText.split({type:"chars, words, lines"}) 
// //     splitTextTimeline.from(mySplitText.chars, {duration: 0.2, autoAlpha:0, scale:4, force3D:true, stagger: 0.01}, 0.5)
// //       .to(mySplitText.words, {duration: 0.1, color:"#8FE402", scale:0.9, stagger: 0.1}, "words")
// //       .to(mySplitText.words, {duration: 0.2, color:"white", scale:1, stagger: 0.1}, "words+=0.1")
// //       .to(mySplitText.lines, {duration: 0.5, x:100, autoAlpha:0, stagger: 0.2}) 
// //   })
  gsap.from("#page2",{
    y:50,
    opacity:0,
    duration:4,
    stagger:1,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:3
    }
  })
  gsap.from("#page3",{
    y:50,
    opacity:0,
    duration:4,
    stagger:1,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:3
    }
  })
  gsap.from("#page4",{
    y:50,
    opacity:0,
    duration:4,
    stagger:1,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:3
    }
  })
  gsap.from("#page5",{
    y:50,
    opacity:0,
    duration:4,
    stagger:1,
    scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:3
    }
  })
  gsap.from("#page6",{
    y:50,
    opacity:0,
    duration:4,
    stagger:1,
    scrollTrigger:{
        trigger:"#page6",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:3
    }
  })
//   gsap.from(".card",{
//    scale:0.8,
//     opacity:0,
//     duration:0.4,
//     stagger:0.1,
//     scrollTrigger:{
//         trigger:".card",
//         scroller:"body",
//         // markers:true,
//         start:"top 70%",
//         end:"top 65%",
//         scrub:1
//     }
//   })
//   gsap.from("#col1",{
//     y:-70,
//     x:-70,
//     scrollTrigger:{
//         trigger:"#col1",
//         scroller:"body",
//         // markers:true,
//         start:"top 50%",
//         end:"top 45%",
//         scrub:1
//     }
//   })
//   gsap.from("#col2",{
//     y:70,
//     x:70,
//     scrollTrigger:{
//         trigger:"#col1",
//         scroller:"body",
//         // markers:true,
//         start:"top 50%",
//         end:"top 45%",
//         scrub:1
//     }
//   })
//   gsap.from("#page4 h1",{
//     y:50,
//     scrollTrigger:{
//         trigger:"#page4 h1",
//         scroller:"body",
//         // markers:true,
//         start:"top 75%",
//         end:"top 70%",
//         scrub:3
//     }
//   })