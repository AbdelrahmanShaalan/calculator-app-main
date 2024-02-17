const changeThemeButtons = document.querySelectorAll(".buttonBox span")

window.onload = () => {
    if(localStorage.getItem("theme") != null) {
        document.body.setAttribute("theme" , localStorage.getItem("theme"))
    }
}

changeThemeButtons.forEach(button => {
    button.addEventListener("click" , (event) => {
        let buttonClass = event.target.classList[0]
        document.body.setAttribute("theme" , buttonClass)
        localStorage.setItem("theme" , buttonClass)
    })
})