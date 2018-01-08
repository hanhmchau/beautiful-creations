// JavaScript Document
$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
        }
		$(".filter-button").removeClass("active-filter");
		$(this).addClass("active-filter");
    });
});

function Product(name, price, image,type,link) {
	this.name=name;
	this.price=price;
	this.image=image;
	this.type=type;
	this.link=link;
	
	this.print=function() {
		return "<div class='gallery-product filter "+this.type+"'><img src='"+this.image+"' class='img-responsive'><a href='"+this.link+"'><span class='product-name'>"+this.name+"</span><span class='product-price'>$"+this.price+"</span></a></div>";
	};
}

var nameFountainArray=["Lamy Safari 2017","Parker Sonnet Black Gold Trim","Yard-O-Led Viceroy","Lamy Al-Star","Waterman Hemisphere Stainless"];
var priceFountainArray=[30,26,17.5,46,162.9];

var nameBallpointArray=["Cross ATX Medalist","Cross Apogee Black Star","Waterman Carene Essential","Hugo Boss Grove","Parker Jotter Victoria Violet"]
var priceBallpointArray=[51,16,20.5,115.2,20];

var nameRollerArray=["Sheaffer Taranis Amethyst","Parker IM Dark Espresso","Cross Bailey Chrome","Parker Urban Premium Purple","Cross Century II 10 Carat"];
var priceRollerArray=[10,6,18.5,92,100];

var namePencilArray=["Otto Hut Design 02","Lamy Imporium","Yard-O-Led Diplomat Hexagonal","Kaweco Brass Sport","Faber-Castell Ambition"];
var pricePencilArray=[54,28,57.5,75,250];

var productArray=new Array();

for (var i=0;i<nameFountainArray.length;i++) {
	var picString="resource/productfountain"+i+".jpg";
	productArray.push(new Product(nameFountainArray[i],priceFountainArray[i],picString,"fountain","#"));
}
for (var i=0;i<nameBallpointArray.length;i++) {
	var picString="resource/productballpoint"+i+".jpg";
	productArray.push(new Product(nameBallpointArray[i],priceBallpointArray[i],picString,"ballpoint","#"));
}
for (var i=0;i<nameRollerArray.length;i++) {
	var picString="resource/productroller"+i+".jpg";
	productArray.push(new Product(nameRollerArray[i],priceRollerArray[i],picString,"roller","#"));
}
for (var i=0;i<namePencilArray.length;i++) {
	var picString="resource/productpencil"+i+".jpg";
	productArray.push(new Product(namePencilArray[i],pricePencilArray[i],picString,"pencil","#"));
}

function printAll() {
	var gal=document.getElementById("gallery-container");

	for (var k=0;k<productArray.length;k++) {
		gal.innerHTML+=productArray[k].print();
	}
}
productArray[3].link="Product.html";


