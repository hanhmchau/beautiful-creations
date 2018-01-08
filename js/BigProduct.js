// JavaScript Document

function FullProduct(id, name, price, image, type, subtype, pretitle, description, subdes, details) {

	this.id = id;
	this.name = name;
	this.price = price;
	this.image = image;
	this.type = type;
	this.subtype = subtype;
	this.pretitle = pretitle;
	this.description = description;
	this.subdes = subdes;
	this.details = details;

	this.getName = function () {
		return this.name;
	}

	this.print = function () {
		return "<div class='gallery-product filter " + this.subtype + "'><img src='" + this.image[0] + "' class='img-responsive'><a onclick='newProductPage(" + this.id + ")'><span class='product-name'>" + this.name + "</span><span class='product-price'>$" + this.price + "</span></a></div>";
	};

	this.printOther = function () {
		return "<div class='gallery-product filter " + this.subtype + "'><img src='" + this.image[4] + "' class='img-responsive'><a href='Product.html' target='_blank'><span class='product-name'>" + this.name + "</span><span class='product-price'>$" + this.price + "</span></a></div>";
	};

	this.printFour = function () {
		return "<div class='gallery-product filter " + this.subtype + "'><img src='" + this.image[4] + "' class='img-responsive'><a onclick='newProductPage(" + this.id + ")'><span class='product-name'>" + this.name + "</span><span class='product-price'>$" + this.price + "</span></a></div>";
	};

	this.printNewPage = function () {
		if (this.type == "paper" || this.type == "stationery") {
			var pretable = ["Item", "Type", "Version", "Size", "Reference", "Brand", "Material", "Page Count", "Care", "Other"];
		}
		if (this.type == "drawing") {
			var pretable = ["Item", "Type", "Version", "Weight", "Reference", "Brand", "Material", "Number of Colors", "Care", "Other"];
		}
		if (this.type == "writing") {
			var pretable = ["Item", "Writing Type", "Version", "Size", "Reference", "Ink Color", "Trims Metal", "Material", "Cap material", "Nib material"];
		}
		var strVar = "";
		strVar += "<!doctype html>";
		strVar += "<html>";
		strVar += "<head>";
		strVar += "<meta charset=\"utf-8\">";
		strVar += "<title>Ella - Beautiful Creations<\/title>";
		strVar += "<link href=\"css\/DropdownMenuLaptop.css\" type=\"text\/css\" rel=\"stylesheet\" media=\"screen and (min-width:768px)\"\/>";
		strVar += "<link href=\"css\/DropdownMenuMobile.css\" type=\"text\/css\" rel=\"stylesheet\" media=\"screen and (max-width:768px)\"\/>";
		strVar += "<link href=\"css\/HomeLaptop.css\" type=\"text\/css\" rel=\"stylesheet\" media=\"screen and (min-width:768px)\"\/>";
		strVar += "<link href=\"css\/HomeMobile.css\" type=\"text\/css\" rel=\"stylesheet\" media=\"screen and (max-width:768px)\"\/>";
		strVar += "<link rel=\"stylesheet\" href=\"resource\/stylesheet.css\" type=\"text\/css\" charset=\"utf-8\" \/>";
		strVar += "<link rel=\"stylesheet\" href=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/font-awesome\/4.7.0\/css\/font-awesome.min.css\">";
		strVar += "<script src=\"js\/jquery-3.2.1.min.js\"><\/script>";
		strVar += "<script src=\"js\/Item.js\"><\/script>";
		strVar += "<script src=\"js\/BigProduct.js\"><\/script>";
		strVar += "<script src=\"js\/Utilities.js\"><\/script>";
		strVar += "<script src=\"js\/Filter.js\"><\/script>";
		strVar += "<script src=\"js\/ValidateForm.js\"><\/script>";
		strVar += "<script src=\"js\/PrintCart.js\"><\/script>";
		strVar += "<script src=\"js\/EngravingText.js\"><\/script>";
		strVar += "<script src=\"js\/MagnifierPic.js\"><\/script>";
		strVar += "<script>";
		strVar += "<\/script>";
		strVar += "<style>";
		strVar += "<\/style>";
		strVar += "<\/head>";
		strVar += "";
		strVar += "<body>";
		strVar += "<!--the beginning of the page (above the banner image)-->";
		strVar += "  	<div class=\"container-smallport\"><button class=\"smallport-dropdown\" onClick=\"showMenu()\"><\/button><\/div>";
		strVar += "<div id=\"small-menu\">";
		strVar += "	<ul id=\"s-menu\" class=\"menu\">";
		strVar += "	<li class=\"has-accordion1\">";
		strVar += "		<a class=\"click\" href=\"#\">Stationery<\/a>";
		strVar += "		<button id=\"accordion1\" onClick=\"showInner(1);\" class=\"accordion\">+<\/button>";
		strVar += "	<\/li>";
		strVar += "	<li class=\"inner-li1\"><a class=\"click\" href=\"Gallery-WritingInstruments.html\">Writing Instruments<\/a><\/li>";
		strVar += "	<li class=\"inner-li1\"><a class=\"click\" href=\"#\">Paper and Pad<\/a><\/li>";
		strVar += "	<li class=\"inner-li1\"><a class=\"click\" href=\"#\">Drawing Instruments<\/a><\/li>";
		strVar += "	<li class=\"inner-li1\"><a class=\"click\" href=\"#\">Design Sets<\/a><\/li>";
		strVar += "	<li>";
		strVar += "		<a class=\"click\" href=\"Blog.html\">Blog<\/a>";
		strVar += "	<\/li>";
		strVar += "	<li>";
		strVar += "		<a class=\"click\" href=\"AboutUs.html\">About<\/a>";
		strVar += "	<\/li>";
		strVar += "	<li>";
		strVar += "		<a class=\"click\" href=\"ContactUs.html\">Contact Us<\/a>";
		strVar += "	<\/li>";
		strVar += "<\/ul>";
		strVar += "<\/div>";
		strVar += "<div id=\"mini-top\">";
		strVar += "	<a href=\"#\">English (EN)<\/a>";
		strVar += "	<a href=\"Cart.html\">Cart<\/a>";
		strVar += "	<button id=\"search\"><img src=\"resource\/search2.png\" width=\"15\" height=\"15\" alt=\"\"\/><\/button>";
		strVar += "<\/div>";
		strVar += "<div id=\"modal-search\" class=\"modal\">";
		strVar += "    <div class=\"modal-content\">";
		strVar += "        <span class=\"close\">&times;<\/span>";
		strVar += "        <p class=\"search-title\">Search Product<\/p>";
		strVar += "        <p class=\"search-description\">Find our Beautiful Creations products<\/p>";
		strVar += "        <form action=\"\/action_page.php\">";
		strVar += "            <input type=\"search\" name=\"search\" placeholder=\"Search product\">";
		strVar += "            <input type=\"submit\" value=\"Find >\">";
		strVar += "        <\/form> ";
		strVar += "    <\/div>";
		strVar += "<\/div>";
		strVar += "<div id=\"header\">";
		strVar += "<!--	the logo\/brand name (click to go back to Homepage)-->";
		strVar += "	<a id=\"back-to-home-logo\" href=\"Home.html\">";
		strVar += "		<img src=\"resource\/logo4.png\" id=\"logo\" height=\"75\" alt=\"\"\/><br>";
		strVar += "	<\/a>";
		strVar += "<\/div>";
		strVar += "<div id=\"dropdown-menu\" class=\"banner-less\">";
		strVar += "  <ul class=\"menu\">";
		strVar += "	<li>";
		strVar += "		<a class=\"click\" href=\"#\">Stationery<\/a>";
		strVar += "		<ul class=\"submenu\">";
		strVar += "			<li><a href=\"Gallery-WritingInstruments.html\" class=\"smallclick\"><img class=\"icon-image\" src=\"resource\/pencil.png\" alt=\"\"\/><br>";
		strVar += "			Writing Instruments<\/a><\/li>";
		strVar += "			<li><a href=\"#\" class=\"smallclick\"><img class=\"icon-image\" src=\"resource\/paper.png\" alt=\"\"\/><br>";
		strVar += "			Paper and Pad<\/a><\/li>";
		strVar += "			<li><a href=\"#\" class=\"smallclick\"><img class=\"icon-image\" src=\"resource\/palette.png\" alt=\"\"\/><br>";
		strVar += "			Drawing Instruments<\/a><\/li>";
		strVar += "			<li><a href=\"#\" class=\"smallclick\"><img class=\"icon-image\" src=\"resource\/stationery2.png\" alt=\"\"\/><br>";
		strVar += "			Design Sets<\/a><\/li>";
		strVar += "		<\/ul>";
		strVar += "	<\/li>";
		strVar += "	<li>";
		strVar += "		<a class=\"click\" href=\"Blog.html\">Blog<\/a>";
		strVar += "	<\/li>";
		strVar += "	<li>";
		strVar += "		<a class=\"click\" href=\"AboutUs.html\">About<\/a>";
		strVar += "	<\/li>";
		strVar += "	<li>";
		strVar += "		<a class=\"click\" href=\"ContactUs.html\">Contact Us<\/a>";
		strVar += "	<\/li>";
		strVar += "<\/ul>";
		strVar += "<\/div>";
		strVar += "<!--";
		strVar += "FILL IN THE BLANKS";
		strVar += "-->";
		strVar += "<div class=\"product-all\">";
		strVar += "	<div class=\"product-big\">";
		strVar += "	  <div class=\"product-name\">";
		strVar += "	  	<span>" + this.name + "<\/span>";
		strVar += "	  	<span>&#9734;<\/span>";
		strVar += "	  	<span>" + this.pretitle + "<\/span>";
		strVar += "	  <\/div>";
		strVar += "		<div class=\"product-showcase\">";
		strVar += "			<span class=\"engraving-text\"><\/span>";
		strVar += "		<!-- This is the magnifying glass which will contain the original\/large version -->";
		strVar += "			<div class=\"large-showcase\"><\/div>";
		strVar += "		<!-- This is the small image -->";
		strVar += "			<img class=\"small-showcase square-pic-showcase\" src=\"" + this.image[0] + "\"\/>";
		strVar += "		<\/div>";
		strVar += "		<div class=\"product-info\">";
		strVar += "			<div class=\"product-info-col1\">";
		strVar += "				<div class=\"product-description\">";
		strVar += "					<span>" + this.name + "<\/span>";
		strVar += "					<p>" + this.description;
		strVar += "					<\/p>";
		strVar += "				<\/div>";
		strVar += "				<div class=\"product-selected-color\">";
		strVar += "					<span>Select Wrapping Color<\/span>";
		strVar += "					<span class=\"color-pick ivory\" data-filter=\"resource\/showcasefountain1.png\"><\/span>";
		strVar += "					<span class=\"color-pick black\" data-filter=\"resource\/showcasefountain0.png\"><\/span>";
		strVar += "					<span class=\"color-pick gold\" data-filter=\"resource\/showcasefountain2.png\"><\/span>";
		strVar += "				<\/div>";
		strVar += "			<\/div>";
		strVar += "			<div class=\"product-info-col2\">";
		strVar += "				<div class=\"product-price\">$" + this.price.toFixed(2) + "<\/div>";
		strVar += "				<div class=\"product-add-engraving\">";
		strVar += "				<label><input class=\"engraving-checkbox\" type=\"checkbox\" value=\"value\" onchange=\"engrave(this)\">Add Name of Recipient? (+$1.00)<\/label>";
		strVar += "					<div class=\"engraving-details\">";
		strVar += "						<textarea class=\"engraving-message\" maxlength=\"20\" placeholder=\"Enter your message here.\"><\/textarea>";
		strVar += "						<span class=\"engraving-countdown\">20 characters remaining.<\/span>";
		strVar += "						<label><input name=\"fontbox\" class=\"fontbox\" type=\"radio\" value=\"script\">Script<\/label>";
		strVar += "						<label><input name=\"fontbox\" class=\"fontbox\" type=\"radio\" value=\"serif\">Serif<\/label>";
		strVar += "						<label><input name=\"fontbox\" class=\"fontbox\" type=\"radio\" value=\"sans\" checked>Sans serif<\/label>";
		strVar += "					<\/div>";
		strVar += "			<\/div>";
		strVar += "			<div class=\"product-quantity-cart\">";
		strVar += "					<button class=\"quantity-button\" id=\"dec4\" onClick=\"decrease(" + this.id + ")\">-<\/button>";
		var qtyStr = "qtybox" + this.id;
		strVar += "					<input type=\"number\" class=\"quantity quantity-number\" value=\"1\" step=\"1\" min=\"0\" max=\"100\" id=" + qtyStr + " size=\"4\" \/>";
		strVar += "					<button class=\"quantity-button\" id=\"inc4\" onClick=\"increase(" + this.id + ")\">+<\/button>";
		strVar += "			<\/div>";
		strVar += "			<button class=\"put-in-cart\" onclick='addToCart(" + this.id + ")'>Add to Cart<\/button>";
		strVar += "			<span class='add-status' id='status" + this.id + "'><\/span>";
		strVar += "			<\/div>";
		strVar += "";
		strVar += "		<\/div>";
		strVar += "	<div class=\"product-info\">";
		strVar += "		<div class=\"one-third-column\">";
		strVar += "	    	<img src=\"" + this.image[1] + "\" alt=\"\"\/>";
		strVar += "	    	<span>";
		strVar += "	    		The Finish";
		strVar += "	    	<\/span>";
		strVar += "	    	<span>";
		strVar += this.subdes[0];
		strVar += "	    	<\/span>";
		strVar += "	    <\/div>		";
		strVar += "	    <div class=\"one-third-column\">";
		strVar += "	    	<img src=\"" + this.image[2] + "\" alt=\"\"\/>";
		strVar += "	    	<span>";
		strVar += "	    		The Nib";
		strVar += "	    	<\/span>";
		strVar += "	    	<span>";
		strVar += this.subdes[1];
		strVar += "	    	<\/span>";
		strVar += "	    <\/div>		";
		strVar += "	    <div class=\"one-third-column\">";
		strVar += "	    	<img src=\"" + this.image[3] + "\" alt=\"\"\/>";
		strVar += "	    	<span>";
		strVar += "	    		The Clip";
		strVar += "	    	<\/span>";
		strVar += "	    	<span>";
		strVar += this.subdes[2];
		strVar += "	    	<\/span>";
		strVar += "	    <\/div>";
		strVar += "	<\/div>";
		strVar += "	<\/div>";
		strVar += "	<div class=\"product-info\">";
		strVar += "		<span class=\"section-title\">Features<\/span>";
		strVar += "		<table class=\"product-info-table\">";
		strVar += "			<tr>";
		strVar += "				<th>" + pretable[0] + "<\/th>";
		strVar += "				<td>" + this.details[0] + "<\/td>";
		strVar += "			<\/tr>			";
		strVar += "			<tr>";
		strVar += "				<th>" + pretable[1] + "<\/th>";
		strVar += "				<td>" + this.details[1] + "<\/td>";
		strVar += "			<\/tr>			";
		strVar += "			<tr>";
		strVar += "				<th>" + pretable[2] + "<\/th>";
		strVar += "				<td>" + this.details[2] + "<\/td>";
		strVar += "			<\/tr>			";
		strVar += "			<tr>";
		strVar += "				<th>" + pretable[3] + "<\/th>";
		strVar += "				<td>" + this.details[3] + "<\/td>";
		strVar += "			<\/tr>			";
		strVar += "			<tr>";
		strVar += "				<th>" + pretable[4] + "<\/th>";
		strVar += "				<td>" + this.details[4] + "<\/td>";
		strVar += "			<\/tr>";
		strVar += "		<\/table>		";
		strVar += "		<div class=\"half-separator\"><\/div>";
		strVar += "		<div class=\"half-separator\"><\/div>";
		strVar += "		<table class=\"product-info-table\">";
		strVar += "			<tr>";
		strVar += "				<th>" + pretable[5] + "<\/th>";
		strVar += "				<td>" + this.details[5] + "<\/td>";
		strVar += "			<\/tr>			";
		strVar += "			<tr>";
		strVar += "				<th>" + pretable[6] + "<\/th>";
		strVar += "				<td>" + this.details[6] + "<\/td>";
		strVar += "			<\/tr>			";
		strVar += "			<tr>";
		strVar += "				<th>" + pretable[7] + "<\/th>";
		strVar += "				<td>" + this.details[7] + "<\/td>";
		strVar += "			<\/tr>			";
		strVar += "			<tr>";
		strVar += "				<th>" + pretable[8] + "<\/th>";
		strVar += "				<td>" + this.details[8] + "<\/td>";
		strVar += "			<\/tr>			";
		strVar += "			<tr>";
		strVar += "				<th>" + pretable[9] + "<\/th>";
		strVar += "				<td>" + this.details[9] + "<\/td>";
		strVar += "			<\/tr>";
		strVar += "		<\/table>";
		strVar += "	<\/div>";
		strVar += "	<div class=\"product-big\">";
		strVar += "	";
		strVar += "	<\/div>";
		strVar += "<\/div>";
		strVar += "";
		strVar += "";
		strVar += "<!--";
		strVar += "END OF BLANKS";
		strVar += "-->";
		strVar += "";
		strVar += "<div id=\"bottom\">";
		strVar += "	<div class=\"bottom1\"><img src=\"resource\/logo4.png\" height=\"80\" alt=\"\"\/><\/div>";
		strVar += "	<div class=\"third2\">";
		strVar += "	<span>Selected Dealers<\/span>";
		strVar += "	  <a href=\"#\" class=\"bottom-button\">Find a store<\/a>";
		strVar += "	<\/div>";
		strVar += "	<div class=\"third2\">";
		strVar += "	  <span>Contact<\/span>";
		strVar += "	  <a href=\"ContactUs.html\">Contact Us<\/a>";
		strVar += "	<\/div>";
		strVar += "	<div class=\"third2\">";
		strVar += "	  <span>Pen of the Year<\/span>";
		strVar += "	  <a href=\"#\" class=\"bottom-button\">Registration<\/a>";
		strVar += "	<\/div>";
		strVar += "	<hr width=\"100%\">";
		strVar += "	<div id=\"lean-left\">";
		strVar += "		<span>© Ella- Beautiful Creations 2017<\/span>";
		strVar += "	  	<a href=\"#\">Presses<\/a>";
		strVar += "	    <a href=\"#\">Service Address<\/a>";
		strVar += "	    <a href=\"#\">Imprint<\/a>";
		strVar += "	<\/div>";
		strVar += "	<div id=\"lean-right\">";
		strVar += "		<span>Follows us: <\/span>";
		strVar += "		<!-- Add font awesome icons -->";
		strVar += "		<a href=\"#\" class=\"fa fa-facebook\"><\/a>";
		strVar += "		<a href=\"#\" class=\"fa fa-twitter\"><\/a>";
		strVar += "	<\/div>";
		strVar += "<\/div>";
		strVar += "<\/body>";
		strVar += "<\/html>";
		strVar += "<script>";
		strVar += "\/\/ Get the modal";
		strVar += "    var modal = document.getElementById(\"modal-search\");";
		strVar += "\/\/ Get the button that opens the modal";
		strVar += "    var btn = document.getElementById(\"search\");";
		strVar += "";
		strVar += "\/\/ Get the <span> element that closes the modal";
		strVar += "    var span = document.getElementsByClassName(\"close\")[0];";
		strVar += "";
		strVar += "\/\/ When the user clicks the button, open the modal ";
		strVar += "    btn.onclick = function() {";
		strVar += "        modal.style.display = \"block\";";
		strVar += "    }";
		strVar += "";
		strVar += "    \/\/ When the user clicks on <span> (x), close the modal";
		strVar += "    span.onclick = function() {";
		strVar += "        modal.style.display = \"none\";";
		strVar += "    }";
		strVar += "";
		strVar += "\/\/ When the user clicks anywhere outside of the modal, close it";
		strVar += "    window.onclick = function(event) {";
		strVar += "        if (event.target == modal) {";
		strVar += "            modal.style.display = \"none\";";
		strVar += "        }";
		strVar += "    }";
		strVar += "<\/script>";

		return strVar;
	};


	this.printCartItem = function (num, qty) {
		var strVar = "";
		var dec = "dec" + num;
		var inc = "inc" + num;
		var qtybox = "qtybox" + num;
		var cartRow = "cartrow" + num;
		strVar += "			<tr id=" + cartRow + " class=\"item\">";
		strVar += "				<td class=\"remove-cart\"><span class=\"remove-button\" onClick=\"removeFromCart(" + num + ")\">x<\/span><\/td>				";
		strVar += "				<td class=\"pic-cart\"><img src=\"" + this.image[0] + "\" width=\"60\" height=\"60\" alt=\"\"\/><\/td>				";
		strVar += "				<td class=\"name-cart\"><a style='cursor:pointer' onclick='newProductPage(" + this.id + ")'>" + this.name + "<\/a><\/td>		";
		strVar += "				<td class=\"price-cart\">$" + this.price.toFixed(2) + "<\/td>	";
		strVar += "				<td class=\"quantity-cart\">";
		strVar += "					<button id=" + dec + " onClick=\"decrease(" + num + ")\">-<\/button>";
		strVar += "					<input type=\"number\" class=\"quantity\" value=\"" + qty + "\" step=\"1\" min=\"0\" max=\"100\" id=" + qtybox + " size=\"4\" \/>";
		strVar += "					<button id=" + inc + " onClick=\"increase(" + num + ")\">+<\/button>";
		strVar += "				<\/td>";
		strVar += "				<td class=\"total-cart\">$" + (qty * this.price).toFixed(2) + "<\/td>							";
		strVar += "			<\/tr>";
		return strVar;
	};
}

