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



var Work = {
	"Job":[
		{
			"Company": "Bullhorn",
			"Duration": "January 2013 - December 2013",
			"Location": "Boston, MA",
			"Title": "Technical Support Analyst",
			"Description": "I worked at Bullhorn"
		},
		{
			"Company": "Market Leader",
			"Duration": "December 2013 - December 2016",
			"Location": "Bellevue, WA",
			"Title": "Software Quality Assurnace Analyst",
			"Description": "I worked at Market Leader!"

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
	

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
	

var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkill);

}

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




for (Jobs in Work.Job){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace
	("%data%",Work.Job[Jobs].Company);
	var formattedTitle = HTMLworkTitle.replace
	("%data%",Work.Job[Jobs].Title);
	var formattedDate = HTMLworkDates.replace
	("%data%",Work.Job[Jobs].Duration);
	var formattedDescription = HTMLworkDescription.replace("%data%",Work.Job[Jobs].Description);
	var formattedEmployerTitle = formattedEmployer + formattedTitle ;

	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedDate);
	$(".work-entry:last").append(formattedDescription);
	
	
}

