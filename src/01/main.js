import './style.css'
import gsap from "gsap";

// ref. https://greensock.com/docs/v3/GSAP/gsap.quickSetter()

//const boxSet = gsap.quickSetter("#box", "x");
//console.log(boxSet);

const ball = document.querySelector(".ball");
const pos = {
  x: 0,
  y: 0
};
const mouse = {
  x: pos.x,
  y: pos.y
};
const speed = 0.35;

// 初期値
gsap.set(ball, {xPercent: -100, yPercent: -100});

const xSet = gsap.quickSetter(ball, "x", "px");
console.log(xSet)
const ySet = gsap.quickSetter(ball, "y", "px");

window.addEventListener("mousemove", e => {    
  mouse.x = e.x;
  mouse.y = e.y;

  // pos.x += (mouse.x - pos.x) * 0.15;
  // pos.y += (mouse.y - pos.y) * 0.15;

  // xSet(pos.x);
  // ySet(pos.y);  
  //console.log("mouse")
});


gsap.ticker.add(() => {
  // イージング公式
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;

  xSet(pos.x);
  ySet(pos.y);
});
