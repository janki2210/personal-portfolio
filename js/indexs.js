$(document).ready(function() {
    $('#menu-btn').click(function() {
        $('ul').toggleClass('show');
    });
});

$(document).ready(function() {
    $('.btn').click(function() {
      const value = $(this).attr('data-filter');
      if(value == 'all'){
          $('.portfoliobox').show('1000');
      }
      else{
        $('.portfoliobox').not('.'+value).hide('1000'); 
        $('.portfoliobox').filter('.'+value).show('1000'); 
      }
    });
    $('.portfoliobox').click(function(){
        $(this).addclass('active').siblings().removeclass('active');
    });
});