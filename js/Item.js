// JavaScript Document
function moveUp(t) {
	var pen=document.getElementById("real-pen-image"+t);
	pen.style.transform="translateY(-40px)";
	var shadow=document.getElementById("shadow"+t);
	setTimeout(function() {shadow.style.opacity="0";},500);
}

function moveDown(t) {
	var pen=document.getElementById("real-pen-image"+t);
	pen.style.transform="translateY(0px)";
	var shadow=document.getElementById("shadow"+t);
	setTimeout(function() {shadow.style.opacity="0.3";},500);
}

function Item(name, imagePen, imageRoller, imagePencil, linkPen, linkRoller, linkPencil, pos) {
	this.name=name;
	this.imagePen=imagePen;
	this.imageRoller=imageRoller;
	this.imagePencil=imagePencil;
	this.linkPen=linkPen;
	this.linkRoller=linkRoller;
	this.linkPencil=linkPencil;
	this.pos=pos;
	
	this.getName=function() {
		return this.name;
	};
	
	this.getImagePen=function() {
		return this.imagePen;
	};	
	
	this.displayPen=function() {
		return "<a class='real-style' id='real-pen"+this.pos+"' onmouseover='moveUp("+this.pos+")' onmouseleave='moveDown("+this.pos+")' href='"+this.linkPen+"' class='gallery-item'><img src='"+this.imagePen+"' id='real-pen-image"+this.pos+"' alt=''/><br><div id='shadow"+this.pos+"' class='shadow'></div><span class='notation'>><span class='text-style'>"+this.name+"</span></span></a>";
	}
	this.displayRoller=function() {
		return "<a class='real-style' id='real-pen"+this.pos+"' onmouseover='moveUp("+this.pos+")' onmouseleave='moveDown("+this.pos+")' href='"+this.linkRoller+"' class='gallery-item'><img src='"+this.imageRoller+"' id='real-pen-image"+this.pos+"' alt=''/><br><div id='shadow"+this.pos+"' class='shadow'></div><span class='notation'>><span class='text-style'>"+this.name+"</span></span></a>";
	}
	
	
	this.displayPencil=function() {
		return "<a class='real-style' id='real-pen"+this.pos+"' onmouseover='moveUp("+this.pos+")' onmouseleave='moveDown("+this.pos+")' href='"+this.linkPencil+"' class='gallery-item'><img src='"+this.imagePencil+"' id='real-pen-image"+this.pos+"' alt=''/><br><div id='shadow"+this.pos+"' class='shadow'></div><span class='notation'>><span class='text-style'>"+this.name+"</span></span></a>";
	}
}

function erase() {
	var textField=document.getElementById("text-box");
	textField.innerHTML="";
	var canvas=document.getElementById("bigger-gallery-inside");
	canvas.innerHTML="";
	textField.style.opacity="0";
	canvas.style.opacity="0";
}

var nameArray=["Classic","Anello","Guilloche","Intuition","Wood","Tamitio"];
var array=new Array();

for (var i=0;i<nameArray.length;i++) {
	var penString="resource/gallerypen"+i+".png";
	var rollerString="resource/galleryroller"+i+".png";
	var pencilString="resource/gallerypencil"+i+".png";
	array.push(new Item(nameArray[i],penString,rollerString,pencilString,"#","#","#",i));
}

function writeAllPens(){
	var textField=document.getElementById("text-box");
	textField.innerHTML="<span class='header-line'>FOUNTAIN PEN</span><p>The feeling conveyed by a noble fountain pen with a gold nib remains as incomparable as ever. The fountain pens are equipped with a 18-carat gold nib which is ‘run in’ by hand. Manufacturing such a nib is an elaborate process involving over a hundred steps, most of them carried out by hand. Each nib is then ‘run in’ by hand.</p>";
	var canvas=document.getElementById("bigger-gallery-inside");
	canvas.innerHTML="";
	for (var i=0;i<array.length;i++) {
		canvas.innerHTML+=array[i].displayPen();
	}
	textField.style.opacity="1";
	canvas.style.opacity="1";
}
function writeAllRollers(){
	var textField=document.getElementById("text-box");
	textField.innerHTML="<span class='header-line'>Rollerball Pen</span><p>Modern rollerballs provide an interesting alternative for day-to-day writing, in terms of precision, smooth flow of ink, and convenience. The rollerball has a precision point which glides smoothly over the paper and long-lasting magnum refill.</p>";
	var canvas=document.getElementById("bigger-gallery-inside");
	canvas.innerHTML="";
	for (var i=0;i<array.length;i++) {
		canvas.innerHTML+=array[i].displayRoller();
	}
	textField.style.opacity="1";
	canvas.style.opacity="1";
}

