// This jQuery file manipulates all the animation in asg6.html file

$(document).ready(function(){
	$("#style").on("click",function(){
		$("#special").css("color","green");
		$(".highlight").css("background-color","yellow");
		$("p").each(function(){
			$(this).css({"font-family":"Helvetica","color":"#57068c","font-size":"1.2em"});
			alert($(this).text());
		});
	});
});

$(document).ready(function(){
	$("#hide").on("click",function(){
		$("img").hide();
	});
	$("#show").on("click",function(){
		$("img").show();
	});
	$("#fadeout").on("click",function(){
		$("img").fadeOut("slow");
	});
});

$(document).ready(function(){
	$("#animate").on("click",function(){
		$("#square").animate({
			opacity: "0.5",
			height: "+=200px",
			width: "+=100px",
			left: "-=300px"
		});
	});
});

$(document).ready(function(){
	$("#name").on("change",function(){
		if ($(this).val()==null || $(this).val()==""){
			$(this).focus();
			$(this).css("background-color","yellow");
			alert("You should input a value for "+$(this).attr("name"));
		}
		else{
			$("#demo").html("<p>Name: "+$(this).val()+"</p>");
			if ($("#password").val()==null || $("#password").val()==""){
				$("#password").focus();
				$("#password").css("background-color","yellow");
				alert("You should input a value for "+$("#password").attr("name"));
			}
			else{
				$("#demo").html($("#demo").html()+"<p>Password: "+$("#password").val()+"</p>");
			}
		}
	});
	$("#password").on("change",function(){
		if ($("#name").val()==null || $("#name").val()==""){
			$("#name").focus();
			$("#name").css("background-color","yellow");
			alert("You should input a value for "+$("#name").attr("name"));
		}
		else{
			$("#demo").html("<p>Name: "+$("#name").val()+"</p>");
			if ($(this).val()==null || $(this).val()==""){
				$(this).focus();
				$(this).css("background-color","yellow");
				alert("You should input a value for "+$(this).attr("name"));
			}
			else{
				$("#demo").html($("#demo").html()+"<p>Password: "+$(this).val()+"</p>");
			}
		}
	});
})