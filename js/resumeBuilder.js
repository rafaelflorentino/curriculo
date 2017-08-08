
/* Imprime no console do navegador uma Variável */

var nome ="RAfael";// cria uma Variável e insere um valor do tipo string
//console.log(nome);// mostra no consele o conteudo da Variável


/* Inserir conteúdo no final da div com (append) */

 //$("#main").append("Rafael Florentino Barbosa <br/>");// inserir conteúdo no final da div 


/* Localizar palavra e substituir por outra (replace), adicionar conteúdo no começo da div (prepend)*/

  var awesomeThoughts = "I am Rafael and i am AWESOME!";
  var funThoughts = awesomeThoughts.replace("AWESOME","FUN");//localiza a palavra e subistitui por outra desejada
 // $("#main").append(funThoughts);


  var email = "rafael@udacity.com";
  var newEmail = email.replace("udacity","gmail");//localiza a palavra e subistitui por outra desejada

  var role = "Web Developer";
  var formattedName = HTMLheaderName.replace("%data%","Rafael");
  var fotmattedRole = HTMLheaderRole.replace("%data%", role);

  $("#header").prepend(formattedName,fotmattedRole); //insere conteúdo no inicio da div


/* Trasnformar a palavra audacity em Udacity */

var s = "audacity";


var udacityizer = function(s) {  // estrutura de uma função


    if( s === "audacity"){

    	s = s[1].toUpperCase() + s.slice(2);// primeiro corta a palavra, depois  transforma em maiscula primeira letra
       
    }   
     return s;  
};

//console.log(udacityizer(s));// chamando uma função passando um parametro, a Variável s


/* Mostrar os itens de uma array */

var skills = ["awesome","programing","teaching","JS"];// inicializando uma array
var t = ["awesome"];

//$("#main").append("<br/><br/>" + skills);// todos itens da array
//$("#main").append("<br/>" + skills[0]);// o primerio item

//$("#main").append("<br/>" + skills.length);// quatidade de itens na array



/* Receber uma array e acrescenta no ultimo elemento o valor dele mais um e depois adicona outro elemento na array (pop),(push) */


var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    newArray = _array.slice(0);// faz uma copia e salva os elementos da array antiga 
    //console.log("newArray recebe os valores de sampleArray: " + newArray);

    var lastNumber = newArray.pop();// remove o ultimo item da array e salva na Variável 
   // console.log("lastNumber remove e recebe o valor do ultimo item da array newArray  : " + lastNumber);

    newArray.push(lastNumber + 1);// insere no final da array
    newArray.push(4)

    return newArray;
};

//var newArray = incrementLastArrayElement(sampleArray);
//console.log(newArray);
//console.log(incrementLastArrayElement(sampleArray));

/* Pegar um nome completo e trasformar o primeiro nome em minusculo com a primeira letra em maiscula e o sobrenome todo maiúsculo */


var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;// copia o valor para uma nova
    var names = oldName.split(" ");//separa os nomes e sobrenomes em itens de um nova array, de acordo com os espaços econtrados
    names[1] = names[1].toUpperCase();// o sobrenome e o segundo item dessa nova array, trasforma todo sobrenome em maiúsculo
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();//corta primeira letra e transforma em maiúscula
    //corta o restante da palavra e transforma em minusculo, depois junta tudo em uma unica palavra

    finalName = names.join(" ");// Reune os elementos da array em uma string levando em conta os espaços
    return finalName;
}

//console.log(nameChanger(name));

/* Criando um objeto e chamando o valor */

var bio = {
	"name" : "Rafael",
	"role" : "Web Developer"
	//"contacts" : skills
}
//$("#main").append(" <br/><br/> "+bio.name);

//bio.city =	"Brasilia";  // criando novas propiedasdes no objeto usando ponto "."
//bio.email = "rafael@gmail.com";
//$("#main").append(" <br/> "+bio.city);


bio["city"] =	"Brasilia";  // criando novas propiedasdes no objeto usando [ ]
bio["email"] = "rafael@gmail.com";
//$("#main").append(" <br/> "+ bio["city"]);





//$("#main").append(" <br/><br/> "+ work["position"]);


var education = {};// por colchetes
education["name"] = "UCB";
education["year"] = "2013-2017";
education["city"] = "Brasilia";

//$("#main").append(" <br/> "+ education.name);


var bio = {
	"name" : "Rafael",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "650-000-0000",
		"email" : "rafael@gmail.com",
		"github" : "rafael",
		"twitter" : "@rafael",
		"location" : "Brasilia"
	},
	"welcomeMessage" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	"skills" : [
		"awessomes", "delivering things", "criogenic sleep", "saving the universe"
		],

	"bioPic" : 'images/fry.jpg'	 
	
}

/* Inserindo a imagem de biografia no header */

var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedPic);

/* Inserindo Mensagem de boas vindas */

