// This is the JavaScript file for asg3part1.html

function change(){
	var swap=document.getElementById("swap");
	swap.style.visibility="visible";
	var randomArray=document.getElementById("randomArray");
	randomArray.style.visibility="visible";
	var newdoc=document.getElementById("newdoc");
	newdoc.style.visibility="visible";
	var birthday=document.getElementById("birthday");
	birthday.style.visibility="visible";
	document.body.style.backgroundColor="#F8F8FF";
	var title=document.getElementById("title");
	title.style.fontSize="3em";
	title.style.fontFamily="fantasy";
	title.style.color="#FF4500";
}

function swap(){
	var p1=document.getElementById("p1");
	var txt1=p1.innerHTML;
	var p2=document.getElementById("p2");
	var txt2=p2.innerHTML;
	p1.innerHTML=txt2;
	p2.innerHTML=txt1;
}

function randarray(){
	var phones1=["iPhone 6s Silver","iPhone 6s Space Gray","iPhone 6s Gold","iPhone 6s Rose Gold","iPhone 6s Any Color with SIM Free"];
	var phones2=["iPhone 6s Plus Silver","iPhone 6s Plus Space Gray","iPhone 6s Plus Gold","iPhone 6s Plus Rose Gold","iPhone 6s Plus Any Color with SIM Free"];
	var element=document.getElementById("element");
	element.innerHTML="<ul>For iPhone 6s we have:";
	for (var i=0;i<phones1.length;i++){
		element.innerHTML+="<li>"+phones1[i]+"</li>";
	}
	element.innerHTML+="</ul><br><ul>For iPhone 6s Plus we have:";
	for (var j=0;j<phones2.length;j++){
		element.innerHTML+="<li>"+phones2[j]+"</li>";
	}
	element.innerHTML+="</ul><br>";
	var randomPhone;
	var p1=document.getElementById("p1");
	var txt1=p1.innerHTML;
	if (txt1=="I prefer 6s."){
		randomPhone=phones1;
	}
	else{
		randomPhone=phones2;
	}
	var randomIndex=Math.floor((Math.random() * 5));
	var pricetxt=document.getElementById("prize").innerHTML=randomPhone[randomIndex];
}

function newdoc(){
	var date=new Date();
	var dayArray=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var year=date.getFullYear();
	var month=date.getMonth();
	var day=date.getDate();
	var week=date.getDay();
	document.open();
	document.title="iPhone 6s Detail";
	document.write("<h1>iPhone 6s & iPhone 6s Plus</h1>");
	document.write("<p>The iPhone 6S and iPhone 6S Plus are evolutions over their respective predecessors, featuring improved hardware specifications, including 3D Touch, a force-sensitive touchscreen; upgraded rear-facing and front-facing cameras; a faster processor; a new chassis made of a stronger alloy of aluminum; second-generation Touch ID; improved LTE and Wi-Fi connectivity; and a new rose gold finish in addition to the space gray, silver, and gold finishes found on the previous models, while maintaining an identical design. The devices ship with iOS 9 preinstalled.</p>");
	document.write("<p>Today's date: "+(month+1)+"/"+day+"/"+year+" "+dayArray[week]+"</p>");
	document.write("<img src='iPhone-6s.jpg'>");
	document.write("<p>Please use back button on the browser to return to previous page!</p>");
	var paragraph1 = document.getElementsByTagName("p")[0];
	var paragraph2 = document.getElementsByTagName("p")[1];
	var header1=document.getElementsByTagName("h1")[0];
	header1.style.fontSize="3em";
	header1.style.fontFamily="fantasy";
	document.body.style.textAlign="center";
	paragraph1.style.fontFamily="chalkboard";
	paragraph2.style.fontFamily="chalkboard";
	document.close();
}

function birthday(){
	var fullname1=document.getElementById("fullname1");
	var fullname2=document.getElementById("fullname2");
	var day1=document.getElementById("day1");
	var month1=document.getElementById("month1");
	var year1=document.getElementById("year1");
	var day2=document.getElementById("day2");
	var month2=document.getElementById("month2");
	var year2=document.getElementById("year2");
	var output=document.getElementById("output");
	output.innerHTML="<ul><li>"+fullname1.value+" was born on "+month1.value+"/"+day1.value+"/"+year1.value+".</li>";
	output.innerHTML+="<li>"+fullname2.value+" was born on "+month2.value+"/"+day2.value+"/"+year2.value+".</li>";
	var older;
	if (Number(year1.value)<Number(year2.value)){
		older=1;
	}
	else if (Number(year1.value)==Number(year2.value)){
		if (Number(month1.value)<Number(month2.value)){
			older=1;
		}
		else if (Number(month1.value)==Number(month2.value)){
			if (Number(day1.value)<Number(day2.value)) older=1;
			else if (Number(day1.value)==Number(day2.value)) older=2;
			else older=0;
		}
		else older=0;
	}
	else{
		older=0;
	}
	output.innerHTML+="<br>"
	if (older==1){
		output.innerHTML+="<li>"+fullname1.value+" is older than "+fullname2.value+"!</li></ul>";
	}
	else if (older==0){
		output.innerHTML+="<li>"+fullname1.value+" is younger than "+fullname2.value+"!</li></ul>";
	}
	else{
		output.innerHTML+="<li>"+fullname1.value+" and "+fullname2.value+" are the same age!</li></ul>";
	}
}