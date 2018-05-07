function showHotelInput(){
	var hotelIn1 = document.getElementById("hotelInText");
	var hotelIn2 = document.getElementById("managerSearch2");
	if (hotelIn1.style.display === "none"){
		hotelIn1.style.display = "inline-block";
		hotelIn2.style.display = "inline-block";
	}
}

function hotelProceedBtn(){
	var hotelProceed = document.getElementById("hotelEnterBtn");
	if (hotelProceed.style.display === "none"){
		hotelProceed.style.display = "block";
	}
}

