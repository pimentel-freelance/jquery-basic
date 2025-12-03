
// $(document).ready(function(){
// $("h1").css("color", "red");
// });

$("h1").addClass("big-title margin-50");
// $("h1").removeClass("big-title");

// $("button").text("Don't click me!");

// $("button").html("<em>Hey</em>");

// $("h1").text("Bye");

// $("h1").click(function() {
//     $("h1").css("color", "purple");
// });

// Without jQuery
// for (var i=0; i<=5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "purple";
//     });
// };

// $("button").click(function() {
//     $("h1").css("color", "Orange");
// });

// $("input").keypress(function(event) {
//     console.log(event.key);
//     $("h1").text(event.key);
// });

// $("h1").on("mouseover", function() {
//     $("h1").css("color", "blue");
// });

// Positioning inside and outside an element
// $("h1").before("<button>Hello</button>");
// $("h1").after("<button>Hello</button>");
// $("h1").append("<button>Hello</button>");
// $("h1").prepend("<button>Hello</button>");

// Animations
// $("button").on("click", function() {
//     $("h1").hide;
// });

// $("button").on("click", function() {
//     $("h1").toggle();
// });

// $("button").on("click", function() {
//     $("h1").fadeOut();
// });

// $("button").on("click", function() {
//     $("h1").faceIn();
// });

// $("button").on("click", function() {
//     $("h1").fadeToggle();
// });

// $("button").on("click", function() {
//     $("h1").slideUp();
// });

// $("button").on("click", function() {
//     $("h1").slideDown();
// });

// $("button").on("click", function() {
//     $("h1").slideToggle();
// });

// $("button").on("click", function() {
//     $("h1").animate({opacity: 0.5});
// });

// $("button").on("click", function() {
//     $("h1").animate({margin: "20%"});
// });

$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});


