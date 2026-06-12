// Custom Cursor

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

});


// Scroll Animation

const cards = document.querySelectorAll(
  ".skill-card, .project-card, .about-box"
);

window.addEventListener("scroll",()=>{

  cards.forEach(card=>{

    let top = card.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }

  });

});


// Initial State

cards.forEach(card=>{

  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "0.6s";

});
