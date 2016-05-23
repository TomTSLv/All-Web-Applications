//JavaScript Automation for Online Store Website All Comes Here

window.onload=checkCookie;

var form=document.forms[0];

function purchase(item){
	if (item=='Your Truly'){
		document.getElementById("item1").style.border="5px solid red";
		document.getElementById("product1").style.visibility="visible";
		form.quantity1.value=Number(form.quantity1.value)+Number(1);
		total();
	}
	else if (item=='My Everything'){
		document.getElementById("item2").style.border="5px solid red";
		document.getElementById("product2").style.visibility="visible";
		form.quantity2.value=Number(form.quantity2.value)+Number(1);
		total();
	}
}

function total(){
	form.subtotal1.value=Number(form.price1.value)*Number(form.quantity1.value);
	var subtotal1=form.subtotal1.value;
	form.subtotal2.value=Number(form.price2.value)*Number(form.quantity2.value);
	var subtotal2=form.subtotal2.value;
	var shipcost=form.shipcost.value;
	form.grandtotal.value=Number(subtotal1)+Number(subtotal2)+Number(shipcost);
	console.log(form.zip.value);
}

function changeShipCost(){
	if (document.getElementById("pickup").checked){
		form.shipcost.value=5;
	}
	if (document.getElementById("shipping").checked){
		form.shipcost.value=16.5;
	}
}

