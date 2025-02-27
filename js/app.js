    let amigos = [];

    falarTexto("Bem vindo ao Sorteio do Amigo Secreto!");
    
    falarTexto("Por favor, digite o nome dos seus amigos! E ao concluir clique no botão sortear amigo");

    function adicionarAmigo() {
        
        let inputAmigo = document.getElementById('amigo').value;
        console.log("Amigo adicionado a lista de sorteio!")

        if (inputAmigo) {
            amigos.push(inputAmigo);
            document.getElementById('amigos').innerHTML += '<li>' + inputAmigo + '</li>';
            document.getElementById('amigo').value = '';

    falarTexto(inputAmigo + " foi adicionado ao sorteio.");

        } else {
            falarTexto("Por favor, digite um nome válido.");
            alert('Por favor, digite um nome válido.');        
        }
    }

    
function sortearAmigo() {
    
    if (amigos.length === 0) {
        falarTexto('Lista sem informações, primeiramente digite um nome!');
        alert('Lista sem informações, primeiramente digite um nome!');
        return;

    }

    let indexSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indexSorteado];

    document.getElementById('amigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '<li>Parabéns, seu amigo secreto é: ' + amigoSorteado + '</li>';

// Explosão de confete
confetti({  
    particleCount: 100,
    spread: 70,
    origin: {y: 0.6}
})

falarTexto("Parabéns, seu amigo secreto é: " + amigoSorteado);

    amigos = [];
}

function falarTexto(texto) {
    let fala = new SpeechSynthesisUtterance(texto);
    fala.lang = 'pt-BR'; 
    window.speechSynthesis.speak(fala);
}

