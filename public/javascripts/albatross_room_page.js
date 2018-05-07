var slideIndex = 1;
showDivs(slideIndex);

function bookingPopup(){
	alert("You have booked this room!");
}

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("pepper");
    if (n > x.length) {
        slideIndex = 1;
    } 
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}