var productPaperArray = [];
var productDrawingArray = [];
var productStationeryArray = [];
var productWritingArray = [];

productPaperArray.push(new FullProduct(0, "Girl in Blue Dress Journal", 24.95, ["resource/notebook0.jpg", "resource/notebook01.jpg", "resource/notebook02.jpg", "resource/notebook03.jpg"], "paper", "notebook", "A Statement", "Record your thoughts and dreams or start your next novel in this fabulous journal. A stylish girl in a blue dress accented with gold glitter graces the cover.<br><br>A new line of classics with gorgeously illustrated covers by renowned stationery brand Rifle Paper Co.'s lead artist, Anna Bond.", ["Perfect for the handbag or the desktop, these three colorful notebooks feature foil-stamped covers and vintage-inspired interiors.", " The entire package is bound together with baker's twine.", "Gold glitter."], ["Girl in Blue Dress", "Notebook", "Standard", "6 in. x 8 1/2 in.", "841247", "Papyrus", "Paper", "288 pp.", "Instructions booklet", "Rounded corners"]));

productPaperArray.push(new FullProduct(1, "Pink Dress and Gems", 14.95, ["resource/notebook1.jpg", "resource/notebook11.jpg", "resource/notebook12.jpg", "resource/notebook13.jpg"], "paper", "notebook", "For Sisters", " The Lemome bullet notebook allows you to track all of your tasks, appointments, and goals all in one place. You can keep a gratitude log, track your workouts, meal plan, budget track, jot down ideas, write down wish lists, and so much more are waiting for your creating.", ["Featuring foil-stamped calligraphy on the cover and metallic ink throughout, this journal is the place for recording the boldest and most brilliant of ideas.", " The entire package is bound together with baker's twine.", "Pink and Butterflies. Soft glare-proof papers, protecting your eyes."], ["Pink Dress and Gems", "Notebook", "Deviant", "6 in. x 8 in.", "841249", "Papyrus", "Paper", "96 pp.", "Instructions booklet", "Sharp corners"]));

