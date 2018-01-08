// JavaScript Document
function engrave(x){
	if (x.checked==true) {
		document.getElementsByClassName("engraving-details")[0].style.display="block";
		document.getElementsByClassName("engraving-text")[0].style.display="block";
		
	}
	else {
		document.getElementsByClassName("engraving-details")[0].style.display="none";	
		document.getElementsByClassName("engraving-text")[0].style.display="none";	
	}
}


function updateCountdown() {
    // 20 is the max message length
	var z=jQuery('.engraving-message');
    var remaining = 20 - z.val().length;
    jQuery('.engraving-countdown').text(remaining + ' characters remaining.');
	document.getElementsByClassName("engraving-text")[0].textContent=z.val();
}


jQuery(document).ready(function($) {
    updateCountdown();
    $('.engraving-message').change(updateCountdown);
    $('.engraving-message').keyup(updateCountdown);
	
	$(".fontbox").click(function($){
		var text=document.getElementsByClassName("engraving-text")[0];
		if (this.value=="serif") {
			text.style.fontFamily="Times New Roman";
			text.style.fontSize="16px";
		}		
		if (this.value=="sans") {
			text.style.fontFamily="Segoe UI";	
			text.style.fontSize="14px";
		}		
		if (this.value=="script") {
			text.style.fontFamily="Pinyon Script";
			text.style.fontSize="22px";
		}
	});
	
	
    $(".color-pick").click(function(){
        var value = $(this).attr('data-filter');
		var pic=document.getElementsByClassName("small-showcase")[0];
		pic.style.opacity="0";
		setTimeout(function() {pic.src=value},500);
		setTimeout(function() {pic.style.opacity="1";},500);
    });
});