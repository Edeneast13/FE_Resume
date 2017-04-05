
var bio = {
	"name": "Brian Roper",
	"role": "Android Engineer",
	"contacts": {
		"email": "appdevbri@gmail.com",
		"github": "edeneast13",
		"twitter": "@appdevbri",
		"location": "New York, New York"
	},
	"welcomeMessage": "I Currently work as an Android Engineer for Udacity Blitz. Welcome to my resume!",
	"skills": ["Java", "Android", "RxJava", "Retrofit", "Butterknife", "Dagger", "Material Design", "MVP"],
	"picture": "images/profile1.jpg",
};

var education = {
	"schools": [
			{
				"name": "University of Advancing Technology", 
				"location": "Tempe, Arizona",
				"degree": "Associates of Science",
				"majors": "Computer Science",
				"dates": "07/2014 - 11/2015",
				"url": "www.uat.edu"
			},
			{
				"name": "Udacity", 
				"location": "San Francisco, California",
				"degree": "Nanodegree",
				"majors": "Android Development",
				"dates": "02/2016 - 06/2016",
				"url": "www.udacity.com"
			},
			{
				"name": "Udacity", 
				"location": "San Francisco, California",
				"degree": "Nanodegree",
				"majors": "Front End Web Development",
				"dates": "03/2017 - present",
				"url": "www.udacity.com"
			}
		],
	"onlineCourses": [
			{
				"title": "Complete Web Developer Course by Rob Pierceval",
				"school": "Udemy",
				"dates": "March 2017",
				"url": "www.udemy.com"
			},
			{
				"title": "Complete Android Developer Course by Rob Pierceval",
				"school": "Udemy",
				"dates": "November 2014",
				"url": "www.udemy.com"
			}
		]
};	

var work = {
	"jobs": [
			{
				"employer": "Udacity Blitz", 
				"title": "Android Engineer",
				"location": "New York, New York",
				"dates": "10/2016 - present",
				"description": "Work on Android projects for Udacity Blitz customers. Handle UI/UX opertaions and some backend."
			},
			{
				"employer": "Freelance", 
				"title": "Android Engineer",
				"location": "New York, New York",
				"dates": "12/2015 - present",
				"description": "Iterate on various projects for multiple customers."
			},
			{
				"employer": "FedEx Ground", 
				"title": "Operations Coordinator",
				"location": "Holbrook, New York",
				"dates": "07/2012 - present",
				"description": "Manage pickup and delivery operations."
			}
		]
}

var project = {
	"projects": [
			{
				"title": "Silo", 
				"dates": "10/2016 - present",
				"description": "With Silo, you can control instead of being controlled by the technology in your life. By selectively blocking distractions, alerts, and notifications on your phone, Silo allows you to reclaim space in your life for focus, creativity, and truly connecting with the world, those around you, and yourself.",
				"images": "images/silo.jpg",
			},
			{
				"title": "AnDev News", 
				"dates": "01/2017 - present",
				"description": "Easily read and access the Android Weekly newsletters from your device",
				"images": "images/andev1.png",
			},
			{
				"title": "AmberCam", 
				"dates": "2016",
				"description": "Take photos and store them in cloud storage so they can be accessed from any Android device",
				"images": "images/amber1.png",
			}
		]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContact = [];
formattedContact.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContact.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContact.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContact.push(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedWelcome);
$("#header").append(formattedPic);

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	for(i in bio.skills){
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContact){
	$("#topContacts").append(formattedContact[i]);
	$("#footerContacts").append(formattedContact[i]);
}

work.display = new function(){
	if(work.jobs.length > 0){
		$("#workExperience").append(HTMLworkStart);
		for(i in work.jobs){
			var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);


			$(".work-entry:last").append(formattedWorkEmployer);
			$(".work-entry:last").append(formattedWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedWorkDates);
			$(".work-entry:last").append(formattedWorkDescription);
		}
	}
}

project.display = new function(){
	if(project.projects.length > 0){
		for(i in project.projects){
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.projects[i].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", project.projects[i].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.projects[i].description);
			var formattedProjectImage = HTMLprojectImage.replace("%data%", project.projects[i].images);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);
			$(".project-entry:last").append(formattedProjectImage);
		}
	}
}

education.display = new function(){
	if(education.schools.length > 0){
		for(i in education.schools){
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

			$(".education-entry:last").append(formattedSchoolName);
			$(".education-entry:last").append(formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
	}
	if(education.onlineCourses.length > 0){
		$("#education").append(HTMLonlineClasses);
		for(i in education.onlineCourses){
			$("#education").append(HTMLschoolStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
			var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

			$(".education-entry:last").append(formattedOnlineTitle);
			$(".education-entry:last").append(formattedOnlineSchool);
			$(".education-entry:last").append(formattedOnlineDates);
			$(".education-entry:last").append(formattedOnlineUrl);
		}
	}
}

$("#mapDiv").append(googleMap);































