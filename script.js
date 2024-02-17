let calculations = []
const screenText = document.querySelector(".screen h1")

function addCalc(element) {
    let text = element.innerHTML
    text != "x" ? text : text = "*"
    calculations.push(text)
    screenText.innerHTML = calculations.join("")
    localStorage.setItem("calculations" , calculations.join(""))
}

function deleteCalc() {
    calculations.pop()
    localStorage.setItem("calculations" , calculations)
    screenText.innerHTML = calculations.join("")
}

function resetCalc() {
    localStorage.setItem("calculations" , "")
    localStorage.setItem("result" , "")
    calculations = []
    screenText.innerHTML = ""
}

function equalCalc() {
    try {
        let result = eval(localStorage.getItem("calculations"))
        result == NaN || result == Infinity ? result = undefined : result
        screenText.innerHTML = result
        localStorage.setItem("result" , result)
        localStorage.setItem("calculations" , result)
        calculations = [result]
    } catch(error) {
        if(error != undefined) {
            screenText.innerHTML = "ERROR"
        }
    }
}

window.onload = () => {
    calculations = [localStorage.getItem("calculations")]
    screenText.innerHTML = localStorage.getItem("result")
}