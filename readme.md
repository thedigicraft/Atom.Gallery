# Atom Gallery 1.0

A super simple jQuery Photo Gallery. This gallery can be used on any website though it was originaly built for use in AtomCMS 2.0 by The Digital Craft. [View the demo] (http://alanquandt.com/plugins/Atom.Gallery/example/custom.html)

![] (http://alanquandt.com/plugins/Atom.Gallery/example/images/sampleimage.jpg)

## Info

I removed dependance on Twitter's Bootstrap. You can still use it with Bootstrap. You just do not have to.

## How to use this plugin

### Getting Started

Load the Atom Gallery CSS.

```html
<link href="atomGallery.css" type="text/css" rel="stylesheet">	
```

Make sure that you have jQuery loaded before the Atom Gallery script.

```html
<script src="//code.jquery.com/jquery-1.10.2.min.js"></script>		
```

Load the Atom Gallery Javascript source.

```html
<script src="jquery.atomGallery.js"></script>		
```

Example of what should be in your document.

```html
<!-- Atom Gallery CSS -->
<link href="atomGallery.css" type="text/css" rel="stylesheet">

<!-- jQuery Library -->
<script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
<!-- Atom Gallery Script -->
<script src="jquery.atomGallery.js"></script>		
```

### Initialization

Initializing the plugin is easy! Simply use the ID of the gallery container (in this case #gallery) and apply atomGallery() to that ID.

```javascript
$(document).ready(function() {
	$("#gallery").atomGallery();	
});
```

### The HTML

This is the basic HTML required to use the Atom Gallery plugin.

You first need a container ```<div>```. It must have the class "atom-gallery" applied to it as well as an ID that matches the ID you used when initializing the plugin above.

```html
<div class="atom-gallery" id="gallery"></div>
```

Next, within the container ```<div>``` you need to add the photo holder.

```html
<div class="atom-gallery" id="gallery">
	<div class="holder"></div>
</div>	
```

After the photo holder div you need to add an unordered list ```<ul>```. Give this ```<ul>``` the following classes "pagination" and "thumbnails".

```html
<div class="atom-gallery" id="gallery">
	<div class="holder"></div>
	<ul class="pagination thumbnails"></ul>	
</div>	
```

Next, you need to add at least 1 list item ```<li>``` within the unordered list. 1 for each image in the gallery.

```html
<div class="atom-gallery" id="gallery">
	<div class="holder"></div>
	<ul class="pagination thumbnails">
		<li></li>				
	</ul>	
</div>	
```

Within each ```<li>``` you need an ```<a>``` tag. This holds the url for the image that will be loaded into the photo holder ```<div class="holder">``` above

```html
<div class="atom-gallery" id="gallery">
	<div class="holder"></div>
	<ul class="pagination thumbnails">
		<li>
			<a class="thumbnail" href="images/sample_001.jpg">
			</a>
		</li>			
	</ul>	
</div>	
```

Within each ```<a>``` you need an ```<img>``` tag. This holds the url for the image thumbnail. You must give it a class of "thumbnail".

```html
<div class="atom-gallery" id="gallery">
	<div class="holder"></div>
	<ul class="pagination thumbnails">
		<li>
			<a class="thumbnail" href="images/sample_001.jpg">
				<img src="images/sample_001.jpg"></a>
		</li>			
	</ul>	
</div>	
```

Repeat the steps in lines 5-9 in order to add more images to your gallery.

```html
<div class="atom-gallery" id="gallery">
	<div class="holder"></div>
	<ul class="pagination thumbnails">
		<li>
			<a class="thumbnail" href="images/sample_001.jpg">
				<img src="images/sample_001.jpg">
			</a>
		</li>
		<li>
			<a class="thumbnail" href="images/sample_002.jpg">
				<img src="images/sample_002.jpg">
			</a>
		</li>
		<li>
			<a class="thumbnail" href="images/sample_003.jpg">
				<img src="images/sample_003.jpg">
			</a>
		</li>				
	</ul>	
</div>	
```

### Options
We are working on more options. At the moment you have two options available: 'size' and 'cols'.

#### Size
The 'size' option allows you to set the size of the main (holder) image. This size will automatically adjust the size of the thumbnails according to the number of columns set (see below). The default size is set to 720px.

```javascript
$(document).ready(function() {
	$("#gallery").atomGallery({
		size: 720
	});	
});
```

#### Columns
The 'cols' option will allow you to set the number of thumbnail images for each row. The size of the thumbnails will adjust to fit the 'size' of the main (holder) image. The default value is set to 6.

```javascript
$(document).ready(function() {
	$("#gallery").atomGallery({
		cols: 3
	});	
});
```

#### Multiple Options
To use more than 1 option you need to sperate them by the coma character.

```javascript
$(document).ready(function() {
	$("#gallery").atomGallery({
		size: 720,
		cols: 3
	});	
});
```

## Contact & Info

Atom Gallery and the Atom CMS are developed by [Alan Quandt] (alanquandt.com) at [The Digital Craft] (thedigitalcraft.com).  Alan produces free video tutorials on web development, design, and other stuff. The Digital Craft relies on donations and proceeds from private online training sessions.  

[Donate Here](http://thedigitalcraft.com/) or learn more about Alan's [Private Sessions] (http://thedigitalcraft.com/private-training)

> - Documentation: http://alanquandt.com/plugins/Atom.Gallery/example/
> - Official Website: http://thedigitalcraft.com
> - Facebook: http://facebook.com/thedigicraft
> - YouTube Videos: http://youtube.com/thedigicraft
> - Twitter: http://twitter.com/thedigicraft



### Tadoo List

> [ x ] ~~Basic Documentation~~
>
> [ X ] ~~Custom CSS (so you can use without Bootstrap if you want)~~
> 
> [ X ] Image Descriptions (under the photo holder)
>
> [ - ] Full Documentation
> 
> [ X ] Autoselect first image
> 
> [ - ] Animation Options (transitions)
> 
> [ - ] Reusability (not optimized for use more than once on a page)
