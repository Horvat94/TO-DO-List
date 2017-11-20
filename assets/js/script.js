$("ul").on("click","li",function(){
	//$(this).css("text-decoration","line-through");
	/*if ($(this).hasClass("done")) {
		$(this).removeClass("done");
	}else{
		$(this).addClass("done")}*/
		$(this).toggleClass("done");
	});

$(".fa-check").on("click",function(){
	$("input[type='text']").fadeToggle(400,function(){
	});
});

//klik na x fadout and delete
$("ul").on("click",".rem",function(event){//event poljubno ime
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();//preprečimo booble
});

$("input[type='text']").on("keypress",function(event){
	if(event.which === 13){
		var tmp = $(this).val();
		$("ul").append("<li><span class='rem'><i class='fa fa-trash' aria-hidden='true'></i></span> "+ tmp +"</li>");
		$(this).val("");
	}
	
});