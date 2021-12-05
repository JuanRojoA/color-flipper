const colorIndicator = document.getElementById("color-indicator")
const changeColorBtn = document.getElementById("color-change-btn")

function changeColor (){
     randomColor = getRandom()
     document.body.style.backgroundColor = randomColor
     colorIndicator.innerText = randomColor
}

function getRandom (){
     const colorValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
     let colorCode = "#"
     for (let i = 0; i < 6; i++) {
          colorCode += colorValue[Math.floor(Math.random() * 16)]
     }
    return colorCode
}

changeColorBtn.addEventListener("click", () => {
     changeColor()
})

changeColor()