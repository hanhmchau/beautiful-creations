// JavaScript Document

var t=document.getElementsByClassName("form-content");

function validateForm() {
	var count=0;
	var status=document.getElementById("form-status");

	for (var i=0;i<t.length;i++) {
		if (t[i].value=="" || t[i].type=="checkbox" && t[i].checked==false) {
			count++;
			t[i].classList.add("formInvalid"); //add the class .formInvalid to your element
		}
	}
	if (count>0) {
		status.innerHTML="";
	}
	else {
		status.innerHTML="Successfully sent.";	
	}
	return false;
}

function backColor(){
	var item=event.target;
	item.classList.remove("formInvalid");
};

function addEvent(){
	for (var i = 0; i < t.length; i++) {
    	t[i].addEventListener('click', backColor, false);
	}
}