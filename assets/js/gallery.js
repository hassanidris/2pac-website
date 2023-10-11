// FUNCTIONS

// blurs out gallery rows when user opens lightbox
function galleryObscure() {
	$('.row').addClass('row-blur');
}

// restores gallery style to default
function galleryDefault() {
	$('.row').removeClass('row-blur');
}

// opens lightbox frame with full res version of image 
function openFrame(e) {
	galleryObscure();
	$('#feature-photo').attr('src', $(e.target).attr('full'));
	$('#photo-name').html(e.target.name);
	$('#photo-desc').text($(e.target).attr('desc'));
	// waits until image is loaded to open modal
	$('#feature-photo').on('load', function() {
		$('.aligner-hidden').addClass('aligner');
		addClickOutsideEventListener();
	})
}

// closes lightbox frame 
function closeFrame() {
	galleryDefault();
	$('.aligner-hidden').removeClass('aligner');
	hideInfo(); // hides info bar, sets info button to display for when next ligthbox is opened
	removeClickOutsideEventListener();
}


// function showInfo() {
// 	 $('#info-button').hide();
// 	 $('#info').show();
// }


// function hideInfo() {
// 	$('#info').hide();
// 	$('#info-button').show();
// }


// function detectSensorClass(e) {
// 	if (e.target.className != "sensor") {
// 		closeFrame();
// 	}
// }


// function addClickOutsideEventListener() {
// 	document.addEventListener("click", detectSensorClass);
// }


// function removeClickOutsideEventListener() {
// 	document.removeEventListener("click", detectSensorClass);
// }


// EVENT LISTENERS

$('.thumb').on("click", openFrame);

$('#close-button').on("click", closeFrame);

$('#info-button').on("click", showInfo);

$('#feature-photo').on("click", hideInfo)



