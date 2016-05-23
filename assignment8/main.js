

var form=document.forms[0];

function purchase(item){
	if (item=='red'){
		document.getElementById("item1").style.border="5px solid red";
		document.getElementById("product1").style.visibility="visible";
		form.quantity1.value=Number(form.quantity1.value)+Number(1);
		total();
	}
	else if (item=='1989'){
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
	form.grandtotal.value=(Number(subtotal1)+Number(subtotal2)).toFixed(2);
}