// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready( function() {
  $('img.hidecode_btn').click( function() {
    $(this).closest('tr').next('tr.showcode_row').toggle();
    $(this).hide();
    $(this).parent().parent().find('img.seecode_btn').show();
    return false;
  });
  
   $('img.seecode_btn').click( function() {
    $(this).closest('tr').next('tr.showcode_row').toggle();
    $(this).hide();
    $(this).parent().parent().find('img.hidecode_btn').show();
    return false;
  });
  
  $('input.tags_box, input.url_box, textarea.description').focus(function() {
    if ($(this).val() == 'Keyword(s)' || $(this).val() == 'Enter your url' || $(this).val() == 'Enter your description')
      $(this).val('');
  });
  
  $('input.tags_box').blur(function() {
    if ($(this).val() == '')
      $(this).val('Keyword(s)');
  });
  
  $('input.url_box').blur(function() {
    if ($(this).val() == '')
      $(this).val('Enter your url');
  });
  
   $('textarea.description').blur(function() {
    if ($(this).val() == '')
      $(this).val('Enter your description');
  });
   
   $('textarea.manager_copytext').focus(function () {
     $(this).select();
     $(this).mouseup(function () {
	$(this).unbind('mouseup');
	return false;
    });
  });
   
   $('a.edit_btn').click(function() {
     $(this).hide();
     $(this).parent().find('a.save_btn').show();
     $(this).parent().parent().find('input, textarea').removeAttr('disabled');
   });
   
   $('a.save_btn').click(function() {
     $(this).hide();
     $(this).parent().find('a.edit_btn').show();
     $(this).parent().parent().find('input, textarea').attr('disabled','disabled');
 
     
  });
   
   
});