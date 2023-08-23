var button = document.querySelector(".show-cat");
//console.log(button);
var cat = document.querySelector(".cat");
//console.log(cat);

button.addEventListener("click", function() {
    if (cat.classList.contains("show")) {
        cat.classList.remove("show")
    } else {cat.classList.add("show")}
});