var formattedWelcomeMsg  = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);



/* Estrutura do JSON. Necessário remover "var education =" e deichar o colchete "{" */

 var education = {

	"schools" : [ 
		{
			"name" : "UCB",
			"location" : "Aguas Claras",
			"deegre" : "Masters",
			"majors" : ["CS"],
			"dates" : "2013",
			"url" : "http://www.google.com.br"	
		},
		{
			"name" : "UNB",
			"location" : "Asa Norte",
			"deegre" : "BA",
			"majors" : ["CS"],
			"dates" : "2003",
			"url" : "http://www.google.com.br"
		}
	],

	"onlineCurses" : [
		{
			"title" : "javascript",
			"schools" : "udacity",
			"dates" : "2011",
			"url" : "http://www.google.com.br"
		},
		{
			"title" : "Jquery",
			"schools" : "udacity",
			"dates" : "2012",
			"url" : "http://www.udacity.com.br"
		}			
	]
}  


var projects = {
	"projects" : [
		{
			"title" : "Sample project",
			"dates" : "2014",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
			"images" : [
				"images/197x148.gif",
				"images/197x148.gif",
				"images/197x148.gif",
				"images/197x148.gif",
				"images/197x148.gif"				
			]
		},
		{
			"title" : "Complex project",
			"dates" : "2015",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
			"images" : [
				"https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
				"https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"

			]
		}		
	]

}



/*if (document.getElementsByClassName("education-entry").length === 0) {
	document.getElementById("education").style.padding = "100px";
    document.getElementById("education").style.background = "red";

    document.getElementById("education").style.backgroundColor = "black";
}*/

/* Codigo para subistituir todas as os caracteres < e > por &lt e &gt , por seguranca , pra impedir que alguem adicone codigo  */

//var html = '<script src=""></script>'; http://hackyourwebsite.com/eviljavascript.js

var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};

//console.log(charEscape(html));


/* Função com IF */

function mySkills(){

	if(bio.skills.length > 0){// verifica se esta vazio

		

		$("#header").append(HTMLskillsStart);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
				


	}else{
		$("#header").append("False");
	}

} 

mySkills();


/* Função com WHILE com IF */

var cameron = {};// cria uma array vazia
cameron.job = "course dev";// cria e atribui job a cameron

var makeCourse = function () {// função imprime frase
	//console.log("Made a course");	
}


var courses = 0;//contador de loop iterator
while(cameron.job === "course dev"){
	makeCourse();//chama função imprime frase
	courses = courses + 1;// adiciona masi um ao contador
	if(courses === 10){// verifica se tem os loop, euda o valor de job
		cameron.job = "learning specialist";
	}
}

//console.log(cameron.job); // mostra o valor de job


/* Função contar com FOR*/

function contar(){
	for (var i = 0 ; i < 9; i++) {
		console.log(i);
	}
}

//contar();


/* Função contar com FOR IN*/

var countries = ["germany","argentina","brazil","netherlands"];

function paises(){
	for(country in countries) {
		console.log(countries[country]);
	}	
}
 
//paises();

/* Criando objetos usando os formas de: dot notation(ponto) e bracket notation(chaves) */


var work = {}; // por ponto Dot
	
work.position = "Nova york!";
work.employer = "Google";
work.years	= "3";


var work = { // literal
	"position" : "Nova york!",
	"employer" : "Google",
	"years" : "3",

	/*"jobs" :[

		{
			"employer" : "google",
			"title" : "frontEnd",
			"dates" : "12/09/2015",
			"description" : "programador super top da Google ",
			"location" : "San francisco"

		},
		{
			"employer" : "facebook",
			"title" : "BackEnd",
			"dates" : "30/12/2016",
			"description" : "programador super top do Facebook ",
			"location" : "New Work"

		}	
	]*/
	"jobs": [
	    {
	      "employer": "Udacity",
	      "title": "Course Developer",
	      "location": "Mountain View, CA",
	      "dates": "Feb 2014 - Current",
	      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
	    },
	    {
	      "employer": "LearnBIG",
	      "title": "Software Engineer",
	      "location": "Seattle, WA",
	      "dates": "May 2013 - Jan 2014",
	      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
	    },
	    {
	      "employer": "LEAD Academy Charter High School",
	      "title": "Science Teacher",
	      "location": "Nashville, TN",
	      "dates": "Jul 2012 - May 2013",
	      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
	    },
	    {
	      "employer": "Stratford High School",
	      "title": "Science Teacher",
	      "location": "Nashville, TN",
	      "dates": "Jun 2009 - Jun 2012",
	      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
	    }
	  ]	

}




/* Função job com FOR IN*/

function displayWork(){

	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployeTitle = formattedEmployer + formattedTitle;
	   
	    $(".work-entry:last").append(formattedEmployeTitle);

	    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	    $(".work-entry:last").append(formattedDates);

	    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	    $(".work-entry:last").append(formattedDescription);

	}

}

