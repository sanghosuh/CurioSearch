var searchResults = '';
var condNum = 'condition1';

for (let i = 0; i < results[condNum].length; i++) {
	searchResults += `
			<div class="siteResults">
				<div class="resultContainer">
					<h3 class="title">
	`;	
	searchResults += '<a href=' + results[condNum][i]['url'] +' class="result" target="_blank">' + results[condNum][i]['title'] + '</a></h3>';
	searchResults += '<span class="url">' + results[condNum][i]['url'] + '</span>';
	searchResults += '<span class="description">' + results[condNum][i]['description'] + '</span></div>';
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
