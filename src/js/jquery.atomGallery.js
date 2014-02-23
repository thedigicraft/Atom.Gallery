// Atom Gallery 1.0
// Developed by: Alan Quandt
// Group: The Digital Craft
// WWW: TheDigitalCraft.com


$.fn.atomGallery = function() {
	
	$(".thumbnails img").toggleClass("inactive", true); // Reset all images to slightly faded.
	
	// Handle what happens when a thumbnail is clicked:
	$(".thumbnail").on('click', function() {
		
		event.preventDefault(); // We don't want the links to refresh the page.
		
		var imageloaded = $(this).attr('href'); // Store the URL of the image that has been clicked.
				
		$(".atom-gallery #holder img").replaceWith('<img class="img-thumbnail" src="'+imageloaded+'">'); // Change out the current image.

		// Handle the style changes:
			
			// Reset the style:
			$(".thumbnails img").removeClass("active"); // Clear 'active' class from all images.
			$(".thumbnails img").addClass("inactive"); // Reset all images to be inactive (faded). 
		
		$("> img", this).addClass("active"); // Set selected image to be active (bright).
	
	}); // END .thumbnail on click
		
};
