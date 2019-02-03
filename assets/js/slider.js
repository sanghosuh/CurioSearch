horizontalSlider.oninput = function() {
	// remove prior site results
	$('.siteResults').remove();

	// retrieve current slider value
	horizontalSliderValue = horizontalSlider.value;

	// save proper site results
	if (horizontalSliderValue > 0 && horizontalSliderValue < 15) {
		searchResults = getSiteResults(georgeWashingtonCond1Results);		
	} else if (horizontalSliderValue >= 15 && horizontalSliderValue < 30) {
		searchResults = getSiteResults(abrahamLincolnCond3Results);
	} else {
		searchResults = getSiteResults(donaldTrumpCond1Results);
	}
	// populate site results
	resultSection.insertAdjacentHTML('afterend', searchResults);
}