function receipt(){
	var firstnameObj=form.firstname;
	var lastnameObj=form.lastname;
	var phoneObj=form.phone;
	var emailObj=form.email;
	var addressObj=form.address;
	var cityObj=form.city;
	var stateObj=form.state;
	var zipObj=form.zip;
	var typeObj=form.type;
	var cardNumObj=form.cardNum;
	var expireObj=form.expire;
	var codeObj=form.code;
	var grandtotalObj=form.grandtotal;
	if (validate(firstnameObj)){
		if (validate(lastnameObj)){
			if (validatePhone(phoneObj)){
				if (validateEmail(emailObj)){
					if (validate(addressObj)){
						if (validate(cityObj)){
							if (validateZip(zipObj)){
								if (validateCardNum(cardNumObj)){
									if (validateExpireDate(expireObj)){
										if (validateCode(codeObj)){
											generateReceipt(firstnameObj,lastnameObj,phoneObj,emailObj,addressObj,cityObj,stateObj,zipObj,typeObj,cardNumObj,expireObj,codeObj,grandtotalObj);
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

function validate(object){
	if (object.value == "" || object.value == null){
		object.focus();
		object.select();
		object.style.backgroundColor="#FF00FF";
		object.style.borderStyle="outset;"
		alert("You must enter a value for: "+object.name);
		return false;
	}
	else{
		return true;
	}
}

function validatePhone(phoneObj){
	if (phoneObj.value == "" || phoneObj.value == null){
		alert("You must enter a value for: "+phoneObj.name);
		phoneObj.focus();
		phoneObj.select();
		phoneObj.style.backgroundColor="#FF00FF";
		phoneObj.style.borderStyle="outset";
		return false;
	}
	else if (Number(phoneObj.value)==NaN || phoneObj.value.length!=10){
		if (phoneObj.value.match(/\(\d{3}\)\d{3}-\d{4}/g)!=null) return true;
		alert("You enter a wrong phone number ("+phoneObj.value+"). Please enter proper one!");
		phoneObj.focus();
		phoneObj.select();
		phoneObj.style.backgroundColor="#FF00FF";
		phoneObj.style.borderStyle="outset";
		return false;
	}
	else{
		return true;
	}
}

function validateEmail(emailObj){
	if (emailObj.value == "" || emailObj.value == null){
		alert("You must enter a value for: "+emailObj.name);
		emailObj.focus();
		emailObj.select();
		emailObj.style.backgroundColor="#FF00FF";
		emailObj.style.borderStyle="outset";
		return false;
	}
	else if (emailObj.value.match(/[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+/g)==null){
		alert("You enter a wrong email address ("+emailObj.value+"). Please enter proper one!");
		emailObj.focus();
		emailObj.select();
		emailObj.style.backgroundColor="#FF00FF";
		emailObj.style.borderStyle="outset";
		return false;
	}
	return true;
}

function validateZip(zipObj){
	if (zipObj.value == "" || zipObj.value == null){
		alert("You must enter a value for: "+zipObj.name);
		zipObj.focus();
		zipObj.select();
		zipObj.style.backgroundColor="#FF00FF";
		zipObj.style.borderStyle="outset";
		return false;
	}
	else if (Number(zipObj.value)==NaN || zipObj.value.length!=5){
		alert("Your enter a wrong zip code ("+zipObj.value+"). Please enter a proper one!");
		zipObj.focus();
		zipObj.select();
		zipObj.style.backgroundColor="#FF00FF";
		zipObj.style.borderStyle="outset";
		return false;
	}
	else{
		return true;
	}
}

function validateCardNum(cardNumObj){
	if (cardNumObj.value == "" || cardNumObj.value == null){
		alert("You must enter a value for: "+cardNumObj.name);
		cardNumObj.focus();
		cardNumObj.select();
		cardNumObj.style.backgroundColor="#FF00FF";
		cardNumObj.style.borderStyle="outset";
		return false;
	}
	else if (Number(cardNumObj.value)==NaN || cardNumObj.value.length!=16){
		alert("Your enter a wrong card number ("+cardNumObj.value+"). Please enter a proper one!");
		cardNumObj.focus();
		cardNumObj.select();
		cardNumObj.style.backgroundColor="#FF00FF";
		cardNumObj.style.borderStyle="outset";
		return false;
	}
	else{
		return true;
	}
}

function validateExpireDate(expireObj){
	if (expireObj.value == "" || expireObj.value == null){
		alert("You must enter a value for: "+expireObj.name);
		expireObj.focus();
		expireObj.select();
		expireObj.style.backgroundColor="#FF00FF";
		expireObj.style.borderStyle="outset";
		return false;
	}
	else if (expireObj.value.match(/\d{2}\/\d{2}/g)==null){
		alert("You enter a wrong expire date ("+expireObj.value+"). Please enter proper one!");
		expireObj.focus();
		expireObj.select();
		expireObj.style.backgroundColor="#FF00FF";
		expireObj.style.borderStyle="outset";
		return false;
	}
	return true;
}

function validateCode(codeObj){
	if (codeObj.value == "" || codeObj.value == null){
		alert("You must enter a value for: "+cardNumObj.name);
		codeObj.focus();
		codeObj.select();
		codeObj.style.backgroundColor="#FF00FF";
		codeObj.style.borderStyle="outset";
		return false;
	}
	else if (Number(codeObj.value)==NaN || codeObj.value.length!=3){
		alert("Your enter a wrong card number ("+codeObj.value+"). Please enter a proper one!");
		codeObj.focus();
		codeObj.select();
		codeObj.style.backgroundColor="#FF00FF";
		codeObj.style.borderStyle="outset";
		return false;
	}
	else{
		return true;
	}
}

function generateReceipt(firstnameObj,lastnameObj,phoneObj,emailObj,addressObj,cityObj,stateObj,zipObj,typeObj,cardNumObj,expireObj,codeObj,grandtotalObj){
	document.open();
	var date=new Date();
	document.write("<p>"+date+"</p>");
	document.write("<h1>Your Receipt</h1>");
	document.write("<hr>");
	document.write("<h2>Purchase Details</h2>");
	document.write("<p>Your Truly "+"Price: "+form.price1.value+" Quantity: "+form.quantity1.value+" Subtotal: "+form.subtotal1.value+"</p>");
	document.write("<p>My Everything "+"Price: "+form.price2.value+" Quantity: "+form.quantity2.value+" Subtotal: "+form.subtotal2.value+"</p>");
	document.write("<p>Shipping Cost: "+form.shipcost.value+"</p>");
	document.write("<p>Grand Total: "+grandtotalObj.value+"</p>");
	document.write("<hr>");
	document.write("<h2>Personal Information</h2>");
	document.write("<p>First Name: "+firstnameObj.value+ " Last Name: "+lastnameObj.value+"</p>");
	document.write("<p>Phone Number: "+phoneObj.value+"</p>");
	document.write("<p>Email: "+emailObj.value+"</p>");
	document.write("<p>Address: "+addressObj.value+", "+cityObj.value+", "+stateObj.options[stateObj.selectedIndex].text+", "+zipObj.value+"</p>");
	document.write("<p>Credit Card Type: "+typeObj.options[typeObj.selectedIndex].text+"</p>");
	var cardDisplay="XXXX-XXXX-XXXX-"+cardNumObj.value.substring(cardNumObj.value.length-4);
	document.write("<p>Credit Card Number: "+cardDisplay+"</p>");
	document.write("<p>Credit Card Expire Date: "+expireObj.value+"</p>");
	document.write("<p>Credit Card Security Code: "+codeObj.value+"</p>");
	document.close();
}

function checkCookie(){
	if (document.cookie=="" || document.cookie==null) {
		//alert("Enter some value!")
		return;
	}
	var keyValueArray=getCookie();

	var firstname;
	var lastname;
	for (var i=0;i<keyValueArray.length;i++){
		if (keyValueArray[i][0]=="firstname") firstname=keyValueArray[i][1];
		else if (keyValueArray[i][0]=="lastname") lastname=keyValueArray[i][1];
	}
	if (firstname==undefined || lastname==undefined){
		//alert("Enter some value!");
		return;
	}
	if (confirm("Are you "+firstname+" "+lastname+"?")){
		for (var i=0;i<keyValueArray.length;i++){
			if (keyValueArray[i][0]=="stateSelectedIndex") {
				document.getElementById("state").selectedIndex=Number(keyValueArray[i][1]);
				continue;
			}
			document.getElementById(keyValueArray[i][0]).value=keyValueArray[i][1];
		}
	}
}

function getCookie(){
	var infoCookies=new Array();
	infoCookies=document.cookie;
	var infoCookieArray=new Array();
	infoCookieArray=infoCookies.split(",");
	var keyValueArray=new Array();
	for (var i=0;i<infoCookieArray.length;i++){
		var keyValue=new Array();
		keyValue[0]=infoCookieArray[i].split("=")[0];
		keyValue[1]=unescape(infoCookieArray[i].split("=")[1]);
		keyValueArray[i]=keyValue;
	}
	return keyValueArray;
}

function setCookie(){
	var firstnameObj=form.firstname;
	var lastnameObj=form.lastname;
	var phoneObj=form.phone;
	var emailObj=form.email;
	var addressObj=form.address;
	var cityObj=form.city;
	var stateObj=form.state;
	var zipObj=form.zip;
	var typeObj=form.type;
	var cardNumObj=form.cardNum;
	var expireObj=form.expire;
	var codeObj=form.code;
	var grandtotalObj=form.grandtotal;
	var expireDate=new Date();
	expireDate.setMonth(expireDate.getMonth()+6);0
	var currentCookie="firstname="+escape(firstnameObj.value)+",lastname="+escape(lastnameObj.value)+",phone="+escape(phoneObj.value)+",email="+escape(emailObj.value)+",address="+escape(addressObj.value)
						+",city="+escape(cityObj.value)+",stateSelectedIndex="+escape(stateObj.selectedIndex)+",zip="+escape(zipObj.value);
	currentCookie+="; expires="+(expireDate.toGMTString());
	document.cookie=currentCookie;
}

