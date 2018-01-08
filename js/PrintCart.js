// JavaScript Document
function init() {
	var count=window.localStorage.getItem("count");
	if (count==null) {
		window.localStorage.setItem("count",0);
	}
}

function cartItem(id, qty) {
	this.id=id;
	this.qty=qty;
}

function addTopCart(){
	var bigCart=document.getElementById("biggy");
	var strVar="";
strVar += "			<tr class='first-line'>";
strVar += "				<th class=\"remove-cart\">&nbsp;<\/th>";
strVar += "				<th class=\"pic-cart\">&nbsp;<\/th>";
strVar += "				<th class=\"name-cart\">Product<\/th>				";
strVar += "				<th class=\"price-cart\">Price<\/th>				";
strVar += "				<th class=\"quantity-cart quantity\">Quantity<\/th>	";
strVar += "				<th class=\"total-cart\">Total<\/th>					";
strVar += "			<\/tr>";
	bigCart.innerHTML=strVar;	
}

function addBottomCart(){
	var bigCart=document.getElementById("biggy");	
	var strVar="";
strVar += "			<tr class='last-line'>";
strVar += "				<td colspan=\"6\"><input type=\"submit\" id=\"update-cart\" onClick=\"update()\" value=\"Update Cart\"><\/td>";
strVar += "			<\/tr>";
	bigCart.innerHTML+=strVar;	
}

function addEmpty(){
	var bigCart=document.getElementById("biggy");	
var strVar="";
strVar += "<div style='text-align:center; padding:40px;'><a href=\"Home.html\"><img src=\"resource\/emptyCart.jpg\" width=\"400\" alt=\"\"\/><\/a></div>";
strVar += "";
	bigCart.innerHTML=strVar;	
}

function printTotals(){
	var strVar="";
strVar += "		<form method=\"post\">";
strVar += "		<span>Cart Totals<\/span>";
strVar += "		<table id=\"totals\" cellspacing=\"0\">";
strVar += "			<tr id=\"subtotal\">";
strVar += "				<th>Subtotal<\/th>";
strVar += "				<td id=\"subtotal-amount\">$21.00<\/td>";
strVar += "			<\/tr>";
strVar += "			<tr>";
strVar += "				<th>Shipping<\/th>";
strVar += "				<td>Free Shipping<\/td>";
strVar += "			<\/tr>";
strVar += "			<tr>";
strVar += "				<th>Total<\/th>";
strVar += "				<td id=\"final-amount\">$21.00<\/td>";
strVar += "			<\/tr>";
strVar += "		<\/table>";
strVar += "		<span id=\"checkout\" onclick='checkout()'>Proceed to Checkout<\/span>";
strVar += "		<\/form>";
		var total=document.getElementById("cart-totals");
	total.innerHTML=strVar;
}

function checkout() {
	var count=window.localStorage.getItem("count");
	localStorage.clear();
	location.reload();
}

function update() {

	var sum=0;
	var bigCart=document.getElementById("biggy");	
	var count=window.localStorage.getItem("count");
	
	if (count==0 || count==null) {
		addEmpty();
		return;
	}
	addTopCart();
	for (var i=1;i<=count;i++) {
		var v=window.localStorage.getItem(i);
		if (v!=null) {
			var item=JSON.parse(v);
			var code=item.id;
			bigCart.innerHTML+=bigProductArray[code].printCartItem(code,item.qty);
			sum+=bigProductArray[code].price*item.qty;
		}
	}
	
	addBottomCart();
	printTotals();
	
		var k=document.getElementById("subtotal-amount");
		k.textContent="$"+sum.toFixed(2);
		document.getElementById("final-amount").textContent=k.textContent;
}


function findproduct(id) {
	var count=window.localStorage.getItem("count");
	for (var i=1;i<=count;i++) {
		var v=window.localStorage.getItem(i);
		if (v!=null) {
			var item=JSON.parse(window.localStorage.getItem(i));
			if (id==item.id)
				return i;
		}
	}
	return -1;
}

function updateToStorage(id) {
	var result=findproduct(id);
	var myObj=window.localStorage.getItem(result);

	if (result!=-1) {
		var newQty;
		var qtyString="qtybox"+id;
		newQty=document.getElementById(qtyString).value;
		var cartObj=new cartItem(id,newQty);
		var myJSON=JSON.stringify(cartObj);
		window.localStorage.setItem(result,myJSON);
	}
}

function addToCart(id){
	var qty=document.getElementById("qtybox"+id);
	var result=findproduct(id);
	var cartObj=new cartItem(id,qty.value);
	var myJSON=JSON.stringify(cartObj);
	var status=document.getElementById("status"+id);
	
	if (result==-1) {
		var count=window.localStorage.getItem("count");
		count++;
		window.localStorage.setItem("count",count);
		window.localStorage.setItem(count,myJSON);
		status.textContent="Added."
	}
	else {
		window.localStorage.setItem(result,myJSON);
		status.textContent="Updated."
	}
}


	function increase(x) {
		var string="qtybox"+x;
		var t=document.getElementById(string);
		if (t.value<100) {
			document.getElementById(string).value++;
		}
		updateToStorage(x);
	}
	function decrease(x) {
		var string="qtybox"+x;
		var t=document.getElementById(string);
		if (t.value>1) {
			document.getElementById(string).value--;
		}
		updateToStorage(x);
	}

function removeFromCart(id) {
	
	var pos=findproduct(id);
	var t=document.getElementById("cartrow"+id);
	t.parentNode.removeChild(t);
	
	var newCount=0;
	var count=window.localStorage.getItem("count");
	for (var i=pos+1;i<=count;i++) {
		var myObj=window.localStorage.getItem(i);
		window.localStorage.setItem(i-1,myObj);
	}
	window.localStorage.removeItem(count);
	count--;
	window.localStorage.setItem("count",count);
}