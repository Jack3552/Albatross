// ROOM_MODIFY.HTML
function selectAll(source){
	var checkboxes = document.getElementsByName('roomNumber');
	for(var i=0, n=checkboxes.length; i<n; i++){
		checkboxes[i].checked = true;
	}
}

function selectNone(source){
	var checkboxes = document.getElementsByName('roomNumber');
	for (var i=0, n=checkboxes.length; i<n; i++){
		checkboxes[i].checked = false;
	}
}

function deleteChecked(source){
	var checkboxes = document.getElementsByName('roomNumber');
	for (var i=0, n=checkboxes.length; i<n; i++){
		if (checkboxes[i].checked === true){
			$("checkboxes[i]").remove();
		}
	}
}