productPaperArray.push(new FullProduct(2, "Girl in Blue and Gems", 9.95, ["resource/notebook2.jpg", "resource/notebook21.jpg", "resource/notebook22.jpg", "resource/notebook23.jpg"], "paper", "notebook", "The Quietest of Determination", " The Lemome bullet notebook allows you to track all of your tasks, appointments, and goals all in one place. Jot down notes and to do lists in these fabulous notebooks. One features a girl in a stylish blue dress and the other an array of beautiful blue gems. Both are accented with blue glitter.", ["Featuring foil-stamped calligraphy on the cover and metallic ink throughout, this journal is the place for recording the boldest and most brilliant of ideas.", "Peter Pan Limited Edition Notebooks sparkle with the magic of this timeless children’s classic, inviting you to capture and note down your own inspiring journeys, stories and dreams. ", "Pink and Butterflies. Soft glare-proof papers, protecting your eyes."], ["Girl in Blue and Gems", "Notebook", "Standard, Deviant", "6 in. x 8 in.", "841250", "Papyrus", "Paper", "100 pp.", "Instructions booklet", "Rounded corners, waterproof paper"]));

productPaperArray.push(new FullProduct(3, "Desk Accessories & Stripes Mini Notebooks", 10.95, ["resource/notebook3.jpg", "resource/notebook31.jpg", "resource/notebook32.jpg", "resource/notebook33.jpg"], "paper", "notebook", "The Best Zebra", "The Classic Collection featuring bold new colors and blank pages just waiting to be filled with your ideas. Including all the characteristic elements of the legendary notebook: rounded corners, ivory pages, elastic closure, bookmark ribbon and expandable back pocket - enclosed within a colorful hard cover.", ["Bold new colors and blank pages just waiting to be filled with your ideas.", "Notebooks sparkle with the magic of this timeless children’s classic, inviting you to capture and note down your own inspiring journeys, stories and dreams. ", "Stands out in any crowd."], ["Desk Accessories & Stripes Mini Notebooks", "Notebook", "Standard, Deviant", "4 in. x 5 1/4 in.", "841251", "Papyrus", "Paper", "80 pp.", "Instructions booklet", "Rounded corners"]));

productPaperArray.push(new FullProduct(4, "Playful Notes Mini Notebooks", 9.95, ["resource/notebook4.jpg", "resource/notebook41.jpg", "resource/notebook42.jpg", "resource/notebook43.jpg"], "paper", "notebook", "More Useless Best Ideas.", "A series of paper tools covering a wide range of uses for the graphic arts and professions. The distinctive trait of this line is its ample choice of papers and formats. With its cardboard cover and sketch-grade paper, this product will house your sketches and designs, combining the fine elegance of a cahier with the functionality of an album.", ["Bold new colors and blank pages just waiting to be filled with your ideas.", "Jot down notes and to do lists in these darling notebooks. One features collection of office necessities and the other has stylish black watercolor stripes.", "All dreams must start here."], ["Playful Notes Mini Notebooks", "Notebook", "Standard, Deviant", "4 in. x 5 1/4 in.", "841252", "Papyrus", "Paper", "99 pp.", "Instructions booklet", "Rounded corners"]));


productPaperArray.push(new FullProduct(5, "Quilled Sunflowers Birthday Card", 12, ["resource/card0.jpg", "resource/card01.jpg", "resource/card02.jpg", "resource/card03.jpg"], "paper", "card", "Wishing you sunshine and happiness on this special day!", "Two cheerful sunflowers are depicted with the dimensional scrolls and curls of this luxurious birthday card created with quilled paper artwork.<br><br>Part of Calligraphuck’s Exquisite Expletive range, this A6 card (105 x 148.5mm) is letterpress printed with silver ink on Stephen Swiss White 330gsm.", ["Turn to the sunflowers that is the symbol of the justice.", "Spenceroni’s Wrapped Bundle includes one of each of the three wrapped cards: Cyan, Purple and Pink.", " 100% carbon neutral stock, and each card comes complete with a red envelope."], ["Quilled Sunflowers Birthday Card", "Card", "Standard, Deviant", "6 in. x 6 in.", "841253", "NIQUEA.D", "Quilled Paper", "01 pp.", "As instructed. Hand Cancel Recommended.", "Handle with care. Cello sleeve."]));

productPaperArray.push(new FullProduct(6, "Quilled Hummingbird Birthday Card", 12, ["resource/card1.jpg", "resource/card11.jpg", "resource/card12.jpg", "resource/card13.jpg"], "paper", "card", "May your birthday be filled with laughter, love and joy!", "Beautiful quilling artwork gives dimension to this luxurious birthday card depicting a red and green hummingbird as he drinks nectar from a flower.<br><br>Part of Calligraphuck’s Exquisite Expletive range, this A6 card (105 x 148.5mm) is letterpress printed with silver ink on Stephen Swiss White 330gsm.", ["May your birthday be filled with laughter, love and joy!", "Spenceroni’s Wrapped Bundle includes one of each of the three wrapped cards: Red, White and Pink.", " Spring green with no liner envelope."], ["Quilled Hummingbird Birthday Card", "Card", "Standard, Deviant", "6 in. x 6 in.", "841253", "NIQUEA.D", "Quilled Paper", "01 pp.", "As instructed. Hand Cancel Recommended.", "Handle with care. Cello sleeve."]));

productPaperArray.push(new FullProduct(7, "Because New York Blank Card", 10, ["resource/card2.jpg", "resource/card21.jpg", "resource/card22.jpg", "resource/card23.jpg"], "paper", "card", "because new York.", "Produced in collaboration with Nathan Nankervis, ‘Because New York’ is letterpress printed in fluorescent red ink and foil printed in a super fun bubble foil, on Colorplan Candy Pink.<br><br>The card is A6 (105 x 148.5mm), blank inside and comes complete with a bright yellow envelope, packaged in a protective plastic sleeve.", ["because new York.", "Spenceroni’s Wrapped Bundle includes one glittered process.", " White with no liner envelope."], ["Because New York Blank Card", "Card", "Standard, Deviant", "6 in. x 6 in.", "841253", "Verrier", "Paper", "1 card with corresponding envelope", "As instructed. Hand Cancel Recommended.", "Handle with care. Cello sleeve."]));

productPaperArray.push(new FullProduct(8, "Felt Pearl Cupcake Birthday Card", 7.95, ["resource/card3.jpg", "resource/card31.jpg", "resource/card32.jpg", "resource/card33.jpg"], "paper", "card", "Celebrating you is the sweetest thing", "Wish her the best day with this sweet card that features a felt cupcake accented with pearl beads and topped with shimmery sequins.<br><br>The card is blank inside and comes complete with a bright yellow envelope, packaged in a protective plastic sleeve.", ["Printed in red and foil printed in a super fun bubble foil, on Colorplan Lavender.", "Spenceroni’s Wrapped Bundle includes one glittered process.", "Soft pink with striped liner envelope."], ["Felt Pearl Cupcake Birthday Card", "Card", "Standard, Deviant", "5 1/2 in. x 5 1/2 in.", "841254", "Papyrus", "Paper", "1 card with corresponding envelope", "As instructed. Hand Cancel Recommended.", "Handle with care. Cello sleeve."]));

productPaperArray.push(new FullProduct(9, "Modern Wreath Christmas Card (For Mom & Dad)", 1.00, ["resource/card4.jpg", "resource/card41.jpg", "resource/card42.jpg", "resource/card43.jpg"], "paper", "card", "Thank you for everything.", "Wish them the best day with this sweet card that features a crimson wreath accented with pearl beads and topped with shimmery sequins.<br><br>Red diffraction foil and glitter add sparkle to the spherical berry and branch wreath featured on this holiday card for your loving parents. Flocking adds a soft tactile element.", ["Printed in red and foil printed in a super fun bubble foil, on Colorplan Lavender.", "Spenceroni’s Wrapped Bundle includes Flocking, foil treatment, glitter", "Soft pink with striped liner envelope."], ["Modern Wreath Christmas Card (For Mom & Dad)", "Card", "Standard, Deviant", "5 in. x 7 in.", "841256", "Papyrus", "Paper", "1 card with corresponding envelope", "As instructed. Hand Cancel Recommended.", "Handle with care. Cello sleeve."]));

productPaperArray.push(new FullProduct(10, "Animal Frames Baby Album", 17.95, ["resource/album0.jpg", "resource/album01.jpg", "resource/album02.jpg", "resource/album03.jpg"], "paper", "album", "hello baby", "This darling photo album is perfect for displaying all those adorable pictures of the little bundle of joy! Each page holds two standard photos and includes space to caption each precious memory.<br><br>Each card has a perforation along the top and is die cut so you can remove the pictures individually.", ["Printed in red and foil printed in a super fun bubble foil, on Colorplan Lavender.", "Australian-made, 100% carbon neutral stock and come complete with a kraft envelope, packaged in a protective plastic sleeve.", "Soft pink with striped liner envelope."], ["Animal Frames Baby Album", "Album", "Standard, Deviant", "9 1/2 in. x 8 7/8 in.", "841255", "Paper Destiny", "Paper", "100 pp.", "As instructed. Hand Cancel Recommended.", "1 photo album. Handle with care."]));


productPaperArray.push(new FullProduct(11, "Binky & Bubbles Hello Baby Girl", 17.95, ["resource/album1.jpg", "resource/album11.jpg", "resource/album12.jpg", "resource/album13.jpg"], "paper", "album", "hello BABY", "This darling album features a whimsical cover and a pink grosgrain ribbon to keep closed. Holding 80 6x4 photos, this album is perfect for displaying all those adorable photos of your little bundle of joy.<br><br>Just fill in the plaque on the front and write your message on the inside.", ["Printed in red and foil printed in a super fun bubble foil, on Colorplan Lavender.", "Australian-made, 100% carbon neutral stock and come complete with a kraft envelope, packaged in a protective plastic sleeve.", "Soft pink with striped liner envelope."], ["Binky & Bubbles Hello Baby Girl", "Album", "Standard, Deviant", "9 in. x 8 1/2 in. x 1 in.", "841257", "Paper Destiny", "Paper", "20 pp.", "As instructed. Gently slide the pictures in the wrapper.", "1 photo album. Handle with care."]));

productPaperArray.push(new FullProduct(12, "Binky & Bubbles Hello Baby Boy", 24.95, ["resource/album2.jpg", "resource/album21.jpg", "resource/album22.jpg", "resource/album23.jpg"], "paper", "album", "hello BABY", "This darling album features a whimsical cover and a soft blue grosgrain ribbon to keep closed. Holding 80 6x4 photos, this album is perfect for displaying all those adorable photos of your little bundle of joy.<br><br>Just fill in the plaque on the front and write your message on the inside.", ["Printed in red and foil printed in a super fun bubble foil, on Colorplan Lavender.", "Australian-made, 100% carbon neutral stock and come complete with a kraft envelope, packaged in a protective plastic sleeve.", "Soft pink with striped liner envelope."], ["Binky & Bubbles Hello Baby Boy", "Album", "Standard, Deviant", "9 in. x 8 1/2 in. x 1 in.", "841257", "Paper Destiny", "Paper", "20 pp.", "Gently slide the pictures in the wrapper.", "1 photo album. Handle with care."]));

