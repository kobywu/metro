
var string = "Student and Kids";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 200);
})();

// Get the modal
var modal1 = document.getElementById('myModal1');
// Get the button that opens the modal
var btn1 = document.getElementById("button1");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];
// When the user clicks the button, open the modal 
btn1.onclick = function() {
    modal1.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal1.style.display = "none";
}


// Get the modal
var modal2 = document.getElementById('myModal2');
// Get the button that opens the modal
var btn2 = document.getElementById("button2");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];
// When the user clicks the button, open the modal 
btn2.onclick = function() {
    modal2.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal2.style.display = "none";
}

//Button on About The Tape Card Pop Up
var modal = document.getElementById('myModal2');
var small = document.getElementById("small");
var span = document.getElementsByClassName("close2")[0];
var popup = document.getElementById('myModal1');
small.onclick = function() {
    modal.style.display = "block";
	popup.style.display = "none";
}
span.onclick = function() {
    modal.style.display = "none";
}

// Get the modal
var modal3 = document.getElementById('myModal3');
// Get the button that opens the modal
var btn3 = document.getElementById("button3");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close3")[0];
// When the user clicks the button, open the modal 
btn3.onclick = function() {
    modal3.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal3.style.display = "none";
}



// When the user clicks anywhere outside of the modal, close it
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



var i = 0; //start point
var images = [];
var time = 3000; //the time until the screen will change to the next slide

//Image List of the slideshow
	images[0] ='images/metro1.jpg'; //this is an array that holds the first images
	images[1] ='images/metro2.jpg'; 
	images[2] ='images/metro3.jpg'; 
	images[3] ='images/metro4.png';

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


function regularbutton(x) {
	x.style.height = "50px";
    x.style.width = "100px";
	x.style.opacity = "1";
}
function hoverbutton(x) {
	x.style.height = "70px";
    x.style.width = "120px";
	x.style.opacity = "0.4";
}


function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
