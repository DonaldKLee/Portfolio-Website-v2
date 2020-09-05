function myFunction() {
  var invis = document.getElementById("rminvis");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (invis.style.display === "none") {
    invis.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } 
  else {
    invis.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}