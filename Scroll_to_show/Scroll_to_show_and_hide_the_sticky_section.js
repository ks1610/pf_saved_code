/*#Scroll to show and hide the sticky section
	Solution: 
Add one custom id(ex:stickySec) into Section
Add a custom css to make it sticky and display none them
Add this custom javascript code into Custom JS Modal
window.scrollY is a variable that helps you to check the number when the page scrolls. Example scroll to top is 0. You can use this variable to check when to hide and show the sticky.
You can check the number of window.scrollY like this. In the live view open console log and scroll the page into the position that you want and then type the above variable window.scrollY. It will show the number for you.*/


var sticky = document.querySelector('#stickySec'); 
window.onscroll = function(){
if(window.scrollY > 450) { 
 sticky.style.display = 'block'; 
} else {
 sticky.style.display = 'none'; 
}
}
