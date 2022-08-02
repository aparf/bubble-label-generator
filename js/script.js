// script to get the style of ID element
function getStyle(el,styleProp){
    var x = document.getElementById(el);
    if (window.getComputedStyle)
        var y = document.defaultView.getComputedStyle(x,null).getPropertyValue(styleProp);  
    else if (x.currentStyle)
        var y = x.currentStyle[styleProp];              
    return y;
}


window.addEventListener("load", function(){
	const labels = document.querySelectorAll(".lab");
	// add id to further operate getStyle function
	for (var i = 0; i < (labels.length); i++)
		labels[i].setAttribute("id", "lab_" + i.toString())

	// check whether current label should be placed under or above the next label
	for (var i = 0; i < (labels.length-1); i++) {
		var labelLength = labels[i].textContent.length;
		var nextLabelLength = labels[i+1].textContent.length;
		if (nextLabelLength > labelLength) {
			// current label should be placed above the next label
			labels[i].style.borderBottom = "none";
			var index = getStyle("lab_" + i.toString(), "z-index");
			labels[i+1].style.zIndex = index - 1; 
		} else {
			// current label should be placed under the next label
			labels[i+1].style.borderTop = "none";
			var index = getStyle("lab_" + (i+1).toString(), "z-index")
			labels[i].style.zIndex = index - 1; 
		}
	}
})