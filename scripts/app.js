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
mainTiming = 0.75;
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
    {y: logoBoxH, logoBoxH, ease: Power4.easeInOut},
).to(
    "#fall h1",
    fallTiming,
    {color: green, opacity: 0, ease: Power4.easeInOut},
    `-=${mainTiming}`
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
);




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