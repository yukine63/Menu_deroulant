const btn_menu = document.querySelector("#btn_menu")
const contenu_menu = document.querySelector("#contenu_menu")

btn_menu.addEventListener("click", function () {
    contenu_menu.classList.toggle("rentrée")
})