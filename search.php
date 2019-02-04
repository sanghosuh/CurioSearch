<?php
	// grab query issued by user
$term = isset($_GET["term"]) ? $_GET["term"]: '';

	// grab type of result to return
$type = isset($_GET["type"]) ? $_GET["type"]: "sites";
?>

<html>
<head>
	<title>Google</title>
	<link rel="stylesheet" href="assets/css/style.css">
	<!-- jquery CDN -->
	<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>	
	<script src="assets/js/searchResults.js"></script>
	<script src="assets/js/jquery.kontrol.js"></script>
	<script>
            $(function() {
                var $all = $(".dial, .bars1, .bars2, .pad")
                    , $body = $("body");

                var $pad = $(".pad")
                            .xy({
                                    displayPrevious:false
                                    , min : -100
                                    , max : 100
                                    , fgColor:"#222222"
                                    , bgColor:"#EEEEEE"
                                    /*, change : function (value) {
                                        console.log("change : ", value);
                                    }*/
                                })
                            .css({'border':'5px solid #BBB'});

                var changeSkin = function(skin) {
                    $body.css(skin.rack);
                    $all.trigger(
                            "configure"
                            , skin.kontrol
                            );
                }
                
                $('#skin').bind(
                    'change'
                    , function(e) {
                        changeSkin(skins[$(this).find('option:selected').val()]);
                    }
                );

                $('#displayPrevious').bind(
                    'change'
                    , function(e) {
                        $all.trigger("configure", {displayPrevious:parseInt($(this).find('option:selected').val())});
                    }
                );

                $('#cursor').bind(
                    'change'
                    , function(e) {
                        $all.trigger("configure", {cursor:parseInt($(this).find('option:selected').val())});
                    }
                );
                
                $(".height").bind(
                    'click'
                    , function(e) {
                        $all.trigger("configure", {height:100});
                    }
                );


                var $animBars = $(".bars1"), timeout;
                $("#animate").bind(
                    'click',
                    function() {
                        if($(this).is(':checked')) {
                            var  v =  0, s = 'up', i = 0;
                            var redraw = function () {

                                if(v==15 || v==0) i++;
                                s = v==15?'down':(v==0?'up':s);
                                s=='up'?v++:v--;

                                $animBars
                                    .find('input:eq('+v+')')
                                    .val(Math.floor(Math.sin(i+v*i)*100))
                                    .trigger('change');

                                timeout = window.setTimeout(redraw, 1000/60);
                            };
                            redraw();
                        } else {
                            window.clearTimeout(timeout);
                        }
                    });
            });
        </script>

</head>
<body>
	<div class="wrapper">

		<div class="header">
			<div class="headerContent">
				<div class="logoContainer">
					<a href="index.php">
						<img src="assets/images/google.png" width="200px">	
					</a>
				</div>

				<div class="searchContainer">
					<form action="search.php" method="GET">
						<div class="searchBarContainer">
							<input type="text" class="searchBox" name="term" value='<?php echo $term ?>'>
							<button class="searchButton">
								<img src="assets/images/icons/search-24.png" alt="">
							</button>
						</div>
					</form>
				</div>
				<div class="sliderContainer">
					<div class="horizontalSliderContainer">
						<input type="range" min="1" max="50" value="25" class="horizontalSlider" id="horizontalRange">
					</div>
					<div class="verticalSliderContainer">
						<input type="range" min="1" max="50" value="1" class="verticalSlider" id="verticalRange">
					</div>	
<!-- 		            <div>
		                <div style="margin-bottom:0px">XY</div>
		                <fieldset class="pad" data-width="90" data-height="90">
		                    <legend>XY Pad</legend>
		                    <input name="x" value=30>
		                    <input name="y" value=30>
		                </fieldset>
		            </div>		 -->									
				</div>
			</div>

			<div class="tabsContainer">
				<ul class="tabList">
					<li class="<?php echo $type == 'sites' ? 'active': '' ?>">
						<a href='<?php echo "search.php?term=$term&type=sites"; ?>'>
							Sites
						</a>
					</li>
					<li class="<?php echo $type == 'images' ? 'active': '' ?>">
						<a href='<?php echo "search.php?term=$term&type=images"; ?>'>
							Images
						</a>
					</li>
				</ul>
			</div>
		</div>


		<div class="mainResultsSection">

			<p class="resultsCount"> <?php echo isset($resultsCount) ? $resultsCount:'5 results found' ?></p>

			<div class="submitButtonContainer">
				<form action="#" method="GET">
					<input type="submit" value="Submit" class="ratingSubmitButton">
				</form>
			</div>

		</div>
	</div>
	
	<script src="assets/js/insertSearchResults.js"></script>
	<script src="assets/js/slider.js"></script>
</body>
</html>