displayWork();

/* Função  com FOR IN*/

myObj = {'country1':'Germany', 'country2':'Argentina'};

for (key in myObj){
    if (myObj.hasOwnProperty(key)) {
       // console.log(myObj[key]);
    }
}

/* Modelos de funções */

//primeira forma


var myFunction1 = function(param1 , param2) {
	//console.log(param1 + "=" + param2);
}

myFunction1("CA","SA");

// Segunda forma

function myFunction2(param1,param2){
	//console.log(param1 + param2);
}

myFunction2("CA","SA");



/* Função cer cordenados dos Clicks*/

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY; 

	logClicks(x,y);
	
	//console.log( "pageX: " + loc.pageX + ", pageY: " + loc.pageY );

});



/* split trasforma em array*/

var myString = "fui a feira comprar cafe"
var myArray =  myString.split(" ");

///console.log(myArray);


/* função localizar*/

function locationizer(work_obj){
	var locationArray = [];

	for( job in work_obj.jobs){

		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation); 

		//locationArray.push(work_obj.jobs[job].location); 
	}

	return locationArray;
}

//console.log(locationizer(work));


/* função internacionalizar nome*/

$("#main").append(internationalizeButton);

var internaName = "sebastian thrun";

function inName(nome){
	nome = nome.trim().split(" ");
	//console.log(nome);

    nome[1] = nome[1].toUpperCase();// o sobrenome e o segundo item dessa nova array, trasforma todo sobrenome em maiúsculo
    nome[0] = nome[0].slice(0,1).toUpperCase() + nome[0].slice(1).toLowerCase();//corta primeira letra e transforma em maiúscula  
   
    return nome[0] + " " + nome[1];

}

//console.log(inName(internaName));
//console.log(inName("sebastian thrun"));

/* função project*/


projects.display = function(){
	for(project in projects.projects){
		
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);


		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);		


		if(projects.projects[project].images.length > 0){
			for(image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}		

	}

}
projects.display();


/* função anonima*/

var anonima = function(n){ 
	var n2 = n * 5; 
//	alert(n2)
	//console.log(n);
};

anonima(2);


/* Google Maps*/


// $("#map-div").append(googleMap);


/* Variaveis internas resultados*/

var outsideExample = "First string";
function example() {
    //var outsideExample = "Second string";
}
example();
//console.log(outsideExample);

//Exemplo 2

var outsideExample = "First string";
function example() {
  //  outsideExample = "Second string";
}
//example();
//console.log(outsideExample);


/* Variaveis internas resultados*/

var outsideExample = "First string";
if (true) {//Ao contrário do último questionário, onde criamos uma variável totalmente nova dentro de uma função,
    var outsideExample = "Second string";// a instrução if não cria uma nova variável. Simplesmente sobrescreve o valor de OutsideExample para "Second string".
    //console.log(outsideExample);
}
//console.log(outsideExample);


/* Sitaxe declaração de function correta e errada*/

example1();
function example1() {// essa forma sobe a funcao ate o topo do script
   // console.log("Ran the example");
}

// exemplo 2


//example2(); // Erro, dessa forma ainda nao foi criada a funcao para poder chamar 
var example2 = function() {// essa forma de declarar nao sobe a função igual o exemplo 1
   // console.log("Ran the example");
}


/* Adicionar conteudo education a pagina*/

projects.display = function(){

	$("#education").append(HTMLschoolStart);

	for(school in education.schools ){

		var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
		$(".education-entry:last").append(formattedSchoolName);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedSchoolMajor);		
	}

	$("#education").append(HTMLonlineClasses);
	$("#education").append(HTMLschoolCursesStart);

	for(curse in education.onlineCurses){

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCurses[curse].title);
		$(".curses-entry:last").append(formattedOnlineTitle);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCurses[curse].dates);
		$(".curses-entry:last").append(formattedOnlineDates);

		var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCurses[curse].url);
		$(".curses-entry:last").append(formattedOnlineUrl);
	}

}
projects.display();


/* Adicionar contatos a pagina*/

bio.display = function(){

	//topContacts e footerContacts

	var formattedContactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts:last,#footerContacts:last").append(formattedContactMobile);
	
	var formattedContactEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts:last,#footerContacts:last").append(formattedContactEmail);	

	var formattedContactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts:last,#footerContacts:last").append(formattedContactGithub);		

	var formattedContactTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts:last,#footerContacts:last").append(formattedContactTwitter);	

	var formattedContactLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts:last,#footerContacts:last").append(formattedContactLocation);

}
bio.display();


/* Adicionar mapa a pagina*/

$("#mapDiv").append(googleMap);	

$("#map").append('<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d86870.43339103698!2d-47.929016658052866!3d-15.795144158943788!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1502209421274" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>');	




