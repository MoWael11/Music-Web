window.addEventListener("load", (event) => {
    const menu = document.getElementById('toggle-menu')
    const links = document.getElementById('links')
    menu.addEventListener("click", () => {
        links.classList.toggle('open-menu')
    })
})
