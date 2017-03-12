// $("#main").append("Ryan Cross");

// var awesomeThoughts = "I am Ryan and I am Awesome";
 //var funThoughts = awesomeThoughts.replace ("Awesome", "fun");
 //console.log (awesomeThoughts);
 //console.log (funThoughts);

 //$("#main").append(funThoughts)

var fullName = "Ryan Cross";
var job = "SQA Analyst";

 var name = HTMLheaderName.replace("%data%",fullName);

 $("#header").append(name);


var careerTitle = HTMLheaderRole.replace("%data%",job);
$("#header").append(careerTitle);


var skills = ["Jira", "SQL","Linux","JavaScript","Git"];

var bio = {
	"name" = "Ryan",
	"role" = "QA Analyst",
	"contact_info" = "802491690",
	"welcome message" = "welcome to my resume"
}

var work = {
	"employer"="Market Leader",
	"years" = "3",
	"Location"= "Bellevue, WA",
	"Position"="SQA Analyst"
}
var education = {
	"School" = "Plymouth State University",
	"Degree"="Mathematics",
	"School_City" = "Plymouth, NH"
}
$("#header").append(bio.contact_info);
console.log(skills.length);
