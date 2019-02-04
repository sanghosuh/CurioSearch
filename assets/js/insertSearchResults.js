// initialize searchResuts
var searchResults = '';

var horizontalSlider = document.getElementById("horizontalRange");
var horizontalSliderValue = horizontalSlider.value;

var verticalSlider = document.getElementById("verticalRange");
var verticalSliderValue = horizontalSlider.value;


if (horizontalSliderValue < 15) {
	searchResults = getSiteResults(level3Cond3Results[0]);	
	$('.searchBox').attr('value', level3Cond3Results[3][0]);
} else if (horizontalSliderValue <= 30) {
	console.log('check');
	searchResults = getSiteResults(level3Cond3Results[1]);
	$('.searchBox').attr('value', level3Cond3Results[3][1]);
} else if (horizontalSliderValue <= 50) {
	searchResults = getSiteResults(level3Cond3Results[2]);
	$('.searchBox').attr('value', level3Cond3Results[3][2]);
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