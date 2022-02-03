function imgSwap(id) {
  document.getElementById("ps4c").src = id;
}

var setTwo = document.getElementById("ps4c");

// A = cross B = circle Y = triangle X = square

setTwo.addEventListener("dblclick", function () {
  document.getElementById("circle").src = "images/b.jpg";
  document.getElementById("cross").src = "images/a.jpg";
  document.getElementById("triangle").src = "images/y.jpg";
  document.getElementById("square").src = "images/x.jpg";
});
