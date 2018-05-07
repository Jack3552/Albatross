/*// get modal element
var modal = document.getElementById('loginModal');
// get open modal button
var modalBtn = document.getElementById('loginBtn');
// get log out button
var logoutBtn = document.getElementById('logoutBtn');
// get manager button
var managerBtn = document.getElementById('gotoManagementBtn');
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
	managerBtn.style.display = 'block'
}

function logoutConfirmed(){
	modalBtn.style.display = 'block';
	logoutBtn.style.display = 'none';
	managerBtn.style.display = 'none';
}

// function to close model if outside click
function clickOutside(e){
	if (e.target == modal){
		modal.style.display = 'none';
	}
}
*/

var modal = document.getElementById('id01');
//get first login button
var loginBtn1 = document.getElementById('loginBtn');;
// get inner modal login button
var loginBtn2 = document.getElementsByClassName('loginBtn2')[0];
// get manager button
var managerBtn = document.getElementById('gotoManagementBtn');
// get logout button
var logoutListen = document.getElementById('logoutBtn');

loginBtn2.addEventListener('click', closeLoginModal);
logoutListen.addEventListener('click', returnToLoginMode);

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function closeLoginModal(){
	modal.style.display = "none";
	loginBtn1.style.display = "none";
	logoutListen.style.display = "block";
	managerBtn.style.display = "block";
}

function returnToLoginMode(){
	loginBtn1.style.display = "block";
	logoutListen.style.display = "none";
	managerBtn.style.display = "none";
}