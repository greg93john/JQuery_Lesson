alert("Applying JQuery (after alert window closes)");
// adding classes
$("h1").addClass("big-title margin-50");
// modifying text
$("h1").text("I've been changed!");
$("button").html("<em>Hey click me!</em>");
// modifying attributes
$("a").attr("href","https://www.bing.com");
// adding event listeners
$("h1").click(function() {
  $("h1").css("color", "purple");
});

$("button").click(function() {
  $("h1").css("color", "red");
})

$(document).keypress(function(){
  $("h1").text(event.key);
});

$("h1").on("mouseover", function() {
  $("h1").css("color", "blue");
});