productPaperArray.push(new FullProduct(13, "True Love Photo Album", 19.95, ["resource/album3.jpg", "resource/album31.jpg", "resource/album32.jpg", "resource/album33.jpg"], "paper", "album", "This is what true love looks like.", "Create a lasting memory and keep your favorite photos of your wedding day in this beautiful album that shimmers with gold foil accents and tied with a lovely powder blue ribbon. Each page hold two 4 in. x 6 in. photos.<br><br>Just fill in the plaque on the front and write your message on the inside.", ["Printed in red and foil printed in a super fun bubble foil, on Colorplan Lavender.", "Australian-made, 100% carbon neutral stock and come complete with a kraft envelope, packaged in a protective plastic sleeve.", "Soft pink with striped liner envelope."], ["Binky & Bubbles Hello Baby Boy", "Album", "Standard, Deviant", "9 in. x 8 1/2 in. x 1 in.", "841257", "Paper Destiny", "Paper", "20 pp.", "Gently slide the pictures in the wrapper.", "1 photo album. Handle with care."]));


productDrawingArray.push(new FullProduct(14, "Grumbacher Pre-Tested Professional Oil Colors", 59.95, ["resource/paint0.jpg", "resource/paint01.jpg", "resource/paint02.jpg", "resource/paint03.jpg"], "drawing", "paint", "A splash of life in your paintings.", "Grumbacher Professional Pre Tested Oil Paints- Everything Grumbacher makes is tested again and again at every stage of its existence, which inspired the name Pre-Tested®. Grumbacher's time-proven formulas are finely tuned through independent laboratory tests as well as hands-on trials by professional artists.<br><br>Pre-Tested® is Grumbacher's flagship. It's the product that represents the way they do business: with care, precision, and attention to detail. On a more specific level, it means simply the finest pigments the world can offer, milled in select alkali-refined linseed oil for the professional artist.", ["Single pigments make up the majority of the colors.", "Reformulated cadmiums for purer and stronger colors. Excellent adhesion and superior tinting strength.", "Optimal color development. Outstanding working properties."], ["Grumbacher Pre-Tested Professional Oil Colors", "Oil Color", "Standard, Deviant", "18 lbs.", "841260", "Paper Grumbacher", "Oil", "128 colors.", "Mix in a great amount of water.", "Handle with care."]));

productDrawingArray.push(new FullProduct(15, "Winsor & Newton Artists Oilbar Sets", 75.50, ["resource/paint1.jpg", "resource/paint11.jpg", "resource/paint12.jpg", "resource/paint13.jpg"], "drawing", "paint", "Convenient sets of newly reformulated oil paints in stick form!", "Winsor & Newton OILBARs are solid oil paint in stick form for drawing and painting. Made from pure pigments and a blend of refined oils and waxes, OILBARs work smoothly on your canvas or primed paper surface. They are completely compatible with tube oil paints as well as alkyds, oil mediums, varnishes and thinners.<br><br>OILBARs have been recently reformulated to be softer and more versatile, and will dry to the touch in just 2 to 7 days. Try this fun, expressive and immediate painting medium with these well balanced and convenient sets, great for travel and field painting!", ["6 Color Set - Includes Cadmium Yellow Light, Cadmium Red Medium, French Ultramarine, Ivory Black, Titanium White and Colorless Blender in 50ml bars.", "12 Color Set - Includes Cadmium Yellow Light, Cadmium Red Medium, Permanent Alizarin Crimson, French Ultramarine, Cerulean Blue Hue, Winsor Green (Yellow Shade), etc. in 50ml bars.", "Optimal color development. Outstanding working properties."], ["Winsor & Newton Artists Oilbar Sets", "Oil Color", "Standard, Deviant", "18 lbs.", "841260", "Winsor & Newton", "Oil", "12 colors.", "Mix in a small amount of water.", "Handle with care."]));

productDrawingArray.push(new FullProduct(16, "Sennelier Extra Fine Artists Oil Colors", 46, ["resource/paint2.jpg", "resource/paint21.jpg", "resource/paint22.jpg", "resource/paint23.jpg"], "drawing", "paint", "A New Generation Of Oils!", "Today, Sennelier's classic palette is expanding with 50 new, original shades that encompass contemporary trends and tastes. These colours, still as smooth and luminous as ever, offer an updated texture with firmer body to accommodate the requirements of 21st century artists.<br><br>Sennelier proudly introduces the next generation of oils, a collection of professional, extra-fine colours that reinvents your palette and redefines quality.", ["40ml, 200ml and 500ml sizes. Improved 'buttery' consistency", "Reformulated cadmiums for purer and stronger colors. 144 luminous colors.", "Optimal color development. Uses non-yellowing Safflower Oil."], ["Sennelier Extra Fine Artists Oil Colors", "Oil Color", "Deviant", "18 lbs.", "841261", "Sennelier", "Oil", "144 colors.", "Store product in your fridge at all times.", "Best for entry level artists."]));

productDrawingArray.push(new FullProduct(17, "Winsor & Newton Artists Acrylics", 15.5, ["resource/paint3.jpg", "resource/paint31.jpg", "resource/paint32.jpg", "resource/paint33.jpg"], "drawing", "paint", "Premium Grade Professional Acrylics.", "For all serious amateur and professional acrylic artists, premium grade Winsor & Newton Artists' Acrylic is the first and only acrylic to offer the clearest resin for no colour shift, the highest pigment load for brilliant colours, and the most single pigment colours for the cleanest mixing, backed by 175 years of colour-making expertise.", ["Single pigments make up the majority of the colors.", "Shorter, similar to oil color. Excellent brush stroke retention.", "High permanence rating. Unsurpassed tinting strength."], ["Winsor & Newton Artists Acrylics", "Acrylic", "Standard, Deviant", "5 lbs.", "841262", "Winsor & Newton", "Oil", "10 colors.", "Do not mix this with wine.", "Professionals only."]));

productDrawingArray.push(new FullProduct(18, "Michael Harding Artists' Oil Colours", 101.25, ["resource/paint4.jpg", "resource/paint41.jpg", "resource/paint42.jpg", "resource/paint43.jpg"], "drawing", "paint", "'They're changing my life!!", "Warning - these Professional Oil Paints are highly addictive! Over 30 years ago, painter Michael Harding set out for perfection in a line of handmade oil colors. Today, Michael Artists Handmade Harding Oil Colors are a leader in the professional fine art supply industry!<br><br>Harding’s dedication to using only the highest pigment loads and pure ingredients (without the use of artificial driers, extenders, or fillers) gives artists working qualities unlike any other oils, making their work stand out in a room full of paintings.", ["Exquisitely Handmade Oil Colors. Highest, most brilliant pigment load.", "No added driers, fillers, or extenders. Highest lightfastness ratings", "High permanence rating. Unsurpassed tinting strength."], ["Michael Harding Artists' Oil Colours", "Oil Color", "Standard, Deviant", "15 lbs.", "841263", "Michael Harding", "Oil", "100 colors.", "Mix with French wine every 3 months.", "Perfect for Professional Oil Painters"]));

productDrawingArray.push(new FullProduct(19, "The Edge All Media Cotton Deluxe", 5.25, ["resource/canvas0.jpg", "resource/canvas01.jpg", "resource/canvas02.jpg", "resource/canvas03.jpg"], "drawing", "canvas", "Professional Stretched Cotton Canvas With Four Paintable Edges", "Long favored with oil and acrylic painters, The Edge All Media Cotton Canvas is known for its’ tuck-n-roll style construction, providing beautifully clean, painted edges. Featuring a lovely, medium-toothed surface, the beefy 14oz. primed weight makes for a sturdy surface for all painting styles, even mixed media. Creative Mark’s professional-quality white acrylic primer helps maintain color richness and brilliancy, while providing excellent adhesion.", ["Triple-acrylic, archival priming. Medium tooth surface.", "No added driers, fillers, or extenders. Highest lightfastness ratings", "Known for its’ tuck-n-roll style construction."], ["The Edge All Media Cotton Deluxe ", "Medium Canvas", "Standard", "14 lbs.", "841264", "Edge All", "100% cotton", "1 color.", "No contact with moisture.", "Excellent protection for canvas"]));

productDrawingArray.push(new FullProduct(20, "Raphael Premium Archival Oil Primed Linen Panels", 38.75, ["resource/canvas1.jpg", "resource/canvas11.jpg", "resource/canvas12.jpg", "resource/canvas13.jpg"], "drawing", "canvas", "A Surface The Paint Can Caress", "Holding the finished canvas in your hand, the primed surface feels almost buttery and the linen underneath is smooth and incredibly uniform − hence providing the underlying cause for such a wonderful master-quality product. Handmade in Italy, Raphael Premium Archival Oil Primed Linen Panels surface is non-absorbant, allowing the color to sit up on the surface. <br><br>The depth is created by the refractive qualities of the oil which enhance the natural tendencies of the pigment. Raphael has just enough tooth to keep the surface receptive to hold initial layers of paint while they dry and bond with the oil surface.", ["Triple-acrylic, archival priming. Medium tooth surface.", "3/8' Thickness Fine weave, 100% linen.", "Known for its’ tuck-n-roll style construction."], ["Raphael Premium Archival", "Medium Canvas", "Standard", "1 lbs.", "841265", "Raphael", "100% linen", "1 color.", "No contact with moisture.", "Excellent protection for canvas"]));

productDrawingArray.push(new FullProduct(21, "Ampersand Museum Series Gessobord", 25, ["resource/canvas2.jpg", "resource/canvas21.jpg", "resource/canvas22.jpg", "resource/canvas23.jpg"], "drawing", "canvas", "The Most Trusted Pre-Gessoed Wood Panel", "The most trusted pre-gessoed wood panel by artists for their work. The superior, professional quality acrylic gesso ground does not dull colors, and the wonderful lightly sanded surface provides exceptional paint adhesion and brush control. The bright titanium white ground makes colors pop, or can easily be tinted with any ground color of choice. Just unwrap and paint, no additional priming needed!", ["Choose from 3/4', 1.5'' and 2' Deep Cradled Panels, all made in the USA", "Art Shadowboxes featuring interior Gessobord are set in 2” deep, cradled frames.", "Ideal for thin glazing, alla prima, and een impasto."], ["Ampersand Museum Series Gessobord", "Medium Canvas", "Standard", "25 lbs.", "841266", "Ampersand", "Pre-gessoed wood panel", "1 color.", "No contact with moisture.", "Superior, professional quality"]));

productDrawingArray.push(new FullProduct(22, "Practica Economy Black Stretched Canvas", 49.99, ["resource/canvas32.jpg", "resource/canvas31.jpg", "resource/canvas3.jpg", "resource/canvas33.jpg"], "drawing", "canvas", "Black Stretched Canvas Primed For Originality!", "Traditionally, Practica Stretched Canvases have been the ideal mid-range product between students' canvas panels and professional artists' stretched canvas. This standard holds true with Practica Black; Practica's new alternative in stretched canvas art!<br><br>Practica Black is the new benchmark for artists who want to eliminate the step of painting their white canvases with black primer.", ["Stretched 100% cotton canvas. Finished with acid-free Black primer", "Sold in 2-packs or boxes of ten 2-packs (20 canvases total)", "Perfect For: Artists seeking creative variation"], ["The Edge All Media Cotton Deluxe ", "Medium Canvas", "Standard", "14 lbs.", "841267", "Practica", "100% cotton", "1 color.", "No contact with moisture.", "5/8' Depth"]));

