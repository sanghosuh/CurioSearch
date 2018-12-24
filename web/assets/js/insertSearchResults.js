var searchResults = '';

results = generalCond1Results;
// results = generalCond2Results;
// results = generalCond3Results;

for (let i = 0; i < results.length; i++) {
	searchResults += `
			<div class="siteResults">
				<div class="resultContainer">
					<h3 class="title">
	`;	
	searchResults += '<a href=' + results[i]['url'] +' class="result" target="_blank">' + results[i]['title'] + '</a></h3>';
	searchResults += '<span class="url">' + results[i]['url'] + '</span>';
	searchResults += '<span class="description">' + results[i]['description'] + '</span></div>';
	searchResults += `
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

var resultSection = $('.resultsCount')[0];

resultSection.insertAdjacentHTML('afterend', searchResults);
