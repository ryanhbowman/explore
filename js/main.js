



$(window).scroll(function () {

  });


$(window).resize(function () {
  

});


$( document ).ready(function() {
  document.addEventListener("keydown", function(event) {
    if (event.key === 'e') {
      $(".container").each(function(){
        $(this).toggleClass('block-it');
      });
    }
  })

  $(".blastable").blast({ delimiter: "sentence", tag: "span" });

  $("#party").click(function(e){
    
    e.preventDefault();
    $(".container").each(function(){
      $(this).toggleClass('block-it');
    });
  
  });
});
