//$("#main").append("Ryan Cross");

var awesomeThoughts = "I am Ryan and I am Awesome";
var funThoughts = awesomeThoughts.replace ("Awesome", "fun");
console.log (awesomeThoughts);
console.log (funThoughts);

 //$("#main").append(funThoughts)

var name = "Ryan Cross";
var job = "SQA Analyst";

var formattedname = HTMLheaderName.replace("%data%",name);
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
function displayWork(){

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
}


displayWork ();



function inName (name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name [1];
}




var project = {
			"projects": [
							{
								"subject" : "Testing Prjoect 1",
								"duration": "Spring 2016",
								"description" : "I didn't really do anything I am just making this up"
							},
		 					{
								"subject" : "Testing Prjoect 2",
								"duration": "Spring 2012",
								"description" : "I didn't really do anything I am just making this up, just like I made up the first one"
							}
						],
		    	display: function()
							{ 
								for (Project in project.projects)
								{
								$("#projects").append(HTMLprojectStart);
								var formattedSubject = HTMLprojectTitle.replace
								("%data%",project.projects[Project].subject);
								$(".project-entry:last").append(formattedSubject);
								var formattedDuration= HTMLprojectDates.replace
								("%data%",project.projects[Project].duration);
								$(".project-entry:last").append(formattedDuration);
								var formattedDescription = HTMLprojectDescription.replace("%data%",project.projects[Project].description);
								$(".project-entry:last").append(formattedDescription);
								}
							}
			}

project.display();



