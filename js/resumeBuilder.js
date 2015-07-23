/*
This is empty on purpose! Your code to build the resume will go here.
 */
 $("#main").append("Abhishek Shetty");
 var blah = 1112;
 console.log(blah);
 var message = " Me and my awesome thoughts!";
 var newmess = message.replace("awesome", "fun");
 console.log(newmess);
 $("#main").append("<br>" + newmess);
 
 
 var name = "Abhishek";
 var role = "WebDev"
 var formattedName = HTMLheaderName.replace("%data%", name);
 var formattedRole = HTMLheaderRole.replace("%data%", role);
 
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 
 console.log("Length of my name is " + name.length); 
 
 var bio = {
	 name: "Abhishek",
	 age: "23",
	 role: "Webdev",
	 contact:"9844138013",
	 image_url:"images/fry.jpg"
 };
 $("#main").append(bio.age);
 $("#main").append(bio.role);
 $("#main").append(bio.contact);
 $("#main").append(bio.image_url);
 
 var work = {
	 position : "Developer",
	 place : {
		 city : "Bangalore",
		 state : "Karnataka"
	 },
	 years : "10"
 };
 
 var education = {
    "school": [
        {
            "name": "CHS",
            "place": "Vijayanagar",
            "years": "12"
        },
        {
            "name": "KLE",
            "place": "Rajajinagar",
            "years": "2"
        },
        {
            "name": "BMSIT",
            "place": "Yelahanka",
            "years": "4"
        }
    ]
};
 
 
	 
	 
	 
	 
	 
 };
 $("#main").append(work.position);
 $("#main").append(work.place.city);
 $("#main").append(education["colname"]);
 
 
 
 