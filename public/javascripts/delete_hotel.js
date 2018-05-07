// get modal element
var delModal = document.getElementById('deleteModal');
// get open modal button
var delModalBtn = document.getElementById('modalBtn');
// get close button
var closeDelBtn = document.getElementsByClassName('delCloseBtn')[0];

// listen for click open
delModalBtn.addEventListener('click', openDelModal);
// listen for click exit
closeDelBtn.addEventListener('click', closeDelModal);
// listen for outside click
window.addEventListener('click', clickDelOutside);

//function to open modal
function openDelModal(){
	delModal.style.display = 'block';
}

// function to close modal
function closeDelModal(){
	delModal.style.display = 'none';
}

// function to close model if outside click
function clickDelOutside(e){
	if (e.target == delModal){
		delModal.style.display = 'none';
	}
}


// function to close model if outside click
function clickOutsideDel(e){
	if (e.target == delModal){
		delModal.style.display = 'none';
	}
}