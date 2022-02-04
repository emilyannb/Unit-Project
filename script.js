var pics=[];
var userInput;

$(".add").click(function() {
   userInput=$(".picture-url").val();
    pics.push(userInput);
     $(".gallery").append('<img src='+userInput+'>');
  });
    
   