productDrawingArray.push(new FullProduct(23, "Creative Mark Pro Stroke Powercryl Ultimate", 59.99, ["resource/brush0.jpg", "resource/brush01.jpg", "resource/brush02.jpg", "resource/brush03.jpg"], "drawing", "brush", "The Ultimate In Acrylic Brushes!", "The search for the perfect acrylic brush is over! Pro Stroke Powercryl Ultimate Acrylic Brushes can be used with all types of acrylics, from fluid to extra-heavy bodied acrylics! The secret is Powercryl’s proprietary combination of 3 separate diameters of synthetic hair filament.The combination gives Powercryl a silky smooth feel, good absorbency, superb structural ability, and excellent rigidity.", ["3 diameters synthetic filament hair. Glazing to heavy impasto techniques", "Crisp brush edges & fine points", "Perfect For: Use with any acrylic paint or use with water soluble oils"], ["Creative Mark Pro Stroke Powercryl", "Acrylic Brush", "Standard", "2 lbs.", "841267", "Creative Mark", "100% cotton", "5 colors.", "Wash carefully after usage.", "5/8' Depth"]));

productDrawingArray.push(new FullProduct(24, "Beste Finest Golden Taklon Hair Brushes", 18.5, ["resource/brush1.jpg", "resource/brush11.jpg", "resource/brush12.jpg", "resource/brush13.jpg"], "drawing", "brush", "The Bristles That Bounce Back Every Time!", "Introducing Beste™ Finest Golden Taklon Brushes from Creative Mark. As an artist, you depend on your paint brush to perform strokes in a reliable manner. After all, your paint brush helps you express your creativity, and no one needs a low quality brush to cramp their artistic style. It's time you reached for a brush that not only feels good in your hand, but keeps its working characteristics painting session after painting session.", ["Multi diameter Golden Taklon hair. Keeps its working characteristics", "Crisp brush edges & fine points", "Perfect For: Use with any acrylic paint or use with water soluble oils"], ["Beste Finest Golden Taklon Hair", "Acrylic Brush", "Standard", "2 lbs.", "841268", "Beste", "100% cotton", "5 colors.", "Wash carefully after usage.", "Feels good in your hand"]));


productDrawingArray.push(new FullProduct(25, "Robert Simmons Titanium Brushes", 30, ["resource/brush2.jpg", "resource/brush21.jpg", "resource/brush22.jpg", "resource/brush23.jpg"], "drawing", "brush", "Each Robert Simmons brush comes with a LIFETIME GUARANTEE!", "This state-of-the-art, custom formulated, stiff \"synthetic bristle\" is a unique blend of varying filament thicknesses which are all incorporated with Robert Simmons' special tapering techniques. Titanium brushes are extremely durable and designed for high performance use with oil and all types of acrylic, especially heavy bodied acrylic.", ["A special 'interlocked' process retains its shape and affords precise stroke control.", "The Titanium series combines the resilience and spring of the best interlocked bristle brushes.", "Perfect For: Use with any acrylic paint or use with water soluble oils"], ["Robert Simmons Titanium Brushes", "Titanium Brush", "Standard", "1 lbs.", "841269", "Robert Simmons", "100% cotton", "5 colors.", "Wash carefully after usage.", "Strong even when wet."]));


productDrawingArray.push(new FullProduct(26, "Mimik High Performance Synthetic Squirrel Hair", 99.99, ["resource/brush3.jpg", "resource/brush31.jpg", "resource/brush33.jpg", "resource/brush32.jpg"], "drawing", "brush", "Animal-Friendly, Synthetic Hair Brushes!", "Creative Mark has partnered with a leading synthetic hair manufacturer to craft an animal-friendly brush with all the benefits of natural hair, and none of the drawbacks! Innovative synthetic blend imitates squirrel hair in its ability to hold copious amounts of color for large washes and color lay down, but also features the superb control, response and sharp edge so loved in Kolinsky sable brushes.", ["Innovative high quality synthetic hair blend mimics squirrel & Kolinsky sable", "Hold copious amounts of color for large washes and color lay down.", "Superb control, response and sharp edge so loved in Kolinsky sable brushes."], ["Mimik High Performance Synthetic", "Watercolor Brushes", "Standard", "2 lbs.", "841268", "Mimik", "100% cotton", "15 colors.", "Wash carefully after usage.", "Superb control, response and sharp edge"]));

productDrawingArray.push(new FullProduct(27, "Faber-Castell Red Range CLIC&GO Cups & Brushes", 35, ["resource/brush4.jpg", "resource/brush41.jpg", "resource/brush42.jpg", "resource/brush43.jpg"], "drawing", "brush", "The Fun And Versatile Collapsible Water Cup!", "Now your budding artist can paint with watercolors, watercolor pencils or tempera paints on the go! Faber-Castell introduces this easy to use and durable water cup, that also features a practical folding mechanism for quick storage and transport. When it's time to clean the inside of the cup, simply add it to your dishwasher load or wash by hand.<br><br>This cup is made with a non-slip material to ensure that it will not collapse accidentally. The wavy top isn't just for good looks, it can be used to rest a paint brush or watercolor pencil, keeping their workspace tidy!", ["Cups in Green /Brushes in Blue. Durable build.", "Hold copious amounts of color for large washes and color lay down.", "Easy to clean and Dishwasher-safe. Wavy top edge acts as a brush rest."], ["Faber-Castell Red Range", "Watercolor Brushes and Cups", "Standard", "2 lbs.", "841269", "Faber-Castell", "100% cotton", "2 colors.", "Wash carefully after usage.", "Easy storage and transport"]));

productStationeryArray.push(new FullProduct(28, "Vintage Cocktails Boxed Notes", 17.95, ["resource/stationerybox0.jpg", "resource/stationerybox01.jpg", "resource/stationerybox02.jpg", "resource/stationerybox03.jpg"], "stationery", "boxed", "The Most Elegant of Reminiscences.", "Send a quick hello or thank you with this set of note cards that includes four designs to choose from, each featuring a classic cocktail along with everything you need to create it yourself.", ["With 16 cards & envelopes in our Neon Dots Boxed Cards, you'll always have that perfect card to send sweet messages to family and friends. Durable build.", "Each card features foil and glitter. 16 cards/17 designed envelopes.", "Finished in foil accents and glitter for a sparkling touch to the season."], ["Vintage Cocktails Boxed Notes", "Boxed Notes", "Standard, white with gold liner", "5 lbs.", "841270", "Papyrus", "100% paper", "20 pp.", "Decorative box", "Easy storage and transport"]));

productStationeryArray.push(new FullProduct(29, "Floral Garland Thank You Boxed Notes", 19.95, ["resource/stationerybox1.jpg", "resource/stationerybox11.jpg", "resource/stationerybox12.jpg", "resource/stationerybox13.jpg"], "stationery", "boxed", "Flowers.", "Show your appreciation with this stunning card inspired by the couture fashion designs of Zang Toi. A gorgeous silver floral garland accents the bottom of this top fold card. Silver with white floral liner.", ["With 16 cards & envelopes in our Neon Dots Boxed Cards, you'll always have that perfect card to send sweet messages to family and friends. Durable build.", "Each card features foil and glitter. 16 cards/17 designed envelopes.", "Inside sentiment sends a wish to friends and loved ones for a holiday season filled with laughter, warmth and sweet memories."], ["Vintage Cocktails Boxed Notes", "Boxed Notes", "10 note cards with 10 lined envelopes", "5 lbs.", "841271", "Papyrus", "100% paper", "10 pp.", "Box with acetate lid", "Easy storage and transport"]));

productStationeryArray.push(new FullProduct(30, "Wild at Heart Assorted Boxed Notes", 15.95, ["resource/stationerybox2.jpg", "resource/stationerybox21.jpg", "resource/stationerybox22.jpg", "resource/stationerybox23.jpg"], "stationery", "boxed", "Thanks.", "Show your appreciation with this stunning card inspired by the couture fashion designs of Zang Toi. A gorgeous silver floral garland accents the bottom of this top fold card. Send your hellos or thank yous with these assorted bohemian style notes that anyone would love to receive!", ["With 16 cards & envelopes in our Neon Dots Boxed Cards, you'll always have that perfect card to send sweet messages to family and friends. Durable build.", "Each card features foil, glitter and ribbon. 8 cards/8 designed envelopes.", "Flower, tag and twine attached. These blossoms are intricate yet subdued, making a cheerful show of gratitude."], ["Wild at Heart", "Boxed Notes", "10 note cards with 10 lined envelopes", "5 lbs.", "841271", "Papyrus", "100% paper", "10 pp.", "Turquoise with pattern liner", "Keepsake flip-top box with magnetic closure"]));

productStationeryArray.push(new FullProduct(31, "Hearts on Watercolor Assorted Boxed Notes", 24.95, ["resource/stationerybox3.jpg", "resource/stationerybox31.jpg", "resource/stationerybox32.jpg", "resource/stationerybox33.jpg"], "stationery", "boxed", "You go on in my heart.", "Doodles of hearts, arrows and swirls adorn beautiful watercolor backgrounds on these gorgeous blank note cards. A great way to send some love to friends or family for any occasion.", ["With 16 cards & envelopes in our Neon Dots Boxed Cards, you'll always have that perfect card to send sweet messages to family and friends. Durable build.", "Each card features foil, glitter and ribbon. 8 cards/8 designed envelopes.", "Lime, aqua, pink or purple with heart doodle liners."], ["Hearts on Watercolor Assorted Boxed Notes", "Boxed Notes", "40 note cards with 40 lined envelopes", "7 in. x 3 1/4 in. x 4 1/2 in.", "841272", "Papyrus", "100% paper", "40 pp.", "Decorative caddy with acetate lid", "Decorative keepsake box"]));

productStationeryArray.push(new FullProduct(32, "My Wish for You Assorted Boxed Notes", 15.95, ["resource/stationerybox4.jpg", "resource/stationerybox41.jpg", "resource/stationerybox42.jpg", "resource/stationerybox43.jpg"], "stationery", "boxed", "My wish for you.", "This kit has everything you need to add a little magic to anyone's day! The set includes festive trifold cards in two beautiful designs and a small booklet filled with inspirations and gift-giving ideas. Send your hellos or thank yous with these assorted bohemian style notes that anyone would love to receive!", ["With 16 cards & envelopes in our Neon Dots Boxed Cards, you'll always have that perfect card to send sweet messages to family and friends. Durable build.", "Each card features foil, glitter and ribbon. 8 cards/8 designed envelopes.", "Flower, tag and twine attached. These blossoms are intricate yet subdued, making a cheerful show of gratitude."], ["My Wish for You Assorted", "Boxed Notes", "10 note cards with 10 lined envelopes", "4 7/8 in. x 6 in. (124 mm x 152 mm)", "841273", "Papyrus", "100% paper", "10 pp.", "Printed design with no liner", "Decorative keepsake box"]));

productStationeryArray.push(new FullProduct(33, "Mini Stationery Kit: Cute", 7.85, ["resource/case0.jpg", "resource/case01.jpg", "resource/case02.jpg", "resource/case03.jpg"], "stationery", "case", "Functionality in a purse.", "This kit has everything you need to add a little magic to anyone's day! Stationery lovers, this super cute kit was made just for you. Discover a mini stapler, tape dispenser, adhesive notes, highlighter and more so you always have the perfect tools to hand for your craft projects and assignments.", ["• Measurements (case): 65mm W x 90mm L x 30mm H / 2.56' x 3.54' x 1.18'. Comes in an adorable mini hard case.", "Kit includes: Mini Stapler, Tape Dispenser, 4 x mini adhesive notes, • Mini highlighter pen, Mini Scissors, Mini Stapler Refills", "Through beautiful Swedish design, we inspire and empower people the world over to live their best life every day."], ["Mini Stationery Kit: Cute", "Stationery Case", "As listed above.", "4 7/8 in. x 6 in. (124 mm x 152 mm)", "841274", "Kikki-K", "100% polymer.", "None.", "Safe for children 6 years old and above.", "Returns can be made within 2 weeks of purchase."]));

