function toggleMenu() {
    var menu = document.getElementById('menu')
    var display = menu.style.display
    var visible

    if( display == 'block') {
        visible = 'none'
    }

    if(display != 'block') {
        visible = 'block'
    }

    // var visible = display == 'block' ? 'none' : 'block'
    
    menu.style.display = visible
}
function fecharMenu() {
    document.getElementById('menu').style.display = 'none'
}