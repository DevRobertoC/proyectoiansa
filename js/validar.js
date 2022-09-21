function validar(){
    let usuario=document.formLogin.usuario;
    let password=document.formLogin.password;
    let boton=document.formLogin.boton;

    if (usuario == 'admin' && password == 'admin'){
        boton.addEventListener('click', function(){
            window.location.href='nuevoRegistro.html';
        });
        
    }
}