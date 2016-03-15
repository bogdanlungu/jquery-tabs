$(document).ready(function(){
  $('body').removeClass('noJs').addClass('yesJs');

  $('#tabs a').on('click', function(e){
    $('#tabs a.current').removeClass('current');
    $('.tab-section:visible').hide();
    $(this.hash).show();
    $(this).addClass('current');
    e.preventDefault();
  }).filter(':first').click();
});
