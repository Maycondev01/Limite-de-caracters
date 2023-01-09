const textarea = document.querySelector('textarea');
const counter = document.getElementById("counter");

textarea.addEventListener('input', function(e) {
    const alvo = e.target;
    const tamanhoMaximo = alvo.getAttribute("maxlength");
    const tamanhoAtual = alvo.value.length;
    counter.innerHTML = `${tamanhoAtual}/${tamanhoMaximo}`
});