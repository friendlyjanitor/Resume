//$("#main").append("Ryan Cross");

var awesomeThoughts = "I am Ryan and I am Awesome";
var funThoughts = awesomeThoughts.replace ("Awesome", "fun");
console.log (awesomeThoughts);
console.log (funThoughts);

 //$("#main").append(funThoughts)

var fullName = "Ryan Cross";
var job = "SQA Analyst";

var formattedname = HTMLheaderName.replace("%data%",fullName);
var formattedjob = HTMLheaderRole.replace("%data%",job);

$("#header").append(formattedname);
$("#header").append(formattedjob);




var skills = ["Jira", "SQL","Linux","JavaScript","Git"];



var WorkExpierence = {
	"Expierence":[
		{
			"Company": "Bullhorn",
			"Duration": "January 2013 - December 2013",
			"Location": "Boston, MA",
			"Title": "Technical Support Analyst"
		},
		{
			"Company": "Market Leader",
			"Duration": "December 2013 - December 2016",
			"Location": "Bellevue, WA",
			"Title": "Software Quality Assurnace Analyst"

		}


	]
}

var Education = {
	"School": [{
		"Name": "Plymouth State University",
		"Location": "Plymouth, NH",
		"Degree": "B.S. Mathematics",
		"Year": "2012"
	}],

	"Courses": [{

		"Name": "JavaScript Basic",
		"School": "Udacity",
		"Duration": "Spring 2017"
	}, {
		"Name": "Introduction to Programming",
		"School": "University of Phoneix",
		"Duration": "winter 2013"
	}, {
		"Name": "Intro to C++",
		"School": "University of Phoneix",
		"Duration": "winter 2013"
	}]

}

var bio = {
	"GivenName" : "Ryan Cross",
	"role" : "Software Quality Assurnace Analyst",
	"age" : "27",
	"skills" :["Jira", "SQL","Linux","JavaScript","Git"]
};
	


//var s = "audacity";

//var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    
  //  s = s.slice(1,2).toUpperCase()+s.slice(2,8);
    
   
    
    //return s;
//};

// Did your code work? The line below will tell you!
// console.log(udacityizer(s));
