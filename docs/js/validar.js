function validar(){
    var user = document.formLogin.usuario.value;
    var password = document.formLogin.password.value;
    var nuevaRuta = rutaCambiar() + 'forms/bienvenido.html';

    if(user == 'admin' && password == 'admin'){
        window.location.replace(nuevaRuta);
    }
}

function rutaCambiar(){
    var absRuta = window.location;
    var ruta = absRuta.pathname.substring(0, absRuta.pathname.lastIndexOf('pages'));
    return absRuta.href.substring(0, absRuta.href.length - ((absRuta.pathname + absRuta.search + absRuta.hash).length - ruta.length));
}