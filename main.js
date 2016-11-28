var meal = document.getElementById("meal");
var check = document.getElementById("check");
var veggo = false;
document.getElementById("checkedBox").onchange = function(){
	if(this.checked){
		veggo = true;
	}else{
		veggo = false;
	}
};

var newCourse = document.getElementById("newCourse");
newCourse.addEventListener("mouseover", function(){
	this.style.textDecoration = "underline";
});
newCourse.addEventListener("mouseout", function(){
	this.style.textDecoration = "none";
});

var plate = [
	{veg: true, dish: "Pannkakor/plättar med sylt & grädde", url: "http://www.spisa.nu/3.12981/recept/pannkakorplattar-med-sylt-och-gradde/"},
	{veg: false, dish: "KÖTTBULLAR MED POTATISMOS, GRÄDDSÅS OCH STEKT LÖK", url: "https://www.landleyskok.se/recept/hemlagade-kottbullar.html/"},
	{veg: false, dish: "Baconinlindad kycklingfile", url: "https://www.kokaihop.se/recept/baconinlindad-kycklingfile-2"},
	{veg: false, dish: "Lasagne med köttfärssås", url: "http://www.koket.se/lasagne-med-kottfarssas"},
	{veg: true, dish: "Majsplättar med avokadoröra", url: "https://www.mathem.se/recept/mattias-majsplattar-med-avokado-chimichurri"},
	{veg: false, dish: "Grönkålssoppa med chorizo", url: "http://www.matklubben.nu/recept/gr%F6nk%E5lssoppa_med_chorizo_122704.html#.WCxTNcn3b9I"},
	{veg: false, dish: "Pastagratäng med rökt lax och spenat", url: "www.ica.se/recept/pastagratang-med-rokt-lax-och-spenat-719271/"},
	{veg: false, dish: "Thaigryta med kyckling", url: "http://www.koket.se/mitt-kok/donal-skehan/thaigryta-med-kyckling/"},
	{veg: false, dish: "Lax med nudelsallad", url: "https://www.mathem.se/recept/gustavs-sesamstekta-lax-med-varm-nudelsallad--lime-och-koriander"},
	{veg: true, dish: "Lasagne med halloumi, spenat och pumpakärnor", url: "www.ica.se/recept/lasagne-med-halloumi-spenat-och-pumpakarnor-718382/"},
	{veg: true, dish: "Rödbetsrisotto med hyvlad halloumi och valnötter", url: "www.ica.se/recept/rodbetsrisotto-med-hyvlad-halloumi-och-valnotter-720045/"},
	{veg: false, dish: "Halstrad tonfisk med avokadohummus", url: "www.ica.se/recept/halstrad-tonfisk-med-avokadohummus-719975/"},
	{veg: false, dish: "Viltskavsgryta med mandelpotatispuré & rårörda lingon", url: "https://www.mathem.se/recept/viltskavsgryta-med-mandelpotatispure-o-rarorda-lingon"},
	{veg: false, dish: "Coq Au Vin", url: "http://www.foodnetwork.com/recipes/ina-garten/coq-au-vin-recipe4.html"},
	{veg: true, dish: "Indisk linssoppa 'Mulligatawny'", url: "http://www.ica.se/recept/indisk-linssoppa-mulligatawny-718554/"},
	{veg: true, dish: "Falafel med hummus, yoghurtdressing och picklad rödlök", url: "http://www.ica.se/recept/falafel-med-hummus-yoghurtdressing-och-picklad-rodlok-717166/"},
	{veg: true, dish: "Vegetarisk pastagratäng", url: "https://www.landleyskok.se/recept/vegetarisk-pastagratang.html/"},
	{veg: true, dish: "Morotsbiffar", url: "http://www.tasteline.com/recept/morotsbiffar-med-dragon/"},
	{veg: false, dish: "Biff teriyaki", url: "http://www.arla.se/recept/biff-teriyaki"},
	{veg: false, dish: "Korvstroganoff", url: "http://www.ica.se/recept/korvstroganoff-med-ris-533512/"},
	{veg: false, dish: "Ugnsstekt falukorv med rostade rotsaker", url: "http://www.ica.se/recept/ugnsstekt-falukorv-med-rostade-rotfrukter-713615/"}

];

var vegPlate = [];
	for(var i = 0; i < plate.length; i++){
		if(plate[i].veg === true){
			vegPlate.push(plate[i]);	
		}
	}

function newDish(veg, dish, url){
	
	if(veggo === true){
		var randomVegMeal = vegPlate[Math.floor(Math.random() * vegPlate.length)];	
		var randomLink = randomVegMeal.url;
		randomVegMeal = randomVegMeal.dish;
		var link = document.createElement("a");
		var linkText = document.createTextNode(randomVegMeal);
		link.appendChild(linkText);
		link.href = randomLink;
		meal.removeChild(meal.getElementsByTagName("a")[0]);
		meal.appendChild(link);
		
	}else if(veggo === false) {
		var randomMeal = plate[Math.floor(Math.random() * plate.length)];
		var randomLink = randomMeal.url;
		randomMeal = randomMeal.dish;
		var link = document.createElement("a");
		var linkText = document.createTextNode(randomMeal);
		link.appendChild(linkText);
		link.href = randomLink;
		meal.removeChild(meal.getElementsByTagName("a")[0]);
		meal.appendChild(link);
	}
}

