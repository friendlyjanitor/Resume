
var bio = {
	"name" : "Ryan Cross",
    "role" : "Software Quality Assurnace Analyst",
    "contacts" : [{
          "mobile": "802-249-1690",
          "email": "cross.w.ryan@gmail.com",
          "github": "friendlyjanitor",
          "location": "Boston, MA"
      			}],
    "welcomeMessage": "Welcome to my Resume, I enjoy learning new code and seeing what I can create with it" ,
    "skills": ["Jira", "SQL","Linux","JavaScript","Git"],
    "biopic": "images/profile.png",
    display: function (){
    			bio.contacts.forEach(function(index){

    						var data = "%data%";
    						var formattedMobile = HTMLmobile.replace(data, index.mobile);
							$("#topContacts").append(formattedMobile);
							var formattedEmail = HTMLemail.replace(data, index.email);
							$("#topContacts").append(formattedEmail);
							var formattedGitHub = HTMLgithub.replace(data, index.github);
							$("#topContacts").append(formattedGitHub);
							var formattedLocation= HTMLlocation.replace(data, index.location);
							$("#topContacts").append(formattedLocation);
							var formattedImage = HTMLbioPic.replace(data, bio.biopic);
							$("#header").append(formattedImage);
							




    			});

    		}

}






bio.display();


$("#header").append(HTMLskillsStart);

if (bio.skills.length > 0) {
		for (var i=0; i < bio.skills.length; i++ ){
				var data = "%data%";
				var formattedSkill = HTMLskills.replace(data, bio.skills[i]);
				$("#skills").append(formattedSkill);

};
}


var name = "Ryan Cross";
var job = "SQA Analyst";

var formattedname = HTMLheaderName.replace("%data%",name);
var formattedjob = HTMLheaderRole.replace("%data%",job);


$("#header").prepend(formattedjob);
$("#header").prepend(formattedname);







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
	],
	display : function () {

		Work.Job.forEach(function(job)

								{
									var data = "%data%" ;

									$("#workExperience").append(HTMLworkStart);
									var formattedEmployer = HTMLworkEmployer.replace
									(data,job.Company);
									var formattedTitle = HTMLworkTitle.replace
									(data,job.Title);
									var formattedDate = HTMLworkDates.replace
									(data,job.Duration);
									var formattedDescription = HTMLworkDescription.replace(data,job.Description);
									var formattedEmployerTitle = formattedEmployer + formattedTitle ;

									$(".work-entry:last").append(formattedEmployerTitle);
									$(".work-entry:last").append(formattedDate);
									$(".work-entry:last").append(formattedDescription);
	








								});

	

							}




}
Work.display();


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
	}, 

	{
		"Name": "Introduction to Programming",
		"School": "University of Phoneix",
		"Duration": "winter 2013"
	}, 

	{
		"Name": "Intro to C++",
		"School": "University of Phoneix",
		"Duration": "winter 2013"
	}],



		display : function () {
			Education.School.forEach(function(school){
			var data = "%data%";
			$("#education").append(HTMLschoolStart);
									var formattedName = HTMLschoolName.replace (data,school.Name);
									$(".education-entry").append(formattedName);});
		}
}

Education.display ();













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



// starting display here with for each




// end it here





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
								"subject" : "Testing Project 1",
								"duration": "Spring 2016",
								"description" : "I didn't really do anything I am just making this up"
							},
		 					{
								"subject" : "Testing Project 2",
								"duration": "Spring 2012",
								"description" : "I didn't really do anything I am just making this up, just like I made up the first one"
							}
						],
		    	display: function(){ 
								project.projects.forEach(function(project){
									var data = "%data%";
								$("#projects").append(HTMLprojectStart);
								var formattedSubject = HTMLprojectTitle.replace
								(data,project.subject);
								$(".project-entry:last").append(formattedSubject);
								var formattedDuration= HTMLprojectDates.replace
								(data,project.duration);
								$(".project-entry:last").append(formattedDuration);
								var formattedDescription = HTMLprojectDescription.replace(data,project.description);
								$(".project-entry:last").append(formattedDescription);
								});
							}
			}

project.display();





//$("#mapDiv").append(googleMap);



