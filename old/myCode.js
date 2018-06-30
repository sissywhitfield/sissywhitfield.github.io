var acc = document.getElementsByClassName("accordian");
var i;

console.log(acc);

for (var i = acc.length - 1; i >= 0; i--) {
	acc[i].addEventListener("click", function(){
    acc[i].innerHTML = "Hello World";
});
}