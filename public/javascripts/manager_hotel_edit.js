// get modal element
var modal = document.getElementById('loginModal');
// get open modal button
var modalBtn = document.getElementById('loginBtn');
// get log out button
var logoutBtn = document.getElementById('logoutBtn');
// get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];
// get login comfirmation
var loginBtn = document.getElementsByClassName('loginClose')[0];

// listen for click open
modalBtn.addEventListener('click', openModal);
// listen for click exit
closeBtn.addEventListener('click', closeModal);
// listen for login confirmation
loginBtn.addEventListener('click', loginConfirmed);
// listen for logout confirmation
logoutBtn.addEventListener('click', logoutConfirmed);
// listen for outside click
window.addEventListener('click', clickOutside);


//function to open modal
function openModal(){
	modal.style.display = 'block';
}

// function to close modal
function closeModal(){
	modal.style.display = 'none';
}

// function to 
function loginConfirmed(){
	modal.style.display = 'none';
	modalBtn.style.display = 'none';
	logoutBtn.style.display = 'block';
}

function logoutConfirmed(){
	modalBtn.style.display = 'block';
	logoutBtn.style.display = 'none';
}

// function to close model if outside click
function clickOutside(e){
	if (e.target == modal){
		modal.style.display = 'none';
	}
}




