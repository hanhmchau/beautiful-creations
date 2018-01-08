// JavaScript Document
window.onscroll = function() {scrollMenu()};
	
	function scrollMenu() {
	var x=150;
	var t=document.getElementById("dropdown-menu");
    if (document.body.scrollTop > x || document.documentElement.scrollTop > x) {
        t.style.position="fixed";
		t.style.margin="-10px 10% 0px 10%";
		t.style.backgroundColor="#fcf5eb";
		t.style.borderBottom="none";
    }
	else {
        t.style.position="relative";
		t.style.margin="20px 10% 0px 10%";
		t.style.backgroundColor="transparent";
		if (t.classList.contains("banner-less")) {
			t.style.borderBottom="1px solid lightgray";
		}
	}
}

var k=0;
function showInner(number) {
		
		var i;
		var innerName="inner-li"+number;
		var t=document.getElementsByClassName(innerName);
		if (k==1) {
			k=0;
			for (i = 0; i < t.length; i++) {
    			t[i].style.display = "none";
			}
		}
		else {
			k=1;
			for (i = 0; i < t.length; i++) {
    			t[i].style.display = "block";
			}
		}
}

var n=1;
	
function showMenu() {
		var i;
		var t=document.getElementById("small-menu");
		if (n==0) {
			n=1;
			document.body.style.height="inherit";
			document.body.style.overflow="auto";
			document.body.style.margin="1%";
			t.style.display = "none";
		}
		else {
			n=0;
			document.body.style.height="100%";
			document.body.style.overflow="hidden";
			document.body.style.margin="0";
			t.style.display="block";
		}
	}

var num=Math.floor((Math.random() * 4) + 1);
	
    function firstClick() {
		var string="button"+num;
        num=num+1;
		var t=document.getElementById(string);
		t.click();
		t.focus();
		runBanner();
	}
    
	function runBanner() {
			t=document.getElementById("button"+num);
			if (num>=5) num=1;
			t.click();
			t.focus();
			setTimeout(runBanner,3000);
	}
    
    function changePicture(number) {
			var picture=document.getElementById("large-picture");
			var source;
	
			var link=document.getElementById("pic");
			var address;
		
			var bigtext=document.getElementById("big-text");
			var smalltext=document.getElementById("small-text");
			var bigstring;
			var smallstring;
        
            var i;
            var checkString,k;
            for (i = 1; i <= 4; i++) { 
                    checkString="button"+i;
                    k=document.getElementById(checkString);
                    k.className="button";
            }

        
            var btnString="button"+number;
            var btn=document.getElementById(btnString);
            btn.className+=" active";
			
			switch (number) {
				case 1: source="url('resource/banner3.png')";
					address="Gallery-DrawingInstruments.html";
					bigstring="The Pencil and the Sea";
					smallstring="“My big fish must be somewhere.”";
					break;
				case 2: source="url('resource/banner7.png')";
					address="Gallery-PaperPad.html";
					bigstring="The Sound of Red Ink";
					smallstring="Just like a small kiss.";
					break;
				case 3: 
					source="url('resource/circus.jpg')";
					address="Gallery-StationerySet.html";
					bigstring="Memories of Letters";
					smallstring="For a rainy day.";
					break;
				case 4: source="url('resource/banner6.png')";
					address="Gallery-WritingInstruments.html";
					bigstring="Sennelier in Watercolor";
					smallstring="When in doubt, leave it white.";
					break;
		}
			picture.style.backgroundImage=source;
			link.href=address;
			bigtext.textContent=bigstring;
			smalltext.textContent=smallstring;
            num=number+1;
            if (num>=5) num=1;
	}