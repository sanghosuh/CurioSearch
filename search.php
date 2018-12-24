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
	</div>
</body>
</html>