productStationeryArray.push(new FullProduct(34, "Mini Stationery Kit: World", 24.95, ["resource/case1.jpg", "resource/case11.jpg", "resource/case12.jpg", "resource/case13.jpg"], "stationery", "case", "Worldly cleanliness.", "Discover the perfect companion for the young or young at heart whilst travelling. This fun kit includes travel games, mini colouring pencils, activity book and sticker sheets.<br><br>Please note: Costs do not include duties and taxes. Overseas customs duties, foreign taxes or other fees that may be imposed are the responsibility of the customer.", ["• Measurements (case): 260mm W x 62mm D x 170mm D / 10.23' x 2.45' x 6.69'. Comes in an adorable mini hard case.", "Includes: Hard Card Box with Handle and lock, 1 x A5 Blank Notebook, 1 x Activity Notebook, Wooden Coloured Pencils, 1 x Sticker Sheets, 8 x Conversation Cards", "Through beautiful Swedish design, we inspire and empower people the world over to live their best life every day."], ["Mini Stationery Kit: World", "Stationery Case", "As listed above.", "4 7/8 in. x 6 in. (124 mm x 152 mm)", "841275", "Kikki-K", "100% polymer.", "None.", "Safe for children 10 years old and above.", "Returns possible within 2 weeks."]));

productStationeryArray.push(new FullProduct(35, "Mini Stationery Kit: Cute", 12.48, ["resource/case2.jpg", "resource/case21.jpg", "resource/case22.jpg", "resource/case23.jpg"], "stationery", "case", "Spend the day away.", "The perfect set of essentials for any cute stationery lover or as a fun activity set for young ones while travelling! Enjoy a welcome voucher when you sign up to be a kikki.K user.<br><br>Please note: Costs do not include duties and taxes. Overseas customs duties, foreign taxes or other fees that may be imposed are the responsibility of the customer.", ["• Measurements: 185mm W x 132mm L x 30mm H / 7.28' x 5.2' x 1.18'. Comes in an adorable mini hard case.", "Includes: PVC Box with Handle, Spiral bound notepad, 1 x Wooden Stamp + ink pad, 2 x Sticker Sheet, 5 x Mini Colouring Pencils", "Through beautiful Swedish design, we inspire and empower people the world over to live their best life every day."], ["Mini Stationery Kit: World", "Stationery Case", "As listed above.", "4 7/8 in. x 6 in. (124 mm x 152 mm)", "841276", "Kikki-K", "100% polymer.", "None.", "Safe for children 10 years old and above.", "Returns possible within 4 weeks."]));

productStationeryArray.push(new FullProduct(36, "Travel Stationery Kit: Refesber", 24.95, ["resource/case3.jpg", "resource/case31.jpg", "resource/case32.jpg", "resource/case33.jpg"], "stationery", "case", "Keep you alive on the move!", "Filled with all of your favourite stationery pieces, this Stationery Kit is perfect for keeping you entertained while on-the-move. Enjoy the games and exercises in the Activity Book and then use the Notebook to write, sketch and draw with the coloured pencils and stickers.<br><br>Please note: Costs do not include duties and taxes. Overseas customs duties, foreign taxes or other fees that may be imposed are the responsibility of the customer.", ["• Measurements (Box): 160mm L x 220mm W / 6.3' x 8.66' Comes in an adorable mini hard case.", "• PVC Box with Handle, 1 x A5 Blank Notebook, 1 x A5 Activity Notebook, 3 x Wooden Coloured Pencils, 1 x Sticker Sheets, 8 x Activity Cards", "Through beautiful Swedish design, we inspire and empower people the world over to live their best life every day."], ["Mini Stationery Kit: World", "Stationery Case", "As listed above.", "6.3' x 8.66'", "841277", "Kikki-K", "100% polymer.", "None.", "Safe for children 4 years old and above.", "Returns possible within 1 week."]));

productStationeryArray.push(new FullProduct(37, "#9 Ecruwhite Envelopes by Crane & Co.", 16, ["resource/gift0.jpg", "resource/gift01.jpg", "resource/gift02.jpg", "resource/gift03.jpg"], "stationery", "giftbox", "Marcel Schurman", "Create a quality image in the recipient's mind with these Ecruwhite Kid Finish #9 Embassy envelopes. 100% cotton paper.<br><br>Made in the USA, these ecru-toned envelopes make a great pairing with the Marcel Schurman flat correspondence cards..", ["• Measurements (Box): 160mm L x 220mm W / 6.3' x 8.66' Comes in an adorable mini hard case.", "Size: 5 3/4 in. x 7 11/16 in. (146 mm x 195 mm). Process: Plain. Envelope: Ecru", "Through beautiful Swedish design, we inspire and empower people the world over to live their best life every day."], ["#9 Ecruwhite Envelopes by Crane & Co.", "Giftbox", "As listed above.", "5 3/4 in. x 7 11/16 in.", "841278", "Crane & Co.", "Crane's 100% cotton paper.", "25 envelopes.", "vinyl box base, vinyl lid.", "Envelope: Ecru."]));

productStationeryArray.push(new FullProduct(38, "All-Occasion Assorted Notecard Set by Two Trick Pony", 18.95, ["resource/gift1.jpg", "resource/gift11.jpg", "resource/gift12.jpg", "resource/gift13.jpg"], "stationery", "giftbox", "A gift for every occasion.", "A collection of fun, hip, occasion-based cards that features the vintage-inspired art of stationery design duo Two Trick Pony. This all-new format includes twenty cards (10 designs repeating twice in 2 different colors) and 20 envelopes that come in a keepsake box with 5 tabs for each occasion:<ul><li>Happy Birthday</li><li>Congratulations</li><li>Thank You</li><li>Get Well / Sympathy</li><li>Thinking of You / Hello</li></ul>", ["Assorted messages. Contents: 20 cards with 20 envelopes", "20 Note cards, 10 designs repeating in 2 different colors", "Through beautiful Swedish design, we inspire and empower people the world over to live their best life every day."], ["All-Occasion Assorted Notecard Set", "Giftbox", "As listed above.", "3 3/4 in. x 5 in.", "841279", "Two Trick Pony", "100% polymer.", "None.", "Safe for children 4 years old and above.", "Gift box."]));

productStationeryArray.push(new FullProduct(39, "All Occasion Card Set by Kate Spade New York", 29.95, ["resource/gift2.jpg", "resource/gift21.jpg", "resource/gift22.jpg", "resource/gift23.jpg"], "stationery", "giftbox", "I hope you like this!", "Now you can be prepared for any card-necessary occasion! This All-Occasion Card Set from Kate Spade New York includes 15 cards total with 3 cards each of 5 different occasions including 'Just Because', Birthday, Congratulations, Thank You and Get Well.<br><br>Each card includes embossed details and lined envelopes.", ["Contents: 15 foldover cards and 15 corresponding envelopes. Size: 3 1/2 in. x 5 in. (89 mm x 127 mm)", "Process: Foil, letterpress. Envelope: White with colored liner", "Black polka dots set on white dress up this set of folded note cards from Kate Spade New York."], ["All Occasion Card Set by Kate Spade New York", "Giftbox", "As listed above.", "3 1/2 in. x 5 in.", "841280", "Kate Spade", "100% polymer.", "None.", "Envelope: White with green liner.", "Card giftbox."]));

productStationeryArray.push(new FullProduct(40, "Pretty Polaroid Assorted Note Cards", 14.95, ["resource/gift3.jpg", "resource/gift31.jpg", "resource/gift32.jpg", "resource/gift33.jpg"], "stationery", "giftbox", "A gift for every occasion.", "Each of the 20 different note cards is a Polaroid at its prettiest: dreamy, delicate, instantaneous yet timeless, and best when shared with friends and loved ones.<br><br>Now you can be prepared for any card-necessary occasion! Each card includes embossed details and lined envelopes.", ["Assorted messages. Contents: 20 assorted note cards with 20 envelopes", "20 Note cards, 10 designs repeating in 2 different colors", "Send a quick hello or thank you with this set of note cards. Choose from a beautifully patterned parrot and make them smile with your personal message inside."], ["Pretty Polaroid Assorted Note Cards", "Giftbox", "As listed above.", "4 1/4 in. x 5 1/4 in.", "841277", "Kikki-K", "100% polymer.", "None.", "Envelope: Turquoise with bubble liner", "Decorative box."]));

productStationeryArray.push(new FullProduct(41, "Patterned Birds Assorted Boxed Notes", 17.95, ["resource/gift4.jpg", "resource/gift41.jpg", "resource/gift42.jpg", "resource/gift43.jpg"], "stationery", "giftbox", "A gift for every occasion.", "Send a quick hello or thank you with this set of note cards. Choose from a beautifully patterned parrot, flamingo, peacock or owl and make them smile with your personal message inside.<br><br>Now you can be prepared for any card-necessary occasion! Each card includes embossed details and lined envelopes.", ["Process: Foil, letterpress. Envelope: White with colored liner", "20 Note cards, 10 designs repeating in 2 different colors", "Send a quick hello or thank you with this set of note cards. Choose from a beautifully patterned parrot and make them smile with your personal message inside."], ["Pretty Polaroid Assorted Note Cards", "Giftbox", "As listed above.", "5 3/4 in. x 7 3/4 in. x 2 in.", "841277", "Papyrus", "100% polymer.", "None.", "Envelope: Turquoise with bubble liner", "Decorative box."]));

productWritingArray.push(new FullProduct(42, "Lamy Al-Star", 46, ["resource/showcasefountain0.png", "resource/circle1.jpg", "resource/circle2.jpg", "resource/circle3.jpg", "resource/productfountain3.jpg"], "writing", "fountain", "A gift for every occasion.", "Elégance crosses the line into personal jewelry, beautifully. With a graceful flourish, its fine design will intrigue your creative spirit. Here, skills of the goldsmith and silversmith join forces with the jeweler for a truly precious collection. The best of Waterman know-how comes together in a luxurious pen that delights the senses. Express yourself with ultimate style.<ul><li>Cushioned refill for outstanding comfort in use</li><li>The cap can be placed on the other end of each writing implement</li></ul>", ["A resolutely elegant finish in deep black lacquer with shiny silver-plated trims for a jewel of refined taste and contemporary sophistication.", "A precious two-tone nib carved out of 18K solid gold highlighted with sparkling rhodium, master-stamped and elaborately engraved with a sophisticated décor.", "Silver plated."], ["Black ST", "Fountain Pen", "Standard", "Fine, Medium", "841278", "Blue", "ST.", "Lacquer.", "Lacquer.", "Dual-tone 18K Solid-gold."]));

productWritingArray.push(new FullProduct(43, "Exception Black Fountain", 18, ["resource/fountain0.png", "resource/fountain01.jpg", "resource/fountain02.jpg", "resource/fountain03.jpg", "resource/productfountain0.jpg"], "writing", "fountain", "Night & Day Platinum Fountain Pen ST.", "Exception is a phenomenon of technical ingenuity. Conceiving a prestigious pen of this shape to not only look good, work brilliantly, but also feel sublime in the hand, took immense skill. Today, when you write with an Exception, you can feel the inspiration flowing from its charismatic lines. A Waterman masterpiece that echoes the magic of inspiration.<ul><li>Cushioned refill for outstanding comfort in use</li><li>The cap can be placed on the other end of each writing implement</li></ul>", ["The unique guilloche-engraved platinum and deep rich black lacquer create an indisputable presence and modern appeal.", "A lavishly crafted rhodium-plated 18K solid gold nib is the defining symbol of WATERMAN's open spirit and unparalleled expertise.", "Silver plated."], ["Night & Day Platinum ST", "Fountain Pen", "Large", "Fine, Medium", "841279", "Blue", "ST.", "Lacquer.", "Lacquer.", "18K Solid Gold rhodium plated"]));

