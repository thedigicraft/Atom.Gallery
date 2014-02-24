// Atom Gallery 1.0
// Developed by: Alan Quandt
// Group: The Digital Craft
// WWW: TheDigitalCraft.com


$.fn.atomGallery = function(options) {
	
	// Default Settings:
    var opt = $.extend({
        // These are the defaults.
        size: 720,
        cols: 5,
        margin: 2,
        padding: 10,
        border: 1
    }, options );
	
	
	var extra = (opt.border * 2) + (opt.margin * 2) + (opt.padding * 2);
	var holder = opt.size + extra;
	//var thumbsize = (opt.size - (((opt.border * 2) + (opt.margin * 2)) * opt.cols)) / opt.cols;
	var thumb = (((holder - extra) / opt.cols) - extra) + (extra/opt.cols);
	
	// Debug stuff:
		//var message = "extra:"+extra+", holder size:"+holder+", thumb size:"+thumb;
		//alert(message);
	
	// Holder Settings:
	$(".holder").width(opt.size);	
		

	// Initialize Gallery:

		// Thumbnail:
		$(".thumbnails img").toggleClass("inactive", true); // Set all images to inactve (faded).
		$(".thumbnails li:first-child img").removeClass("inactive"); // Set first image class to actve (bright).
		$(".thumbnails li:first-child img").addClass("active"); // Set first image class to actve (bright).

			// Thumbnail Settings:
			$(".thumbnails img").width(thumb);
							
		// Holder Image:
		var imageurl = $(".thumbnails li:first-child a").attr('href'); // Store the URL of the first thumbnail image.
		var imagedesc = $(".thumbnails li:first-child a img").attr('alt'); // Store the Description of the first thumbnail image.	
		
		$(".atom-gallery .holder").append('<img class="img-thumbnail" src="'+imageurl+'">'); // Set the initial image.
		$(".atom-gallery .holder").append('<div class="description">'+imagedesc+'</div>'); // Set the initial image description.

			// Holder Image Settings:
			$(".holder img").width(opt.size);	
		
	
	// Handle what happens when a thumbnail is clicked:
	$(".thumbnail").on('click', function() {
		
		event.preventDefault(); // We don't want the links to refresh the page.
		
		var imageurl = $(this).attr('href'); // Store the URL of the image that has been clicked.
		var imagedesc = $("> img", this).attr('alt'); // Store the Description of the image that has been clicked.
				
		$(".atom-gallery .holder img").replaceWith('<img class="img-thumbnail" src="'+imageurl+'">'); // Change out the current image.
		$(".atom-gallery .holder div.description").replaceWith('<div class="description">'+imagedesc+'</div>'); // Change out the current image description.
			// Holder Image Settings:
			//$(".holder img").width(settings.holder_width);	
			
		// Handle the style changes:
			
			// Reset the style:
			$(".thumbnails img").removeClass("active"); // Clear 'active' class from all images.
			//$(".thumbnails a img").removeClass("inactive"); // Clear 'active' class from all images.
			$(".thumbnails img").addClass("inactive"); // Reset all images to be inactive (faded). 
		
		$("> img", this).addClass("active"); // Set selected image to be active (bright).
	
	}); // END .thumbnail on click
		
};
