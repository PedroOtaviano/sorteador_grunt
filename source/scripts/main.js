document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(event) {

        event.preventDefault();

        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroSorteado = Math.floor(Math.random() * numeroMaximo + 1);

        document.getElementById('resultado-valor').innerText = numeroSorteado.toFixed(0);
        document.querySelector('.resultado').style.display = 'block';
    })
});