productWritingArray.push(new FullProduct(44, "Edson Black Fountain", 24.95, ["resource/fountain1.png", "resource/fountain11.jpg", "resource/fountain12.jpg", "resource/fountain13.jpg", "resource/productroller2.jpg"], "writing", "fountain", "Diamond Black Fountain Pen PT", "Edson is considered by many to be the pinnacle of pen design. Novelist Douglas Kennedy calls it 'the writer’s Ferrari'. Immortalizing the name of our founder, Lewis Edson Waterman, the Edson has also gained iconic status through its enviable reliability. Even at altitude, the ink flow is perfectly regulated. Definitely for great thinkers and high flyers.", ["The contemporary prestige of intense, transparent metallic black and rare platinum unite in a stunning arrangement of aesthetic sophistication.", "Infinite reliability and a unique inlaid form transforms this remarkable rhodium-plated 18K solid gold nib into a miracle of design and technology.", "Platinum covered."], ["Night & Day Platinum ST", "Fountain Pen", "Large", "Fine, Medium", "841280", "Blue", "ST.", "Precious Resin.", "Platinum covering.", "18K Solid Gold rhodium plated"]));

productWritingArray.push(new FullProduct(45, "Expert Deluxe White Fountain", 99.95, ["resource/fountain2.png", "resource/fountain21.jpg", "resource/fountain22.jpg", "resource/fountain23.jpg", "resource/productroller0.jpg"], "writing", "fountain", "Deluxe White Fountain Pen CT", "Expert brings smart Parisian styling to your business day. With its generous cigar-shaped silhouette and wealth of fine materials, it reveals that beneath your executive persona stirs a creative spirit. Let your vision and flair shine in your professional life with classic Waterman panache. Clients and colleagues will know you by your taste for sophistication.", ["Retro yet modern, vintage but contemporary... the Expert Deluxe White is a marriage of contrasts. A fashionable accessory, whose finely chiselled metal and timeless white lacquer creates a harmony on a completely new level.", "Made in stainless steel, its nib is both generous and sophisticated. It proudly bears a majestic W, a guarantee of quality and creativity.", "Palladium finish."], ["Deluxe White CT", "Fountain Pen", "Standard", "Fine, Medium", "841280", "Blue", "ST.", "Lacquer.", "Chiselled Palladium finish", "Stainless Steel"]));

productWritingArray.push(new FullProduct(46, "Hemisphere White Fountain", 38.5, ["resource/fountain3.png", "resource/fountain31.jpg", "resource/fountain32.jpg", "resource/fountain33.jpg", "resource/productfountain3.jpg"], "writing", "fountain", "White Fountain Pen CT", "Hémisphère makes each moment refreshingly elegant. In the spirit of Waterman innovation, it redefines timeless lines with a new focus on streamlined simplicity. Striking clean design and noble materials come together for a delightful writing experience to inspire your most creative thoughts. What better accessory for that lively imagination of yours?", ["The essential ‘à la mode’ look of pure, brilliant white lacquer and sleek, modern palladium plated trims, expresses a cool, crisp style.", "Comfortable and brilliantly designed, the expertly engraved nib is unmistakable in its writing experience.", "Palladium finish."], ["Hemisphere White CT", "Fountain Pen", "Standard", "Fine, Medium", "841280", "Mysterious Blue", "ST.", "Lacquer.", "Lacquer", "Stainless Steel"]));

productWritingArray.push(new FullProduct(47, "Expert Taupe Fountain", 39.5, ["resource/fountain4.png", "resource/fountain41.jpg", "resource/fountain42.jpg", "resource/fountain43.jpg", "resource/productballpoint3.jpg"], "writing", "fountain", "White Fountain Pen CT", "Expert brings smart Parisian styling to your business day. With its generous cigar-shaped silhouette and wealth of fine materials, it reveals that beneath your executive persona stirs a creative spirit. Let your vision and flair shine in your professional life with classic Waterman panache. Clients and colleagues will know you by your taste for sophistication.", ["Taupe faithfully reflects its shade: totally new, intense and fashionable. It builds a bridge between the worlds of business and fashion. Sir, Madam... Here is the ultimate accessory!", "In stainless steel, the nib is characterized by its generous form. Labelled with the emblematic W, it allies handwriting comfort with sophistication.", "Palladium finish."], ["Taupe Fountain Pen CT", "Fountain Pen", "Standard", "Fine, Medium", "841281", "Blue", "ST.", "Lacquer.", "Lacquer", "Stainless Steel"]));

productWritingArray.push(new FullProduct(48, "Perspective Blue Rollerball", 15, ["resource/roller0.png", "resource/roller01.jpg", "resource/roller02.jpg", "resource/roller03.jpg", "resource/productroller1.jpg"], "writing", "roller", "Blue Rollerball Pen CT", "Perspective changes the cityscape at one masterful stroke. Inspired by the purity of modern architecture, its parallel lines go on forever, as limitless as your ideas. Its crisp determination reflects your most focused creative moments. Powerful Waterman design creates a sense of presence whenever you use it. Get ready to reach for the sky.", ["The harmonious elegance of deep blue lacquer and chrome coloured trims resonate with the harmony of sky and city for a resolutely modern style.", "WATERMAN Rollerball pens unite the tradition of liquid ink with ultimate comfort and convenience. The writing experience is enhanced by the rich intensity of vivid ink colours.", "Palladium finish."], ["Blue CT", "Rollerball Pen", "Standard", "Fine, Medium", "841282", "Black", "Capped", "CT.", "Lacquer", "Lacquer"]));

productWritingArray.push(new FullProduct(49, "Elegance Ivory Rollerball", 20.5, ["resource/roller1.png", "resource/roller11.jpg", "resource/roller12.jpg", "resource/roller13.jpg", "resource/productroller5.jpg"], "writing", "roller", "Ivory Rollerball Pen GT", "Elégance crosses the line into personal jewelry, beautifully. With a graceful flourish, its fine design will intrigue your creative spirit. Here, skills of the goldsmith and silversmith join forces with the jeweler for a truly precious collection. The best of Waterman know-how comes together in a luxurious pen that delights the senses. Express yourself with ultimate style.", ["A generous combination of rich ivory lacquer with magnificent 23K Gold-plated trims for an ultra feminine finish finely crafted as a jewel pen.", "WATERMAN Rollerball pens unite the tradition of liquid ink with ultimate comfort and convenience. The writing experience is enhanced by the rich intensity of vivid ink colours.", "23K Gold plated."], ["Ivory GT", "Rollerball Pen", "Standard", "Fine", "841283", "Black", "GT", "Lacquer", "Lacquer", "Dual-tone 18K Solid Gold"]));

productWritingArray.push(new FullProduct(50, "Hemisphere Deluxe Metal Rollerball", 88.25, ["resource/roller2.png", "resource/roller21.jpg", "resource/roller22.jpg", "resource/roller23.jpg", "resource/productfountain4.jpg"], "writing", "roller", "Deluxe Metal Rollerball Pen CT", "Hémisphère makes each moment refreshingly elegant. In the spirit of Waterman innovation, it redefines timeless lines with a new focus on streamlined simplicity. Striking clean design and noble materials come together for a delightful writing experience to inspire your most creative thoughts. What better accessory for that lively imagination of yours?", ["A fusion of shine-on-shine black lacquer and palladium plate, blends modern purity with classic refinement for an irresistibly exclusive appeal.", "WATERMAN Rollerball pens unite the tradition of liquid ink with ultimate comfort and convenience. The writing experience is enhanced by the rich intensity of vivid ink colours.", "Palladium finish."], ["Deluxe Metal CT", "Rollerball Pen", "Standard", "Fine", "841284", "Black", "Capped", "CT", "Chiselled Palladium-Plated", "Chiselled Palladium-Plated"]));

productWritingArray.push(new FullProduct(51, "Expert Taupe Rollerball", 10, ["resource/roller3.png", "resource/roller31.jpg", "resource/roller32.jpg", "resource/roller33.jpg", "resource/productroller6.jpg"], "writing", "roller", "Taupe Rollerball Pen CT", "Expert brings smart Parisian styling to your business day. With its generous cigar-shaped silhouette and wealth of fine materials, it reveals that beneath your executive persona stirs a creative spirit. Let your vision and flair shine in your professional life with classic Waterman panache. Clients and colleagues will know you by your taste for sophistication.", ["Taupe faithfully reflects its shade: totally new, intense and fashionable. It builds a bridge between the worlds of business and fashion. Sir, Madam... Here is the ultimate accessory!", "WATERMAN Rollerball pens unite the tradition of liquid ink with ultimate comfort and convenience. The writing experience is enhanced by the rich intensity of vivid ink colours.", "Palladium finish."], ["Taupe CT", "Rollerball Pen", "Standard", "Fine", "841285", "Black", "Capped", "CT", "Chiselled Palladium-Plated", "Lacquer"]));

productWritingArray.push(new FullProduct(52, "Hemisphere Rose Cuivré Rollerball", 40, ["resource/roller4.png", "resource/roller41.jpg", "resource/roller42.jpg", "resource/roller43.jpg", "resource/productroller7.jpg"], "writing", "roller", "Rose Cuivré Rollerball, La Collection Privée", "Hémisphère Rose Cuivré reflects the creative spirit of Waterman and is deeply inspired by the arts of the early twentieth century. The engraving on the cap echoes the geometric flow of Art Deco creations, while the shimmery copper finish of the body conveys dazzling sophistication.", ["The coppery pink finish of this fine pen is complemented by a precise work of engraving on its cap.", "Comfortable and brilliantly designed, the expertly engraved nib is unmistakable in its writing experience.", "Palladium finish."], ["Rose Cuivré", "Rollerball Pen", "Standard", "Fine", "841286", "Black", "Capped", "CT", "Engraved stainless steel", "Lacquer"]));

productWritingArray.push(new FullProduct(53, "Expert Deluxe Blue Ballpoint", 20, ["resource/ballpoint0.png", "resource/ballpoint01.jpg", "resource/ballpoint02.jpg", "resource/ballpoint03.jpg", "resource/productballpoint5.jpg"], "writing", "ballpoint", "Deluxe Blue Ballpoint CT", "Expert brings smart Parisian styling to your business day. With its generous cigar-shaped silhouette and wealth of fine materials, it reveals that beneath your executive persona stirs a creative spirit. Let your vision and flair shine in your professional life with classic Waterman panache. Clients and colleagues will know you by your taste for sophistication.", ["Assertive lines, finely chiselled metal and bold blue tone furnish this contemporary classic with exemplar Parisian style.", "WATERMAN Ballpoint pens produce flawless lines and never dry out. It’s an anytime, anywhere ink that gives free reign to your spontaneous expression.", "Palladium finish."], ["Deluxe Blue CT", "Ballpoint Pen", "Standard", "Fine, Medium", "841287", "Black", "Capped", "CT", "Lacquer", "Chiselled Palladium finish"]));

productWritingArray.push(new FullProduct(54, "Expert Black Ballpoint", 48.99, ["resource/ballpoint2.png", "resource/ballpoint21.jpg", "resource/ballpoint22.jpg", "resource/ballpoint23.jpg", "resource/productballpoint6.jpg"], "writing", "ballpoint", "Black Ballpoint Pen GT", "Expert brings smart Parisian styling to your business day. With its generous cigar-shaped silhouette and wealth of fine materials, it reveals that beneath your executive persona stirs a creative spirit. Let your vision and flair shine in your professional life with classic Waterman panache. Clients and colleagues will know you by your taste for sophistication.", ["Only the discreet golden gleam of its trim competes with the deep black of its lacquer. A powerful, contemporary combination, of timeless elegance.", "WATERMAN Ballpoint pens produce flawless lines and never dry out. It’s an anytime, anywhere ink that gives free reign to your spontaneous expression.", "Golden with 23K Gold."], ["Black GT", "Ballpoint Pen", "Standard", "Medium", "841288", "Black", "Retractable twist mechanism", "GT", "Lacquer", "Lacquer"]));

