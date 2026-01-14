// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// GSAP animations
window.addEventListener("load",()=>{
  gsap.from(".hero h1",{y:-60,opacity:0,duration:1});
  gsap.from(".hero p",{y:-40,opacity:0,duration:1,delay:0.3});
  gsap.from(".hero-btn",{scale:0,opacity:0,duration:0.6,delay:0.6});
  document.querySelectorAll(".card").forEach((card,i)=>{
    gsap.from(card,{y:50,opacity:0,duration:0.6,delay:i*0.3});
  });
  document.querySelectorAll(".slide").forEach((slide,i)=>{
    gsap.from(slide,{y:50,opacity:0,duration:0.6,delay:i*0.2});
  });
});

// Reveal on scroll
const reveals=document.querySelectorAll("section");
window.addEventListener("scroll",()=>{
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top<window.innerHeight-100){el.classList.add("active");}
  });
});