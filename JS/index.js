const menu = document.getElementById("sp-menu")

document.getElementById("mega-menu").addEventListener("click", () => {
    if (menu.className === "hidden"){
        menu.classList.remove("hidden")
    }else if(menu.className === "") {
        menu.classList.add("hidden")
    }

})

