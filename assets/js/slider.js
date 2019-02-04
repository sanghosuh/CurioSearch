horizontalSlider.oninput = function() {
	// remove prior site results
	$('.siteResults').remove();

	// retrieve current slider value
	horizontalSliderValue = horizontalSlider.value;
	verticalSliderValue = verticalSlider.value;
	console.log("horizontalSlider: " + horizontalSliderValue);
	console.log("verticalSlider: " + verticalSliderValue);

	// save proper site results
	if (verticalSliderValue < 15) {
		if (horizontalSliderValue && horizontalSliderValue < 15) {
			searchResults = getSiteResults(level3Results[0]);		
		} else if (horizontalSliderValue >= 15 && horizontalSliderValue < 30) {
			searchResults = getSiteResults(level3Results[1]);
		} else {
			searchResults = getSiteResults(level3Results[2]);
		}
	} else if (verticalSliderValue <= 30) {
		if (horizontalSliderValue > 0 && horizontalSliderValue < 15) {
			searchResults = getSiteResults(level2Results[0]);		
		} else if (horizontalSliderValue >= 15 && horizontalSliderValue < 30) {
			searchResults = getSiteResults(level2Results[1]);
		} else {
			searchResults = getSiteResults(level2Results[2]);
		}		
	} else if (verticalSliderValue <= 50){
		if (horizontalSliderValue > 0 && horizontalSliderValue < 15) {
			searchResults = getSiteResults(level1Results[0]);		
		} else if (horizontalSliderValue >= 15 && horizontalSliderValue < 30) {
			searchResults = getSiteResults(level1Results[1]);
		} else {
			searchResults = getSiteResults(level1Results[2]);
		}			
	}

	// populate site results
	resultSection.insertAdjacentHTML('afterend', searchResults);
}

verticalSlider.oninput = function() {
	// remove prior site results	
	$('.siteResults').remove();

	// retrieve current slider value
	horizontalSliderValue = horizontalSlider.value;
	verticalSliderValue = verticalSlider.value;
	console.log("horizontalSliderValue: " + horizontalSliderValue);
	console.log("verticalSlider: " + verticalSliderValue);

	// save proper site results
	if (verticalSliderValue < 15) {
		console.log("0 <= verticalSliderValue < 15");
		if (horizontalSliderValue >= 0 && horizontalSliderValue < 15) {
			searchResults = getSiteResults(level3Results[0]);		
		} else if (horizontalSliderValue >= 15 && horizontalSliderValue < 30) {
			searchResults = getSiteResults(level3Results[1]);
		} else {
			searchResults = getSiteResults(level3Results[2]);
		}
	} else if (verticalSliderValue <= 30) {
		console.log("15 <= verticalSliderValue <= 30");
		if (horizontalSliderValue > 0 && horizontalSliderValue < 15) {
			searchResults = getSiteResults(level2Results[0]);		
		} else if (horizontalSliderValue >= 15 && horizontalSliderValue < 30) {
			searchResults = getSiteResults(level2Results[1]);
		} else {
			searchResults = getSiteResults(level2Results[2]);
		}		
	} else if (verticalSliderValue <= 50) {
		console.log("30 < verticalSliderValue <= 50");
		if (horizontalSliderValue > 0 && horizontalSliderValue < 15) {
			searchResults = getSiteResults(level1Results[0]);		
		} else if (horizontalSliderValue >= 15 && horizontalSliderValue < 30) {
			searchResults = getSiteResults(level1Results[1]);
		} else {
			searchResults = getSiteResults(level1Results[2]);
		}			
	}

	// populate site results
	resultSection.insertAdjacentHTML('afterend', searchResults);
}

