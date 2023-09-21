// Seleção do elemento de resultado
const resultado = document.querySelector('.result');

// Seleção do botão de igual
const confirmar = document.querySelector('.igual');

// Função para inserir valores no resultado
function insert(valor) {
    resultado.innerHTML += valor;
}

// Função para limpar o resultado
function clean() {
    resultado.innerHTML = ' ';
}

// Função para apagar um caractere do resultado
function backspace() {
    if (resultado.textContent) {
        let result = document.getElementById('resultado').innerHTML;
        resultado.innerHTML = result.substring(0, result.length - 1);
    }
}

// Função para calcular e exibir o resultado final
function confirma() {
    if (resultado.textContent != 'Erro') {
        document.getElementById("resultado").innerHTML = eval(resultado.innerHTML);
    }
}