productWritingArray.push(new FullProduct(55, "Perspective White Ballpoint", 85.30, ["resource/ballpoint1.png", "resource/ballpoint11.jpg", "resource/ballpoint12.jpg", "resource/ballpoint13.jpg", "resource/productballpoint0.jpg"], "writing", "ballpoint", "Black Ballpoint Pen GT", "Perspective changes the cityscape at one masterful stroke. Inspired by the purity of modern architecture, its parallel lines go on forever, as limitless as your ideas. Its crisp determination reflects your most focused creative moments. Powerful Waterman design creates a sense of presence whenever you use it. Get ready to reach for the sky.", ["A compelling combination of pure brilliant white lacquer and nickel-palladium plated trims highlight the expressive elegance of this contemporary urban design.", "WATERMAN Ballpoint pens produce flawless lines and never dry out. It’s an anytime, anywhere ink that gives free reign to your spontaneous expression.", "Palladium finish."], ["White CT", "Ballpoint Pen", "Standard", "Medium", "841288", "Black", "Retractable twist mechanism", "CT", "Lacquer", "Lacquer"]));

productWritingArray.push(new FullProduct(56, "Expert Stainless Steel Ballpoint", 108.5, ["resource/ballpoint4.png", "resource/ballpoint41.jpg", "resource/ballpoint42.jpg", "resource/ballpoint43.jpg", "resource/productballpoint7.jpg"], "writing", "ballpoint", "Stainless Steel Ballpoint Pen GT", "Expert brings smart Parisian styling to your business day. With its generous cigar-shaped silhouette and wealth of fine materials, it reveals that beneath your executive persona stirs a creative spirit. Let your vision and flair shine in your professional life with classic Waterman panache. Clients and colleagues will know you by your taste for sophistication.", ["Brushed steel, golden trims... the alchemist's art allies these metals to create an accessory both contemporary and sophisticated.", "WATERMAN Ballpoint pens produce flawless lines and never dry out. It’s an anytime, anywhere ink that gives free reign to your spontaneous expression.", "Golden with 23K Gold."], ["Stainless Steel GT", "Ballpoint Pen", "Standard", "Medium", "841289", "Blue", "Retractable twist mechanism", "GT", "Stainless Steel", "Stainless Steel"]));

productWritingArray.push(new FullProduct(57, "Hemisphere Stainless Steel Ballpoint", 108.5, ["resource/ballpoint4.png", "resource/ballpoint41.jpg", "resource/ballpoint42.jpg", "resource/ballpoint43.jpg", "resource/productballpoint1.jpg"], "writing", "ballpoint", "Stainless Steel Ballpoint Pen CT", "Hémisphère makes each moment refreshingly elegant. In the spirit of Waterman innovation, it redefines timeless lines with a new focus on streamlined simplicity. Striking clean design and noble materials come together for a delightful writing experience to inspire your most creative thoughts. What better accessory for that lively imagination of yours?", ["Contemporary brushed stainless steel and vivid palladium plated trims, highlight the slim and smooth-touch finish with the cool, clear colour of ice.", "WATERMAN Ballpoint pens produce flawless lines and never dry out. It’s an anytime, anywhere ink that gives free reign to your spontaneous expression.", "Palladium finish."], ["Stainless Steel CT", "Ballpoint Pen", "Standard", "Medium", "841290", "Blue", "Retractable twist mechanism", "GT", "Stainless Steel", "Stainless Steel"]));

productWritingArray.push(new FullProduct(58, "Propelling Pencil Tamitio Rose", 129, ["resource/pencil0.jpg", "resource/pencil01.jpg", "resource/pencil02.jpg", "resource/pencil01.jpg", "resource/productpencil3.jpg"], "writing", "pencil", "Brings style and functionality together", "Our series „Tamitio“ shows how the culture of writing can be enriched with extraordinary nuances. Each of the slender writing implements is the expression of pure elegance and therefore both, eye-catcher and stylish accessory, together.<ul><li>Break resistant 0.7mm leads of hardness B</li><li>Reservoir for spare leads</li><li>Replaceable white eraser under the end cap</li></ul>", ["The finely fluted barrel made of metal is lacquered in several elaborate working steps.", "The Tamitio Rose Pencil's soft pink matte lacquer finish, finely ribbed barrel and highly polished metal fittings bring design to the fore-front of this writing instruments appeal.", "Ribbed metal barrel, with matte lacquer finish. Spring-loaded clip."], ["Stainless Steel CT", "Mechanical Pencil", "Standard", "0.50 MM", "841291", "None.", "Retractable twist mechanism", "GT", "Stainless Steel", "Stainless Steel"]));

productWritingArray.push(new FullProduct(59, "Graf V. Castell Pencil Classic Sterling Silver", 80, ["resource/pencil1.jpg", "resource/pencil11.jpg", "resource/pencil12.jpg", "resource/pencil01.jpg", "resource/productpencil0.jpg"], "writing", "pencil", "Brings style and functionality together", "The style of the Classic collection combines the natural and warm charisma of wood with the cool elegance of platinum-plated surfaces in a unique way.The Classic writing implements come in platinum-plated versions, in ebony, in pernambuco or in grenadilla wood, each combined with platinized fittings and a finely ribbed barrel. The natural differences in grain and colour mean that every writing instrument made from them is unique.", ["Break resistant 0.7mm leads of hardness B. Reservoir for spare leads", "The writing implements made of solid sterling silver (925/1000) represent the highlight of the Graf von Faber-Castell collection.", "Luxury, wooden Graf von Faber-Castell presentation box, with branded fabric pen pouch."], ["Stainless Steel CT", "Mechanical Pencil", "Standard", "0.50 MM", "841293", "None.", "Retractable twist mechanism", "GT", "Stainless Steel", "Stainless Steel"]));

productWritingArray.push(new FullProduct(60, "Hemisphere Matt Black Mechanical Pencil", 50, ["resource/pencil2.png", "resource/pencil21.jpg", "resource/pencil22.jpg", "resource/pencil23.jpg", "resource/pencil24.jpg"], "writing", "pencil", "Brings style and functionality together", "Hémisphère makes each moment refreshingly elegant. In the spirit of Waterman innovation, it redefines timeless lines with a new focus on streamlined simplicity. Striking clean design and noble materials come together for a delightful writing experience to inspire your most creative thoughts. What better accessory for that lively imagination of yours?", ["With WATERMAN mechanical pencils, you can create and erase, and create again… Enjoy absolute freedom of expression.", "A fusion of shine-on-shine black lacquer and palladium plate, blends modern purity with classic refinement for an irresistibly exclusive appeal.", "Palladium finish."], ["Matt Black CT", "Mechanical Pencil", "Standard", "0.50 MM", "841292", "None.", "Retractable twist mechanism", "CT", "Lacquer", "Lacquer"]));

productWritingArray.push(new FullProduct(61, "Hemisphere Stainless Steel Mechanical Pencil", 10, ["resource/pencil3.png", "resource/pencil31.jpg", "resource/pencil32.jpg", "resource/pencil33.jpg", "resource/pencil34.jpg"], "writing", "pencil", "Brings style and functionality together", "Hémisphère makes each moment refreshingly elegant. In the spirit of Waterman innovation, it redefines timeless lines with a new focus on streamlined simplicity. Striking clean design and noble materials come together for a delightful writing experience to inspire your most creative thoughts. What better accessory for that lively imagination of yours?", ["With WATERMAN mechanical pencils, you can create and erase, and create again… Enjoy absolute freedom of expression.", "Mixing metals for an anytime accessory, brushed solid stainless steel and 23 K golden trims, in a classic composition of smooth discerning style.", "Golden with 23K Gold."], ["Matt Black CT", "Mechanical Pencil", "Standard", "0.50 MM", "841292", "None.", "Retractable twist mechanism", "CT", "Stainless Steel", "Stainless Steel"]));


var bigProductArray = [];
bigProductArray.push.apply(bigProductArray, productPaperArray);
bigProductArray.push.apply(bigProductArray, productDrawingArray);
bigProductArray.push.apply(bigProductArray, productStationeryArray);
bigProductArray.push.apply(bigProductArray, productWritingArray);

function printAllPaper() {
	var gal = document.getElementById("gallery-container");

	for (var k = 0; k < productPaperArray.length; k++) {
		gal.innerHTML += productPaperArray[k].print();
	}
}

function printAllDrawing() {
	var gal = document.getElementById("gallery-container");

	for (var k = 0; k < productDrawingArray.length; k++) {
		gal.innerHTML += productDrawingArray[k].print();
	}
}

function printAllStationery() {
	var gal = document.getElementById("gallery-container");

	for (var k = 0; k < productStationeryArray.length; k++) {
		gal.innerHTML += productStationeryArray[k].print();
	}
}


function printAllPen() {
	var gal = document.getElementById("gallery-container");

	gal.innerHTML += productWritingArray[0].printOther();
	for (var k = 1; k < productWritingArray.length; k++) {
		if (productWritingArray[k].image[4] != null) {
			gal.innerHTML += productWritingArray[k].printFour();
		} else {
			gal.innerHTML += productWritingArray[k].print();
		}
	}

}

function newProductPage(x) {
	window.open().document.write(bigProductArray[x].printNewPage());
}

var searchArray = [];

function searchItem(x) {
	while (searchArray.length > 0) {
		searchArray.pop();
	}
	var check;
				var name = document.getElementById("search-form").value;

	if (x==1){
	var type = document.getElementById("search-form-type").value;
	var price = document.getElementById("search-form-price").value;
	var sort = document.getElementById("search-form-sort").checked;
	var minRange, maxRange;
	
	}

	for (var i = 0; i < bigProductArray.length; i++) {
		check=1;
		if (bigProductArray[i].name.toUpperCase().includes(name.toUpperCase())) {
			check=1;
		}
		else {
			check=0;
		}
		
		if (x==1){
					if (type!="Type" && type!=bigProductArray[i].type){
			check=0;
		}
		
		if (price!="Price"){
			switch (price){
				case "1": minRange=0;maxRange=20;
					break;
				case "2": minRange=20;maxRange=50;
					break;
				case "3": minRange=50;maxRange=100;
					break;
				case "4": minRange=100; maxRange=Number.MAX_VALUE;
					break;
			}
			if (bigProductArray[i].price<minRange || bigProductArray[i].price>=maxRange){
				check=0;
			}
		}
		}

		
		if (check==1){
		searchArray.push(bigProductArray[i].id);			
		}
	}
	
	if (sort){
		searchArray.sort(function(a,b){
			return bigProductArray[a].price-bigProductArray[b].price;
		});
	}

	window.localStorage.setItem("search", JSON.stringify(searchArray));
	window.localStorage.setItem("search-string", name);
	window.location = "Search.html";
	return false;
}

function printSearch() {
	var gal = document.getElementById("gallery-container");
	var searchArray = JSON.parse(window.localStorage.getItem("search"));

	var searchString = window.localStorage.getItem("search-string");
	document.getElementById("search-form").value = searchString;

	gal.innerHTML = "";
	if (searchArray.length == 0) {
		gal.innerHTML = "<span class='search-message search-big'>Sorry!</span>";
		gal.innerHTML += "<span class='search-message search-small'>No result could be found.</span>";
		return;
	}
	for (var i = 0; i < searchArray.length; i++) {
		var item = bigProductArray[searchArray[i]];
		if (item.id == 42) {
			gal.innerHTML += item.printOther();
		} else {
			if (item.image[4] != null) {
				gal.innerHTML += item.printFour();
			} else {
				gal.innerHTML += bigProductArray[searchArray[i]].print();
			}
		}

	}
}
