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
		if (horizontalSliderValue < 15) {
			searchResults = getSiteResults(level3Cond3Results[0]);
			$('.searchBox').attr('value', level3Cond3Results[3][0]);
		} else if (horizontalSliderValue <= 30) {
			searchResults = getSiteResults(level3Cond3Results[1]);
			$('.searchBox').attr('value', level3Cond3Results[3][1]);
		} else if (horizontalSliderValue <= 50) {
			searchResults = getSiteResults(level3Cond3Results[2]);
			$('.searchBox').attr('value', level3Cond3Results[3][2]);
		}
	} else if (verticalSliderValue <= 30) {
		if (horizontalSliderValue < 15) {
			searchResults = getSiteResults(level2Cond3Results[0]);
			$('.searchBox').attr('value', level2Cond3Results[3][0]);
		} else if (horizontalSliderValue <= 30) {
			searchResults = getSiteResults(level2Cond3Results[1]);
			$('.searchBox').attr('value', level2Cond3Results[3][1]);
		} else if (horizontalSliderValue <= 50) {
			searchResults = getSiteResults(level2Cond3Results[2]);
			$('.searchBox').attr('value', level2Cond3Results[3][2]);
		}		
	} else if (verticalSliderValue <= 50){
		if (horizontalSliderValue < 15) {
			searchResults = getSiteResults(level1Cond3Results[0]);
			$('.searchBox').attr('value', level1Cond3Results[3][0]);
		} else if (horizontalSliderValue <= 30) {
			searchResults = getSiteResults(level1Cond3Results[1]);
			$('.searchBox').attr('value', level1Cond3Results[3][1]);
		} else if (horizontalSliderValue <= 50) {
			searchResults = getSiteResults(level1Cond3Results[2]);
			$('.searchBox').attr('value', level1Cond3Results[3][2]);
		}			
	}

	// populate site results
	resultSection.insertAdjacentHTML('afterend', searchResults);
	console.log($('.searchBox').attr('value'));
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
		if (horizontalSliderValue < 15) {
			searchResults = getSiteResults(level3Cond3Results[0]);		
			$('.searchBox').attr('value', level3Cond3Results[3][0]);
		} else if (horizontalSliderValue <= 30) {
			searchResults = getSiteResults(level3Cond3Results[1]);
			$('.searchBox').attr('value', level3Cond3Results[3][1]);
		} else if (horizontalSliderValue <= 50) {
			searchResults = getSiteResults(level3Cond3Results[2]);
			$('.searchBox').attr('value', level3Cond3Results[3][2]);
		}
	} else if (verticalSliderValue <= 30) {
		console.log("15 <= verticalSliderValue <= 30");
		if (horizontalSliderValue < 15) {
			searchResults = getSiteResults(level2Cond3Results[0]);
			$('.searchBox').attr('value', level2Cond3Results[3][0]);
		} else if (horizontalSliderValue <= 30) {
			searchResults = getSiteResults(level2Cond3Results[1]);
			$('.searchBox').attr('value', level2Cond3Results[3][1]);
		} else if (horizontalSliderValue <= 50) {
			searchResults = getSiteResults(level2Cond3Results[2]);
			$('.searchBox').attr('value', level2Cond3Results[3][2]);
		}		
	} else if (verticalSliderValue <= 50) {
		console.log("30 < verticalSliderValue <= 50");
		if (horizontalSliderValue < 15) {
			searchResults = getSiteResults(level1Cond3Results[0]);
			$('.searchBox').attr('value', level1Cond3Results[3][0]);
		} else if (horizontalSliderValue <= 30) {
			searchResults = getSiteResults(level1Cond3Results[1]);
			$('.searchBox').attr('value', level1Cond3Results[3][1]);
		} else if (horizontalSliderValue <= 50) {
			searchResults = getSiteResults(level1Cond3Results[2]);
			$('.searchBox').attr('value', level1Cond3Results[3][2]);
		}			
	}

	// populate site results
	resultSection.insertAdjacentHTML('afterend', searchResults);
}

