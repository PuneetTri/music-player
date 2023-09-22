var blue = document.getElementById("con");
var btn = document.getElementById("search-btnn");

btn.addEventListener("click", function () {
  blue.style.opacity = 1; // Set opacity to 1 to make it visible

  // Delay setting the display property to "block" until the opacity transition completes
  setTimeout(function () {
    blue.style.display = "block";
  }, 10); // Small delay to ensure opacity transition starts first
});

var but = document.getElementById("search-btnnn");

but.addEventListener("click", function () {
  blue.style.opacity = 0; // Set opacity to 0 to start the opacity transition

  // Delay setting the display property to "none" until the opacity transition completes
  setTimeout(function () {
    blue.style.display = "none";
  }, 500); // Adjust the delay to match the duration of the opacity transition (0.5 seconds)
});
