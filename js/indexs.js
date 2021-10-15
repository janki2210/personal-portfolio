$(document).ready(function() {
    $('#menu-btn').click(function() {
        $('ul').toggleClass('show');
    });
});

$(document).ready(function() {
    $('.buttons').click(function() {
      const value = $(this).attr('data-filter');
      if(value == 'all'){
          $('.image').show('1000');
      }
      else{
        $('.image').not('.'+value).hide('1000'); 
        $('.image').filter('.'+value).show('1000'); 
      }
    });
    $('.image').click(function(){
        $(this).addclass('active').siblings().removeclass('active');
    });
});