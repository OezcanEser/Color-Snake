// Aufgabenstellung

// In dieser Übung programmierst du ein kleines Snake-Game:

// Erstelle 100 Divs mit Hilfe von Javascript (Loop). 

// Die Farbe jedes Elements sollte in eine andere geändert werden und so für eine halbe Sekunde bleiben, wenn das Element mit dem Mauszeiger getroffen wird.

// Der CSS-Code befindet sich in dem Kommentar.


let body = document.querySelector("body").id = "snakeField"
for (let i = 0; i < 100; i++) {
    let div = document.createElement("div")
    document.getElementById("snakeField").appendChild(div)
    i.innerHTML = div.className = "item"
    div.addEventListener("mouseover", function (event) {
        let bg = "#" + Math.floor(Math.random() * 16777215).toString(16);
        event.target.style.backgroundColor = bg
        setTimeout(function () {
            event.target.style.backgroundColor = ""
        }, 500)
    }, false)
}