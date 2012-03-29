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
    if ($.browser.msie) //only rotate banners if not IE browser
    {
      rotate_banners();
    }
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
  
  $('input.tags_box, input.url_box, input.name_box, textarea.description').focus(function() {
    if ($(this).val() == 'Keyword(s)' || $(this).val() == 'Enter your url' || $(this).val() == 'Enter your description' || $(this).val() == 'Enter your title')
      $(this).val('');
  });
  
  $('input.tags_box').blur(function() {
    if ($(this).val() == '')
      $(this).val('Keyword(s)');
  });
  
  $('input.name_box').blur(function() {
    if ($(this).val() == '')
      $(this).val('Enter your title');
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
     $(this).parent().find('input[type=submit]').show();
     $(this).parent().parent().parent().find('input, textarea').removeAttr('disabled');
   });
   
   $('input[type=submit]').click(function() {
     $(this).hide();
     $(this).parent().find('a.edit_btn').show();
   //  $(this).parent().parent().find('input, textarea').attr('disabled','disabled');
    // $(this).trigger('click');
     
  });
   
   $('a#add_topic_btn').click(function() {
    $('tr#new_topic_row').slideDown(6000);
     
  });
   
   
});

function rotate_banners()
{
    $('div#rotating_hero_div img#hero_image').show();
    $('div#rotating_hero_div img.banners').hide();    
    //$('div#effient_banner img#banner1').fadeIn(7000);
  //  $('div#effient_banner img#banner1').delay(1000);
//    $('div#effient_banner img#banner1').hide();
      
            
    //--------------------------
     $("div#rotating_hero_div").queue("bannerQ", function() {
	$('div#rotating_hero_div img#hero_image').fadeIn(2500);
	var self = this;
	setTimeout(function() {
	  $(self).dequeue("bannerQ");
	}, 6000);
    });

    
     $("div#rotating_hero_div").queue("bannerQ", function() {
       $('div#rotating_hero_div img#hero_image').hide();
	$('div#rotating_hero_div img#hero_image1').fadeIn(2500);
	var self = this;
	setTimeout(function() {
	  $(self).dequeue("bannerQ");
	}, 6000);
    });
     
     $("div#rotating_hero_div").queue("bannerQ", function() {
        $('div#rotating_hero_div img#hero_image1').hide();

	$('div#rotating_hero_div img#hero_image2').fadeIn(2500);
	var self = this;
	setTimeout(function() {
	  $(self).dequeue("bannerQ");
	}, 6000);
    });
     
     $("div#rotating_hero_div").queue("bannerQ", function() {
        $('div#rotating_hero_div img#hero_image2').hide();

	$('div#rotating_hero_div img#hero_image3').fadeIn(2500);
	var self = this;
	setTimeout(function() {
	  $(self).dequeue("bannerQ");
	}, 6000);
    });
    
      $("div#rotating_hero_div").queue("bannerQ", function() {
	$('div#rotating_hero_div img#hero_image3').hide();
	$('div#rotating_hero_div img#hero_image4').fadeIn(2500);
	var self = this;
	setTimeout(function() {
	  $(self).dequeue("bannerQ");
	}, 6000);
    });   
      
     
    $("div#rotating_hero_div").dequeue("bannerQ");
    
}