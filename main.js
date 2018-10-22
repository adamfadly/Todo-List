// check off specific Todo by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// click on X to delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text'").keyup(function(event){
    if(event.which === 13){
     // garbing new Todo  text from input
     var todoText = $(this).val();
     // create new li and add to ul
     $("ul").append("<li><span> X </span>" + todoText + "<li>")
     $(this).val("");

    }
});