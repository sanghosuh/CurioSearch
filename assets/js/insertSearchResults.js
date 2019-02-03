// initialize searchResuts
var searchResults = '';

var horizontalSlider = document.getElementById("horizontalRange");
var horizontalSliderValue = horizontalSlider.value;

if (horizontalSliderValue >= 0 && horizontalSliderValue < 15) {
	searchResults = getSiteResults(georgeWashingtonCond1Results);	
} else if (horizontalSliderValue >= 15 && horizontalSliderValue < 30) {
	searchResults = getSiteResults(abrahamLincolnCond3Results);
} else {
	searchResults = getSiteResults(donaldTrumpCond1Results);
}

function getSiteResults(results) {
	result = '';

	for (let i = 0; i < results.length; i++) {
		result += `
				<div class="siteResults">
					<div class="resultContainer">
						<h3 class="title">
		`;	
		result += '<a href=' + results[i]['url'] +' class="result" target="_blank">' + results[i]['title'] + '</a></h3>';
		result += '<span class="url">' + results[i]['url'] + '</span>';
		result += '<span class="description">' + results[i]['description'] + '</span></div>';
		result += `
					<div class="ratingContainer">
						<form action="">
							<select name="rating">
								<option value="not-selected" selected>...</option>
								<option value="highly-relevant">Highly relevant</option>
								<option value="relevant">Relevant</option>
								<option value="irrelevant">Irrelevant</option>
							</select>
						</form>			
					</div>
				</div>
		`;
	}	

	return result;
}

var resultSection = $('.resultsCount')[0];

resultSection.insertAdjacentHTML('afterend', searchResults);