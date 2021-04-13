



$(window).scroll(function () {

  });


$(window).resize(function () {
  

});
function sentence(howmuch) {
  $('.text').toggleClass('separated');
  $(".blast").each(function(index){
    $(this).removeClass('active');
  });
  $(".blast").each(function(index){
    var increment = (index + 1) * howmuch
    var topper = $(this).css("top");
    var thing = increment + 'px';
    
    if(topper == '1px'){
      $(this).css('top', thing );
      // $(this).prepend('<span class="to-remove">what?</span>');
    }
    else {
      $(this).css("top",'1px');
      // $('.to-remove').hide().remove();
    } 
  });
}

$( document ).ready(function() {
  document.addEventListener("keydown", function(event) {
    if (event.key === 'e') {
      sentence(40);
    }
  })

  $(".blastable").blast({ delimiter: "sentence", tag: "span" });

  $("#party").click(function(e){    
    e.preventDefault();
    sentence(40);
  });

  $(".blast").click(function(){
    
    if($(this).hasClass('active')){
      $(this).removeClass('active');
    }
    else {
      $(".blast").each(function(index){
        $(this).removeClass('active');
      });
      $(this).addClass('active');
    }
  })
}); //end document ready