function writeAllPencils(){
	var textField=document.getElementById("text-box");
	textField.innerHTML="<span class='header-line'>Propelling Pencil</span><p>The slender shape and good balance of the propelling pencil mean that they fit comfortably in the hand. Well engineered mechanisms and robust details, such as the spring-loaded clip made of solid metal, ensure that the joy of using them is as timeless as the design. Propelling pencil with tough 0.7-mm lead, reservoir for spare leads, and a replaceable white eraser under the end cap.</p>";
	var canvas=document.getElementById("bigger-gallery-inside");
	canvas.innerHTML="";
	for (var i=0;i<array.length;i++) {
		canvas.innerHTML+=array[i].displayPencil();
	}
	textField.style.opacity="1";
	canvas.style.opacity="1";
}

function displayAllPens() {
	erase();
	setTimeout(writeAllPens,500);
}

function displayAllRollers() {
	erase();
	setTimeout(writeAllRollers,500);
}

function displayAllPencils() {
	erase();
	setTimeout(writeAllPencils,500);
}

var firstPos=0;
var arrayOfDisplacement=[0,0,0,0,0,0];

function carouselMoveLeft() {
	var galleryItem=document.getElementsByClassName("real-style");
	arrayOfDisplacement[firstPos]=(1-firstPos)*100;
	
	for (var i=0;i<galleryItem.length;i++) {
		if (i!=firstPos) {
			arrayOfDisplacement[i]+=100;
		}
	}

	for (var i=0;i<galleryItem.length;i++) {
		galleryItem[i].style.transform="translateX("+arrayOfDisplacement[i]+"%)";
	}

	firstPos--;
	if (firstPos<0) {
		firstPos=5;
	}
}

function carouselMoveRight() {
	var galleryItem=document.getElementsByClassName("real-style");
	arrayOfDisplacement[firstPos]=(5-firstPos)*100;
	
	for (var i=0;i<galleryItem.length;i++) {
		if (i!=firstPos) {
			arrayOfDisplacement[i]-=100;
		}
	}
	for (var i=0;i<galleryItem.length;i++) {
		galleryItem[i].style.transform="translateX("+arrayOfDisplacement[i]+"%)";
	}
	firstPos++;
	if (firstPos>5) {
		firstPos=0;
	}
}

var namePaperArray=["Gratitude","Joy","Gold Foil","Rust","Willow","Swan"];
var paperArray=new Array();

for (var i=0;i<namePaperArray.length;i++) {
	var penString="resource/notebook"+i+".jpg";
	var rollerString="resource/galleryroller"+i+".png";
	var pencilString="resource/gallerypencil"+i+".png";
	paperArray.push(new Item(nameArray[i],penString,rollerString,pencilString,"#","#","#",i));
}
//function writeAllNotebooks(){
//	var textField=document.getElementById("text-box");
//	textField.innerHTML="<span class='header-line'>Notebook</span><p>With our collection of cute notebooks and journals, you can take notes in style. Whether you're jotting down for the office, making a personal to-do list, or taking notes for an important class, our writing journals will make everything a lot prettier.</p>";
//	var canvas=document.getElementById("bigger-gallery-inside");
//	canvas.innerHTML="";
//	for (var i=0;i<array.length;i++) {
//		canvas.innerHTML+=paperArray[i].displayPen();
//	}
//	textField.style.opacity="1";
//	canvas.style.opacity="1";
//}
function writeAllCards(){
	var textField=document.getElementById("text-box");
	textField.innerHTML="<span class='header-line'>Card</span><p>Everyone loves a Paperchase card and it's even better when you can bag a few at a discount! Stock up on cards for birthdays, engagements, new babies and more in the Paperchase summer sale.</p>";
	var canvas=document.getElementById("bigger-gallery-inside");
	canvas.innerHTML="";
	for (var i=0;i<array.length;i++) {
		canvas.innerHTML+=paperArray[i].displayRoller();
	}
	textField.style.opacity="1";
	canvas.style.opacity="1";
}

function writeAllPrints(){
	var textField=document.getElementById("text-box");
	textField.innerHTML="<span class='header-line'>Print</span><p>Created for the our open studio in December, the Stay Hungry print is letterpress printed by hand on our Asbern Proof Press in a beautiful raspberry ink, on Wild 300gsm (35% cotton stock). The print features an Australian floral design, illustrated by hand right here in Melbourne at The Hungry Workshop.</p>";
	var canvas=document.getElementById("bigger-gallery-inside");
	canvas.innerHTML="";
	for (var i=0;i<array.length;i++) {
		canvas.innerHTML+=paperArray[i].displayPencil();
	}
	textField.style.opacity="1";
	canvas.style.opacity="1";
}


function displayAllCards() {
	erase();
	setTimeout(writeAllCards,500);
}

function displayAllPrints() {
	erase();
	setTimeout(writeAllPrints,500);
}
//
//function displayAllNotebooks() {
//	erase();
//	setTimeout(writeAllNotebooks,500);
//}
