var acc = document.getElementsByClassName("accordion");
var x;

for (x = 0; x < acc.length; x++) {
    acc[x].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    };
}