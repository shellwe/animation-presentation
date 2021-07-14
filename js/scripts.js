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

// ----- GSAP  example ----- 
var tween = gsap.from(".balls div", {duration: 1, ease: "bounce", repeat: -1, y: "random(-300,-50)", stagger: 0.5})

document.querySelector("#play").onclick = () => tween.play();
document.querySelector("#pause").onclick = () => tween.pause();
document.querySelector("#resume").onclick = () => tween.resume();
document.querySelector("#reverse").onclick = () => tween.reverse();
document.querySelector("#restart").onclick = () => tween.restart();

// ----- GSAP MotionPath example ----- 
//register the plugin (just once)
gsap.registerPlugin(MotionPathPlugin);
var sled = gsap.to("#sled", {
  motionPath: {
    path: "#path",
    align: "#path",
    alignOrigin: [0.5, 0.8],
  },
  duration: 5, 
  ease: "power1.inOut",
  repeat: -1,
});
window.addEventListener("resize", function() {
  var time = sled.totalTime();
  sled.seek(0).invalidate().totalTime(time);
});


// ----- Lottie example ----- 
var animation = bodymovin.loadAnimation({
    container: document.getElementById('lottieAnimation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/data.json'
})