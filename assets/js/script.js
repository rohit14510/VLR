$(document).ready(function(){
  $(".mobile-menuicon").click(function(){
      $(".mobile-menu").css("left", "0");  // Menu को दिखाने के लिए
  });

  $(".close-menu").click(function(){
      $(".mobile-menu").css("left", "-100%");  // Menu को छुपाने के लिए
  });

  // Menu के बाहर क्लिक करने पर भी बंद करने का ऑप्शन
  $(document).click(function(event) {
      if (!$(event.target).closest('.mobile-menu, .mobile-menuicon').length) {
          $(".mobile-menu").css("left", "-100%");
      }
  });
});
const counters = document.querySelectorAll('.counter');
let started = false;

function animateCounters() {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / 200;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}

function handleScroll() {
  const triggerPoint = window.innerHeight;
  counters.forEach(counter => {
    const counterTop = counter.getBoundingClientRect().top;
    if (counterTop < triggerPoint && !started) {
      animateCounters();
      started = true;
    }
  });
}

window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', function () {
  new Splide('#image-slider', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    arrows: false,
    autoplay: true,
    interval: 2000,
    pauseOnHover: false,
    pauseOnFocus: false,
    breakpoints: {
      768: {
        perPage: 3,
      }
    }
  }).mount();
});
document.addEventListener("DOMContentLoaded", function () {
  const circles = document.querySelectorAll(".progress-circle");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const circle = entry.target;
          const progress = circle.querySelector(".progress");
          const percentageElem = circle.querySelector(".percentage");
          const target = +circle.getAttribute("data-target");
          let count = 0;
          const strokeDasharray = 314;

          // Number counter animation
          const interval = setInterval(() => {
            if (count >= target) {
              clearInterval(interval);
            } else {
              count++;
              percentageElem.textContent = `${count}%`;
            }
          }, 15);

          // Stroke animation
          let offset = strokeDasharray;
          let step = strokeDasharray / 100;

          const strokeAnim = setInterval(() => {
            let currentOffset = parseFloat(progress.getAttribute("stroke-dashoffset"));
            if (currentOffset <= strokeDasharray - (strokeDasharray * target) / 100) {
              clearInterval(strokeAnim);
            } else {
              currentOffset -= step;
              progress.setAttribute("stroke-dashoffset", currentOffset);
            }
          }, 15);

          observer.unobserve(circle); // Animate once
        }
      });
    },
    {
      threshold: 0.6, // 60% visible to trigger
    }
  );

  circles.forEach(circle => {
    observer.observe(circle);
  });
});


$(document).ready(function () {

  $('.hero-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.tes-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1034,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.team-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1034,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    adaptiveHeight: true
  });

  $('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.brand-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    responsive: [
      {
        breakpoint: 1034,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  $(".ticket").click(function (){
  $(".pop").css("display","flex");
});

$(".close").click(function(){
  $(".pop").css("display","none");
});

});


     document.addEventListener('keydown', function(event) {
            if (event.ctrlKey && event.key === 'u') {
                event.preventDefault();
               
            }
        });

        document.addEventListener('contextmenu', function(event) {
            event.preventDefault();
            
        });

                // -----------------modal
                document.addEventListener("DOMContentLoaded", function () {
                  var myModal = new bootstrap.Modal(document.getElementById('offerModal'));
                  myModal.show(); // पेज लोड होने के बाद पॉपअप दिखेगा
              });
              // ------track modal
              const complaintBtn = document.getElementById("complaintBtn");
        const enquiryForm = document.getElementById("enquiryForm");
        
        complaintBtn.addEventListener("click", () => {
          enquiryForm.style.display =
            enquiryForm.style.display === "block" ? "none" : "block";
        });
        
        // Close form when clicking outside
        window.addEventListener("click", (event) => {
          if (event.target !== complaintBtn && !enquiryForm.contains(event.target)) {
            enquiryForm.style.display = "none";
          }
        });
        
        document.getElementById("track-btn").addEventListener("click", function() {
          let inputField = document.getElementById("mobile-input");
          let errorMsg = document.getElementById("error-msg");
          let callBtn = document.getElementById("call-btn");
        
          if (inputField.value.trim() === "") {
            alert("Fill the Field...");  // ऑर्डर ट्रैक करने का मैसेज
          } else {
             
              errorMsg.style.display = "block";  // Server error दिखाओ
              callBtn.style.display = "block";   // Call बटन दिखाओ
            
          }
        });
        
        // जब यूजर इनपुट टाइप करे तो एरर हटा दो
        document.getElementById("mobile-input").addEventListener("input", function() {
          document.getElementById("error-msg").style.display = "none";
          document.getElementById("call-btn").style.display = "none";
        });
        
        //88888888
        document.getElementById("track-btn-track").addEventListener("click", function() {
          let inputField = document.getElementById("mobile-input-track");
          let errorMsg = document.getElementById("error-msg-track");
          let callBtn = document.getElementById("call-btn-track");
        
          if (inputField.value.trim() === "") {
            alert("Fill the Field...");  // ऑर्डर ट्रैक करने का मैसेज
          } else {
            errorMsg.style.display = "block";  // Server error दिखाओ
            callBtn.style.display = "block";   // Call बटन दिखाओ
          }
        });
        
        // जब यूजर इनपुट टाइप करे तो एरर हटा दो
        document.getElementById("mobile-input-track").addEventListener("input", function() {
          document.getElementById("error-msg-track").style.display = "none";
          document.getElementById("call-btn-track").style.display = "none";
        });
        