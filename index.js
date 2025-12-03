
// $(document).ready(function(){
// $("h1").css("color", "red");
// });

$("h1").addClass("big-title margin-50");
// $("h1").removeClass("big-title");

// $("button").text("Don't click me!");

// $("button").html("<em>Hey</em>");

// $("h1").text("Bye");

$("h1").click(function() {
    $("h1").css("color", "purple");
});

// Without jQuery
// for (var i=0; i<=5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "purple";
//     });
// };

$("button").click(function() {
    $("h1").css("color", "Orange");
});

$("input").keypress(function(event) {
    console.log(event.key);
    $("h1").text(event.key);
});


$("h1").on("mouseover", function() {
    $("h1").css("color", "blue");
});

// Positions inside and outside an element
// $("h1").before("<button>Hello</button>");
// $("h1").after("<button>Hello</button>");
// $("h1").append("<button>Hello</button>");
// $("h1").prepend("<button>Hello</button>");

