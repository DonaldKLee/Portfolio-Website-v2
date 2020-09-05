//Responsive Nav Bar
var TurnsNBOn = document.getElementById("TheResponsiveNavBar");
var addani = document.getElementById("addsnavani");
var hambar = document.getElementById("randomfactstext");
var hambar2 = document.getElementById("randomfactstexton");
var hambaroff = document.getElementsByClassName("rnavbutton")[0];
var hambaron = document.getElementsByClassName("rnavbuttonon")[0];
var bg = document.getElementsByClassName("TheResponsiveNavBarbackground")[0];
// When the user clicks the button, open the bar 
hambar.onclick = function() {
	TurnsNBOn.style.display = "block";
  	addani.classList.add("rnavanimation");
	hambaroff.style.display = "none";
	hambaron.style.display = "inline";
	bg.style.display = "inline";
}
// When the user clicks on the button again, close the modal
hambar2.onclick = function() {
    TurnsNBOn.style.display = "block";
	addani.classList.remove("rnavanimation");
	hambaroff.style.display = "inline";
	hambaron.style.display = "none";
	bg.style.display = "none";
}
// When the user clicks anywhere outside of the bar, close it
bg.onclick = function(event) {
    TurnsNBOn.style.display = "block";
	addani.classList.remove("rnavanimation");
	hambaroff.style.display = "inline";
	hambaron.style.display = "none";
	bg.style.display = "none";
}

//Modals
//Get the modal
var modal1 = document.getElementById("modal1");
//Get the button that opens the modal (Showcase box)
var btn1 = document.getElementById("scbutton1");
// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];
//Animation
var ma = document.getElementsByClassName("mahere")[0];
// Opens the modal when the user clicks on the button
btn1.onclick = function() {
  modal1.style.display = "block";
  ma.classList.add("modalanimation");
}
//Closes the modal when the user clicks on the x
close.onclick = function() {
  modal1.style.display = "none";
}
//Also closes the modal when the user clicks outside of it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

