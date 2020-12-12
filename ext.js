window.addEventListener("scroll", function(){
	var header= document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY >0);
});



function toggleR1(){
	var r1Toggle = document.querySelector(".toggle");
	var r1 = document.querySelector(".r1");
	r1Toggle.classList.toggle("active");
	r1.classList.toggle("active");
}