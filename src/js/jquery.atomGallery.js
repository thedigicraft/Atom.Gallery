// Atom Gallery 1.0
// Developed by: Alan Quandt
// Group: The Digital Craft


$.fn.atomGallery = function() {

	$(".thumbnail").on('click', function() {
		
		event.preventDefault();
		
		var imageloaded = $(this).attr('href');
				
		$(".atom-gallery #holder img").replaceWith('<img class="img-thumbnail" src="'+imageloaded+'">');
		
		$(".thumbnails img").css("opacity", ".8");
		$("> img", this).css("opacity", "1");
	
	});



};
