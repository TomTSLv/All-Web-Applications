// The file gives all the interactions for my NYU Holiday Calendar Application

//Get information from date type input
function returnDate(){
	var str=document.getElementById("date").value;
	var date=new Date(str);
	console.log(date);
	return date;
}

//Get output as well as change image
function printResult(resultArray){
	var p1=document.getElementById("output");
	p1.innerHTML=resultArray[0];
	//Two-dimensional array that matches holiday name with its image
	var images=new Array(2);
	images[0]=new Array("Labor Day","Fall Recess","Thanksgiving Recess","Winter Recess","Martin Luther King, Jr. Day","President's Day","Spring Recess","Memorial Day","Independence Day");
	images[1]=new Array("labor.jpg","fall.jpg","thanksgiving.jpg","winter.jpg","martin.jpg","president.jpg","spring.jpg","memorial.jpg","independence.jpg");
	//change image
	if(images[0].indexOf(resultArray[1])>=0) document.images[0].src=images[1][images[0].indexOf(resultArray[1])];
	else {
		if (resultArray[1]==0) document.images[0].src="error.jpg";
		else document.images[0].src="study.jpg";
	}
}

//create the calendar array
function createArray(){
	//Create a two-dimensional array that represent every single day in this academic year
	//Those which are not holidays are undefined in the list
	//Those are are the holiday name in the list
	var calendar=new Array(12);
	for (var i=0;i<12;i++){
		//Months with 31 days
		if (i==0||i==2||i==4||i==6||i==7||i==9||i==11) calendar[i]=new Array(31);
		//February
		else if (i==1) calendar[i]=new Array(28);
		//Months with 30 days
		else calendar[i]=new Array(30);
	}
	//Put in all holidays
	calendar[8][6]="Labor Day";
	calendar[9][11]="Fall Recess";
	for (var i=24;i<29;i++)
		calendar[10][i]="Thanksgiving Recess";
	for (var i=23;i<calendar[11].length;i++)
		calendar[11][i]="Winter Recess";
	for (var i=0;i<3;i++)
		calendar[0][i]="Winter Recess";
	calendar[0][17]="Martin Luther King, Jr. Day";
	calendar[1][14]="President's Day";
	for (var i=13;i<20;i++)
		calendar[2][i]="Spring Recess";
	calendar[4][29]="Memorial Day";
	calendar[6][3]="Independence Day";
	return calendar;
}

//check if input date is a holiday
function checkDate(day, month, year, monthArray){
	var calendar=createArray();
	var result;
	var resultArray=new Array(2);
	//Check if in the same year
	if (year<2015 || year>2016) {
		result="\""+monthArray[month-1]+" "+day+", "+year+"\" is not a valid day for this Calendar Holiday Application.";
		resultArray[1]=0;
	}
	else{
		//Check if in the same month range
		if ((year==2015 && month<9) || (year==2016 && month>8)){
			result="\""+monthArray[month-1]+" "+day+", "+year+"\" is not a valid day for this Calendar Holiday Application.";
			resultArray[1]=0;
		}
		else{
			if (day>=calendar[month-1]) {
				result="\""+monthArray[month-1]+" "+day+", "+year+"\" is not a valid day for this Calendar Holiday Application.";
				resultArray[1]=0;
			}
			//If not a holiday
			else if (calendar[month-1][day-1]==undefined) {
				result="\""+monthArray[month-1]+" "+day+", "+year+"\" is not a school holiday at NYU.";
				resultArray[1]=calendar[month-1][day-1];
			}
			//If a holiday
			else {
				result="\""+monthArray[month-1]+" "+day+", "+year+"\" is "+calendar[month-1][day-1]+". This is an NYU Holiday at NYU.";
				resultArray[1]=calendar[month-1][day-1];
			}
		}
	}
	resultArray[0]=result;
	
	//return the output and also the holiday name (also 0 for not a valid day and undefined for not a holiday) for further use
	return resultArray;
}

//main function
function main(){
	var monthArray=["January","February","March","April","May","June","July","August","September","October","November","December"];
	var date=returnDate();
	var day=date.getUTCDate();
	var month=date.getUTCMonth()+1;
	var year=date.getUTCFullYear();
	var resultArray=checkDate(day,month,year,monthArray);
	printResult(resultArray);
}

