
$(document).ready( function() {

  $('#password-clear').show();
  $('#user_password').hide();

  $('#password-clear').focus(function() {
      $('#password-clear').hide();
      $('#user_password').show();
    // setCaretPosition(document.getElementById('user_password'),0);

      $('#user_password').focus();
  });
   $('#password-clear-create').focus(function() {
      $('#password-clear-create').hide();
      $('#signup_user_password').show();
    // setCaretPosition(document.getElementById('user_password'),0);

      $('#signup_user_password').focus();
  });
   
    $('#password-clear-confirm').focus(function() {
      $('#password-clear-confirm').hide();
      $('#signup_user_password_confirmation').show();
    // setCaretPosition(document.getElementById('user_password'),0);

      $('#signup_user_password_confirmation').focus();
  });
  

  $('#user_password').blur(function() {
      if($('#user_password').val() == '') {
	  $('#password-clear').show();
	  
	  $('#user_password').hide();
      }
  });
  $('#signup_user_password').blur(function() {
      if($('#signup_user_password').val() == '') {
	  $('#password-clear-create').show();
	  
	  $('#signup_user_password').hide();
      }
  });
    $('#signup_user_password_confirmation').blur(function() {
      if($('#signup_user_password').val() == '') {
	  $('#password-clear-confirm').show();
	  
	  $('#signup_user_password_confirmation').hide();
      }
  });
  
  
  $('#user_email').one("keypress", function () {
    // $('#user_email').removeClass('darkgreytext').addClass('blacktext');
     $('#user_email').val('');
  });
  
  $('#user_email').focus(function() {
   
      if($('#user_email').val() == 'email' || $('#user_email').val() == '' ) {
	   
	 //$('#user_email').removeClass('blacktext').addClass('darkgreytext');
         $('#user_email').val('');
      }
  });
  
    $('#signup_user_email').focus(function() {
   
      if($('#signup_user_email').val() == 'email' || $('#signup_user_email').val() == '' ) {
	   
	 //$('#user_email').removeClass('blacktext').addClass('darkgreytext');
         $('#signup_user_email').val('');
      }
  });
  
  $('#user_email').click(function() {
      if($('#user_email').val() == 'Email' || $('#user_email').val() == '' ) {
	$('#user_email').caret({start:0,end:0});
      }
  });
  
   $('#user_email').blur(function() {
      if( $('#user_email').val() == '' ) {
	  
	  //$('#user_email').removeClass('darkgreytext').addClass('blacktext');
	$('#user_email').val('email');
      }
  });
   
   $('#signup_user_email').blur(function() {
      if( $('#signup_user_email').val() == '' ) {
	  
	  //$('#user_email').removeClass('darkgreytext').addClass('blacktext');
	$('#signup_user_email').val('email');
      }
  });
   
});