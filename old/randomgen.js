var chosenContent = "default";
var chosenType = "default";

var totalContentAvailability = contentAvailable.length - 1;
var element = "video";
	
var contentAvailable = [
	"imageContent\Untitled-2_01132018.png",
	"imageContent\Untitled-3_01132018.png",
	"imageContent\Untitled-5_01132018.png",
	"imageContent\Untitled_01132018.png",
	"imageContent\lastTimeSheChecked.png",
	"imageContent\chapter2_01132018.png",
	"imageContent\Untitled-8_01132018.png",
	"imageContent\Untitled-4_01132018.png",
	"imageContent\ghostpotatogirl.png",
	"imageContent\chapter1_01132018.png",
	"imageContent\Untitled-1_01132018.png",
	"imageContent\andthenshewaitedanxiously.png",
	"imageContent\ifyousawheryouwouldknow.png",
	"imageContentS.png",
	"imageContent\Untitled-6_01132018.png",
	"imageContent\BeGentle.jpg",
	"imageContent\janet.gif",
];

var contentType = [
	"img",
	"img",
	"img",
	"img",
	"img",
	"img",
	"img",
	"img",
	"img",
	"img",
	"img",
	"img",
	"img",
	"img",
	"img",
	"img",
	"img",
	"img",
];

	
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

		element = document.createElement(chosenType);
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