
$(document).ready( function() {

  $('#password-clear').show();
  $('#user_password').hide();

  $('#password-clear').focus(function() {
      $('#password-clear').hide();
      $('#user_password').show();
    // setCaretPosition(document.getElementById('user_password'),0);

      $('#user_password').focus();
  });

  $('#user_password').blur(function() {
      if($('#user_password').val() == '') {
	  $('#password-clear').show();
	  
	  $('#user_password').hide();
      }
  });
  
  $('#user_email').one("keypress", function () {
     $('#user_email').removeClass('darkgreytext').addClass('blacktext');
     $('#user_email').val('');
  });
  
  $('#user_email').focus(function() {
   
      if($('#user_email').val() == 'Email' || $('#user_email').val() == '' ) {
	   
	 $('#user_email').removeClass('blacktext').addClass('darkgreytext');
         
      }
  });
  
  $('#user_email').click(function() {
      if($('#user_email').val() == 'Email' || $('#user_email').val() == '' ) {
	$('#user_email').caret({start:0,end:0});
      }
  });
  
   $('#user_email').blur(function() {
      if($('#user_email').val() == 'Email' || $('#user_email').val() == '' ) {
	  
	  $('#user_email').removeClass('darkgreytext').addClass('blacktext');
    
      }
  });
});