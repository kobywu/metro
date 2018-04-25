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