//when the 
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

function highlight1() {
	document.getElementById("link1").classList.add("highlight");
}
function highlight2() {
	document.getElementById("link2").classList.add("highlight");
}
function highlight3() {
	document.getElementById("link3").classList.add("highlight");
}
function noHighlight1() {
	document.getElementById("link1").classList.remove("highlight");
}
function noHighlight2() {
	document.getElementById("link2").classList.remove("highlight");
}
function noHighlight3() {
		document.getElementById("link3").classList.remove("highlight");
}
function highlight4() {
	document.getElementById("link4").classList.add("highlight");
}
function highlight5() {
	document.getElementById("link5").classList.add("highlight");
}
function highlight6() {
	document.getElementById("link6").classList.add("highlight");
}
function noHighlight4() {
	document.getElementById("link4").classList.remove("highlight");
}
function noHighlight5() {
	document.getElementById("link5").classList.remove("highlight");
}
function noHighlight6() {
		document.getElementById("link6").classList.remove("highlight");
}
var string = "Students (K-8 and 9-12)";
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
