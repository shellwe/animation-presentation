// $(document).ready(function () {

//     function isScrolledIntoView(elem) {
//         var docViewTop = $(window).scrollTop();
//         var docViewBottom = docViewTop + $(window).height();

//         var elemTop = $(elem).offset().top;
//         var elemBottom = elemTop + $(elem).height();

//         return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
//     }

//     function scrollEvents() {
//         $(".slide").each(function () {
//             if (isScrolledIntoView($(this))) {
//                 $(this).addClass("isthisworking");
//             }
//         });
//     }

//     scrollEvents();
//     // window.addEventListener('scroll', scrollEvents);
//     window.addEventListener('scroll', scrollEvents);
//     window.addEventListener('resize', scrollEvents);

// });

// ----- Custom JS and click events  ----- 
$(".toggle-animation").click(function() {
    $( this ).toggleClass( "stopAnimation" );
  });

  $(".flipping-text-trigger").click(function() {
    $( this ).toggleClass( "flipping-text" );
  });

  

// ----- GSAP MotionPath example ----- 
//register the plugin (just once)
gsap.registerPlugin(MotionPathPlugin);

var tween = gsap.to("#sled", {
  motionPath: {
    path: "#path",
    align: "#path",
    alignOrigin: [0.5, 0.8],
  },
  duration: 5, 
  ease: "power1.inOut",
  repeat: 100,
});
window.addEventListener("resize", function() {
  var time = tween.totalTime();
  tween.seek(0).invalidate().totalTime(time);
});


// ----- Lottie example ----- 
var animatoin = bodymovin.loadAnimation({
    container: document.getElementById('lottieAnimation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/data.json'
})