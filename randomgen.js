	var chosenContent = "default";
	var chosenType = "default";

	var totalContentAvailability = contentAvailable.length - 1;
	var element;
	
	function generate() {
		var elementExists = document.getElementById("createdElement");
		console.log(elementExists);
		if (elementExists){
			var existingElem = document.getElementById("createdElement");
			existingElem.parentNode.removeChild(existingElem);
		}
	
		x = getRandomInt(0,totalContentAvailability + 1);

		chosenContent = contentAvailable[x];
		chosenType = contentType[x];
		console.log(chosenType);

		element = document.createElement([chosenType]);
		element.setAttribute("id", "createdElement");
		
		if (chosenType == "img") {
			element.setAttribute("src", chosenContent);
		} else if (chosenType == "video") {
			element.setAttribute("src", chosenContent);
			element.setAttribute("type", "video/" + chosenContent.slice(-3));
			element.setAttribute("controls", "controls");
			element.setAttribute("autoplay","autoplay");
		}
		
		document.getElementById('randomDisplayer').appendChild(element);
	}
	
	function getRandomInt(min,max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}