



$(window).scroll(function () {

  });


$(window).resize(function () {
  

});


$( document ).ready(function() {
  document.addEventListener("keydown", function(event) {
    if (event.key === 'e') {
      $("p").each(function(){
        $(this).toggleClass('block-it');
      });
    }
  })

  $(".blastable").blast({ delimiter: "sentence" });

  $("#party").click(function(e){
    
    e.preventDefault();
    $("p").each(function(){
      $(this).toggleClass('block-it');
    });
  
  });
});
