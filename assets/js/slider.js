var horizontalSlider = document.getElementById("horizontalRange");
var hSliderOutput = document.getElementById("horizontalValue");
hSliderOutput.innerHTML = horizontalSlider.value;

horizontalSlider.oninput = function() {
	hSliderOutput.innerHTML = this.value;
}