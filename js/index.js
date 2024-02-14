// Navbar Menu js
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


// Counter Number Js
var counters = [
    { id: "count1", max: 85 },
    { id: "count2", max: 67 },
    { id: "count3", max: 97 },
    { id: "count4", max: 120 },
  ];
  
  function startCounter(counter) {
    var count = 0;
    var intervalId;
  
    function updateCounter() {
      count++;
      if (count <= counter.max) {
        document.getElementById(counter.id).textContent = count;
      } else {
        clearInterval(intervalId);
      }
    }
    intervalId = setInterval(updateCounter, .5000);
  }
  for (var counter of counters) {
    startCounter(counter);
  }
  // window.addEventListener('scroll', function() {
  //   for (var counter of counters) {
  //     var counterElement = document.getElementById(counter.id);
  //     counterElement.textContent = '0';
  //     startCounter(counter);
  //   }
  // });



  // carousel js
  $('.owl-carousel').owlCarousel({
    loop:true,
    autoplayTimeout:1000,
    nav:true,
    margin:10,
    autoplay:true,
    time:1,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        750:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
