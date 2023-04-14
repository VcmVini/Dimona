function toggleMenu() {
    var menu = document.getElementById('menu')
    var display = menu.style.display

    // teste

    var visible = display == 'block' ? 'none' : 'block'
    
    menu.style.display = visible
}
function fecharMenu() {
    document.getElementById('menu').style.display = 'none'
}