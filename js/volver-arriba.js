window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.boton-arriba-contenedor').classList.add('show-')
    
    }else{
        document.querySelector('.boton-arriba-contenedor').classList.remove('show-')
    }
}