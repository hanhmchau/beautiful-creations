// JavaScript Document
function Blog(id,title, image, date, numberOfComments, content) {
	this.id=id;
	this.title = title;
	this.image = image;
	this.date = date;
	this.numberOfComments = numberOfComments;
	this.content = content;

	this.printBlog = function () {
		var paragraphs=this.content.split("<br><br>");
		var firstPara=paragraphs[0];
		var rest="";
		for (var i=1;i<paragraphs.length-1;i++){
			rest+=paragraphs[i]+"<br><br><br>";
		}
		rest+=paragraphs[paragraphs.length-1];
		return "<div class='blog-one'><img src='" + this.image + "' alt=''/><span class='before-title-blog'>News</span><span class='title-blog'>" + this.title + "</span><span class='date-blog'>" + this.date + "</span><p>" + firstPara + "</p><p style='display:none' id='the-rest"+this.id+"'>"+rest+"</p><button onclick='readMore(this,"+this.id+")' class='read-more-blog'>Read More</button><div class='third-blog'><a href='#'><strong>" + this.numberOfComments + "</strong> comments</a></div><div class='third-blog'><a href='#' class='fa fa-facebook'></a><a href='#' class='fa fa-twitter'></a><a href='#' class='fa fa-google-plus'></a></div><div class='third-blog'>By <strong>WPSCOUT</strong></div></div>";
	};
}

function readMore(ev,x){
	var z=document.getElementById("the-rest"+x);
	z.style.display="block";
	ev.style.display="none";
}

var nameBlogArray = ["Semet Identity", "Arguile Identity", "Casmir"];
var blogArray = new Array();

blogArray.push(new Blog(0,"Semet Identity","resource/stationeryset2.jpg","15th Oct, 2015",1,"Enea is a contemporary furniture manufacturer, located in Spain’s Basque Country, collaborating with respected designers such as Josep Lluscá, Gabriel Teixidó and the trio Lievore Alhterr Molina. Enea has a distinctive catalogue of versatile, comfortable and durable products, developed for both the private and commercial markets, with unique character in their play with form, colour and texture.<br><br>With a desire to differentiate itself from its competitors, and with the intentions of avoiding industry clichés, Enea worked with Barcelona-based graphic design studio Clase bcn to create a new visual identity that would articulate, through image and type, colour and materiality, the company’s Basque origin and unique products in a distinctive and contemporary fashion and, using a striking spartan style, reference industrial manufacturing.<br><br>The project extended to business cards, brand guidelines, product brochures and company catalogue, and was launched alongside Enea’s latest range which coincided with the Milan Furniture Fair.<br><br>This post, an update to the original from 2015, features all new project images, a more extensive look at art direction, stationery and both product and company brochures, photographed as part of Clase bcn’s new website."));

blogArray.push(new Blog(1,"Arguile Identity","resource/stationeryset1.jpg","18th Oct, 2015",5,"Summerhill Market is a family-run business, managed by the third generation, with premises on Toronto’s Summerhill Avenue and a smaller location—a floral boutique—on Mt. Pleasant Rd. The store has 200 employees, a butchers, bakery and deli, a BBQ in the summer and offers a variety of catering services.<br><br>Summerhill Market is admired for its high quality products, and its ability—since 1954—to consistently redefine what it means to be a boutique grocery store. Its commitment to quality is reflected in its extensive range of own-brand products, developed by an in-house executive chef and a team of 80.<br><br>With the intention of giving the store a more contemporary voice whilst maintaining its warmth, Canadian studio Blok developed a new brand identity of pastel colour, sans-serif type, moments of illustrative texture and a labelling system that links an extensive line of own brand products. As well as this, Blok also delivered assets that included business cards and stickers, packaging, branded tote bag and notecards."));

blogArray.push(new Blog(2,"Casmir","resource/stationeryset0.jpg","1st Nov, 2015",2,"Lundén Architecture Company is a Helsinki-based design studio developing innovative structures, infrastructures and spaces. The studio, through their knowledge of strategic development, experimental building technology and urban design, drawn from their collaborations with experts from different fields, offer proposals that affect the future of the built environment.<br><br>Projects have included a new school and community complex that inspires learning during the day and functions as a meeting place, workshop area and community space during the evening, and an infrastructure proposal that reconsider airport terminal systems for Finland’s air transportation network.<br><br>Lundén Architecture Company’s brand identity, developed by Finnish graphic design studio Tsto, is based around a logotype that acknowledges the fragility of structure and the notion that its deterioration begins as soon as it is completed. This is expressed through the breaking apart and reassembly of logotype. This runs across business cards and stationery in a static but transitory state, and in motion online."));

function printAllBlogs() {
	var t = document.getElementsByClassName("blog-big")[0];
	t.innerHTML = "";
	for (var i = blogArray.length-1; i >=0; i--) {
		t.innerHTML += blogArray[i].printBlog();
	}
}

function printPagination() {
	var t = document.getElementsByClassName("blog-big")[0];
	t.innerHTML += "<div class='pagination'><a href='#'>&laquo;</a><a class='active-page' href='#'>1</a><a href='#'>2</a><a href='#'>3</a><a href='#'>4</a><a href='#'>5</a><a href='#'>6</a><a href='#'>&raquo;</a></div>";
}
