function myMove(){
    let first = document.getElementById('animation');
    let second = document.getElementById('anim2');
    let pos = 0, pos2 = 350;
    let id = setInterval(frame, 5);     // A cada 5 milissegundos chama a função frame
    function frame(){
        if(pos == 350){     // Aqui fica uma condição de parada
            clearInterval(id);
        }else{      
            pos++;      // Aqui incrementa a posição da animação 1
            first.style.top = pos + 'px';
            first.style.left = pos + 'px';
            pos2--;     // Decrementa a posição da animação 2
            second.style.top = pos2 + 'px';
            second.style.left = pos2 + 'px';
        }
    }
}