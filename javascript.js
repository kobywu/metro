//When the window is loaded, the title will be typed out
var string = "Student and Kids"; //this is the phrase that will be typed
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 200); //the 200 is the time limit for each letter to come out
})();

//Popup 1 (modal)
var modal1 = document.getElementById('myModal1');
var btn1 = document.getElementById("button1");
var span = document.getElementsByClassName("close1")[0]; //this is the close button
// When the button is clicked, the popup modal will open with the display changing to block
btn1.onclick = function() {
    modal1.style.display = "block";
}
// When the user clicks on <span> (x), close the modal by the display being none
span.onclick = function() {
    modal1.style.display = "none";
}

// Popup 2 (modal)
var modal2 = document.getElementById('myModal2');
var btn2 = document.getElementById("button2");
var span = document.getElementsByClassName("close2")[0];
btn2.onclick = function() {
    modal2.style.display = "block";
}
span.onclick = function() {
    modal2.style.display = "none";
}

//Button on About The Tape Card Pop Up
var modal = document.getElementById('myModal2');
var small = document.getElementById("small");
var span = document.getElementsByClassName("close2")[0];
var popup = document.getElementById('myModal1');
//the first modal that was originally click will change its display value to none making it close and the 2nd modal popup wiill show with the display value at block
small.onclick = function() {
    modal.style.display = "block";
	popup.style.display = "none";
}
span.onclick = function() {
    modal.style.display = "none";
}

// Popup 3
var modal3 = document.getElementById('myModal3');
var btn3 = document.getElementById("button3");
var span = document.getElementsByClassName("close3")[0];
btn3.onclick = function() {
    modal3.style.display = "block";
}
span.onclick = function() {
    modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, the modal (pop up) will close
window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
	 if (event.target == modal2) {
        modal2.style.display = "none";
    }
	 if (event.target == modal1) {
        modal1.style.display = "none";
    }
}


//This is the slide show code
var i = 0; //start point
var images = [];
var time = 3000; //the time until the screen will change to the next slide
//Image List of the slideshow
	images[0] ='images/metro1.jpg'; //this is an array that holds the first images
	images[1] ='images/metro2.jpg'; 
	images[2] ='images/metro3.jpg'; 
//call the images to change
function slideshow(){
	document.slide.src = images[i]; //when the function is called by "slideshow" the element with the name "slide" will be called to show the array "images" with the value "i". The "i" starts with the value 0 so the slideshow starts with the first image aka "images[0]"
	if(i < images.length - 1){ //Images.length is how many index values there are (amount of images in the Image List) which is 3 but since it starts at 0, you substract by 1
		i++; //the index value will increase by 1
	} 
	else {
	i = 0; //when the index value because less than i, then you would reset the i index value to 0
	}
	setTimeout("slideshow()", time); //This is how long the image will wait and then change by calling the variable time which is 3000 making it change every 3 seconds
}
window.onload = slideshow;


//The buttons on the modal pop ups are styled by these functions 
function regularbutton(x) {
	x.style.height = "50px";
    x.style.width = "100px";
	x.style.opacity = "1";
}
//When the buttons are hovered, this function will change the styling 
function hoverbutton(x) {
	x.style.height = "70px";
    x.style.width = "120px";
	x.style.opacity = "0.4";
}


//This code is when the user clicked on the button with the link will open a new tab to show the link
function openInNewTab(url) {
  var wind = window.open(url, '_blank');
  wind.focus();
}

