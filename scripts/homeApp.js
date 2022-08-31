// playground
console.log("hi");
console.log($("#ela").children());


// main colors
pink = "#F7D6E0";
green = "#DEEFB7";
gray = "#465362";
red = "#ED254E";
navy = "#011936";
blue = "#30bdc6";

width = $(window).width();
height = $(window).height();
logoBoxH = height * .35;
logoFontSize = logoBoxH * .4;

// const landing = document.querySelector("#landing");


const t1 = new TimelineMax();

// object, duration, object w/ starting position
// t1.fromTo(
//     landing,
//     1,
//     {xPercent: 1, yPercent: 50},
//     {xPercent: -400, ease: Power4.easeInOut}
// );
mainTiming = 0.65;
fallTiming = 1.5;

t1.fromTo(
    "#landing",
    mainTiming,
    {x: width},
    {x: 0, ease: Power4.easeInOut}
).to(
    "#ela",
    mainTiming,
    {x: (logoBoxH/2) + (logoFontSize), ease: Power4.easeInOut}
).to(
    "#e",
    mainTiming,
    {x: -(logoBoxH/2 + logoFontSize*.4), ease: Power4.easeInOut},
    `-=${mainTiming}`
).set(
    "#fall",
    {backgroundColor: "none"}
).to(
    "#fall",
    mainTiming,
    {y: 1.2*logoBoxH, logoBoxH, ease: Power4.easeInOut},
).to(
    "#fall h1",
    fallTiming,
    {color: green, opacity: 0, ease: Power4.easeInOut},
    `-=${mainTiming}`
).to(
    ".rects",
    1,
    {height: "50vh", ease: Power4.easeInOut},
    "-=1"
).to(
    ".tbc-landing",
    1,
    {opacity: 1, ease: Power4.easeInOut},
    "-=1"
).to(
    "#artist1",
    0.3,
    {opacity: 1, ease: Power4.easeInOut},
    "-=1.5"
).to(
    "#artist2",
    0.3,
    {opacity: 1, ease: Power4.easeInOut},
    "-=1.45"
).to(
    "#artist3",
    0.3,
    {opacity: 1, ease: Power4.easeInOut},
    "-=1.4"
).to(
    "#artist4",
    0.3,
    {opacity: 1, ease: Power4.easeInOut},
    "-=1.3"
).to(
    "#artist5",
    0.3,
    {opacity: 1, ease: Power4.easeInOut},
    "-=1.2"
).to(
    "#artist6",
    0.3,
    {opacity: 1, ease: Power4.easeInOut},
    "-=1"
).fromTo(
    "#software",
    mainTiming,
    {x: width/4, opacity: 0},
    {x: 0, opacity: 1, ease: Power4.easeInOut},
    "-=1.4"
).fromTo(
    "#engineer",
    mainTiming,
    {x: width/4, opacity: 0},
    {x: 0, opacity: 1, ease: Power4.easeInOut},
    "-=1.2"
);


// // Create an object that gsap can animate
// const val = { distance: 0 };
// // Create a tween
// gsap.to(val, {
//   // Animate from distance 0 to the total distance
//   distance: path.getTotalLength(),
//   // Function call on each frame of the animation
//   onUpdate: () => {
//     // Query a point at the new distance value
//     const point = path.getPointAtLength(val.distance);
//     // Update the circle coordinates
//     circle.setAttribute('cx', point.x);
//     circle.setAttribute('cy', point.y);
//   }
// });

// NOTES: 
// use t1.set() for a zero duration tween!
// gsap.from()
// gsap.to()
// gsap.fromTo()

// TODO:
/*
- Fix small logo button for smaller screen sizes
- change the easings...
*/