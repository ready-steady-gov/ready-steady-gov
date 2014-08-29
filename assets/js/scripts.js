$( document ).ready(function() {

	// --------------------------------------------------------------------------
	//   Tabs to accordions
	// --------------------------------------------------------------------------

	$('.accordion-tabs-minimal').each(function(index) {
	    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
	});

	$('.accordion-tabs-minimal').on('click', 'li > a', function(event) {
	    if (!$(this).hasClass('is-active')) {
	      event.preventDefault();
	      var accordionTabs = $(this).closest('.accordion-tabs-minimal')
	      accordionTabs.find('.is-open').removeClass('is-open').hide();

	      $(this).next().toggleClass('is-open').toggle();
	      accordionTabs.find('.is-active').removeClass('is-active');
	      $(this).addClass('is-active');
	    } else {
	      event.preventDefault();
	    }
	});

	// --------------------------------------------------------------------------
	//   Accordion
	// --------------------------------------------------------------------------

	$('.js-accordion-trigger').bind('click', function(){
	  	jQuery(this).parent().find('.submenu').slideToggle('fast');  // apply the toggle to the ul
	  	jQuery(this).parent().toggleClass('is-expanded');
	  	event.preventDefault();
	});

	// --------------------------------------------------------------------------
	//   Toggle seacrh on mobile
	// --------------------------------------------------------------------------

	$("#utilities .search-trigger").click(function() {
		$(this).toggleClass("selected"),
  		$('#utilities fieldset').toggleClass("open");
	});

	$("#utilities #menu-toggle").click(function() {
		$(this).toggleClass("selected"),
  		$('#nav-container').toggleClass("open");
	});

	
	// --------------------------------------------------------------------------
	//   External links open in new window
	// --------------------------------------------------------------------------

	$("a[href^='http://']").filter(function() {
		 return this.hostname && this.hostname !== location.hostname;
	}).attr('target', '_blank');

});

	// --------------------------------------------------------------------------
	//   Fitvids
	// --------------------------------------------------------------------------

if ($.fn.fitVids) {
	jQuery(function($){ $('#main').fitVids(); });
}

	// --------------------------------------------------------------------------
	//   Adobe accessible mega menu 
	// --------------------------------------------------------------------------

if (jQuery) {
    (function ($) {
        "use strict";
        $(document).ready(function () {
            // initialize the megamenu
            $('nav#main-nav').accessibleMegaMenu({
                 /* prefix for generated unique id attributes, which are required 
                   to indicate aria-owns, aria-controls and aria-labelledby */
                uuidPrefix: "accessible-megamenu",
                /* css class used to define the megamenu styling */
                menuClass: "nav-menu",
                /* css class for a top-level navigation item in the megamenu */
                topNavItemClass: "nav-item",
                /* css class for a megamenu panel */
                panelClass: "sub-nav",
                /* css class for a group of items within a megamenu panel */
                panelGroupClass: "sub-nav-group",
                /* css class for the hover state */
                hoverClass: "hover",
                /* css class for the focus state */
                focusClass: "focus",
                /* css class for the open state */
                openClass: "open"
            });
            // hack so that the megamenu doesn't show flash of css animation after the page loads.
            setTimeout(function () {
                $('body').removeClass('init');
            }, 500);
        });
    }(jQuery));
}

// --------------------------------------------------------------------------
//   text resize script +/- (uses the jQuery cookie plugin)
// --------------------------------------------------------------------------
var sitefunctions = {
textresize : function(){
	// show text resizing links
	$(".FontSize").show();
	var $cookie_name = "fontCookie";
	var originalFontSize = $("#main-content").css("font-size");
	// if exists load saved value, otherwise store it
	if($.cookie($cookie_name)) {
		var $getSize = $.cookie($cookie_name);
		$("#main-content").css({fontSize : $getSize + ($getSize.indexOf("px")!=-1 ? "" : "px")}); // IE fix for double "pxpx" error
	} else {
		$.cookie($cookie_name, originalFontSize, { expires: 7, path: '/' });
	}
	// reset link
	$(".FontSizeReset").bind("click", function() {
		$("#main-content").css("font-size", originalFontSize);
		$.cookie($cookie_name, originalFontSize, { expires: 7, path: '/' });
	});
	// text "+" link
	$(".FontSizeInc").bind("click", function() {
		var currentFontSize = $("#main-content").css("font-size");
		var currentFontSizeNum = parseFloat(currentFontSize, 10);
		var newFontSize = currentFontSizeNum*1.2;
		if (newFontSize < 25) {
			$("#main-content").css("font-size", newFontSize);
			$.cookie($cookie_name, newFontSize, { expires: 7, path: '/' });
		}
		return false; 
	});
	$(".FontSizeDec").bind("click", function() {
		var currentFontSize = $("#main-content").css("font-size");
		var currentFontSizeNum = parseFloat(currentFontSize, 10);
		var newFontSize = currentFontSizeNum*0.8;
		if (newFontSize > 10) {
			$("#main-content").css("font-size", newFontSize);
			$.cookie($cookie_name, newFontSize, { expires: 7, path: '/' });
		}
		return false;
	});
}
}
//execute text-resize function
sitefunctions.textresize();

