$(document).ready(function(){

  $('form').submit(function(e){
    e.preventDefault();
  });

  $("input[type='submit']").on("click",function(){

     var name = $("input[name='fname']").val();
     var email = $("input[name='femail']").val();
     var ph = $("input[name='num']").val();
     var feed = $("textarea").val();

    // Create data string for sending to php //

    var data = "fname="+name+"&femail="+email+"&fph="+ph+"&feed="+feed;

   // Validation //

   function validate(){

     var x = 0;

     if(name === ""){
       $('form input')[0].style.border = "1px solid #f00";
       x++;
     }else{
       $('form input')[0].style.border = "1px";
     }

     if(ph === "" || typeof parseInt(ph) !== "number" || ph.toString().length < 10){
       $('form input')[2].style.border = "1px solid #f00";
       x++;
     }else{
       $('form input')[2].style.border = "1px";
     }

     if(feed === ''){
       $('form textarea')[0].style.border = "1px solid #f00";
       x++;
     }else{
       $('form textarea')[0].style.border = "1px";
   }

   if(email === ""){
     $('form input')[1].style.border = "1px solid #f00";
     x++;
   }else{
     if(email.indexOf('@') < 0 || email.indexOf('.') < 0 || (email.indexOf('.') - email.indexOf('@') < 2)){
      $('form input')[1].style.border = "1px solid #f00";
      x++;
     }
     else{
       $('form input')[1].style.border = "1px";
     }
   }

   if(x === 0){
     return true;
   }else{
     return false;
   }
 }

 // POSTing Data //

   if(validate()){
     $.ajax({
      type : "POST",
      url : "js/form_submit.php",
      data : data,
      cache : false,
      success: function(res){
        $('.res')[0].innerHTML = res;
        $("input[name='fname']")[0].value = "";
        $("input[name='femail']")[0].value = "";
        $("input[name='fph']")[0].value = "";
        $("textarea")[0].value = "";
      }
     });
     $('.res').html("<div class='submit-loader loading'></div><span>Data is sending...</span>");
   }
   return false;
  });
});


// Scroll Effect //

$(window).scroll(function () {
if ($(window).scrollTop() >= $(window).height()){
$('.navbar').css('background','rgba(0, 0, 0,0.8)');
} else {
$('.navbar').css('background','transparent');
}
});

// Scroll Effect Ends //
