
// const cursur = document.querySelector("#cursur");
// const csrblur = document.querySelector("#cursur-blur")



// document.addEventListener("mousemove" , function(dets) {
  //     cursur.style.left = dets.x +"px" 
  //     cursur.style.top = dets.y +"px"
  
  //     csrblur.style.left = dets.x - 150 +"px" 
  //     csrblur.style.top = dets.y  - 150 +"px"
  
  
  // })


  var blur1 = document.querySelector("#cursor-blur");
  var crsr = document.querySelector("#cursor");


  document.addEventListener("mousemove" , function(dets) {
    crsr.style.left = dets.x +"px" 
    crsr.style.top = dets.y +"px"

    blur1.style.left = dets.x - 150 +"px" 
    blur1.style.top = dets.y  - 150 +"px"


})


gsap.to("#nav",{
    backgroundColor:"black",
    height:"105px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav", // tigger kis ko kar rahe ho to nav ko
        scroller:"body", // scroller matlab scroll kay ho raha hai 
        start:"top -10%", // matlab jaise hi hum niceh scroll karenge tab ye chalega 
        end:"top -11%", // jaise hi bapass aaye to bapis se notmal ho jaye nav
        scrub:1.2 // smoot kar ke liye 
    }
})


gsap.to("#main", {
  backgroundColor: "black",
  // duration:3,
  scrollTrigger:{
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub:2,
    // markers:true
  }
});


gsap.from(".about , .about-container ", {
  y: 90,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
  trigger: ".about",
  scroller: "body",
  // markers:true,
  start: "top 70%",
  end: "top 65%",
  scrub: 3,
  },
});

