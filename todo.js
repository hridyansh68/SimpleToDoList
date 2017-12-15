$('ul').on("click","li",function () {

	$(this).toggleClass("completed");
	// body...
});


$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
    	$(this).remove();
    }) ;
	event.stopPropagation();

});


$('input[type="text"]').on("keypress",function(event){
     if(event.which===13)
     {   
          var todoText = $(this).val();
          $(this).val("");
          if(todoText===""){
          	alert("Please enter a todo before pressing enter");
          }
          else{
          $("ul").append("<li><span><i class='fa fa-trash'></i></span>  "+todoText+"</li>");
           }
     }
   
});

$(".fa-plus").click(function(){
   $("input[type='text']").fadeToggle();
})