function calcular(){
    var Q = document.getElementById('qtdSucos');
    var D = document.getElementById('mediaSucos');
    var R = document.getElementById('resultado');
    var S;
    var RTXT;

    // Verifica se os campos foram preenchidos
    if (Q.value <= 0){
        alert('Insira um valor válido para a quantidade de sucos no estoque.');
        return;
    } else if (D.value <= 0){
        alert('Insira um valor válido para a média de consumo diário de sucos.')
        return;
    }

    // Calcula o total de sucos que serao consumidos em 5 semanas
    S = D.value * 28;

    // Mostra a quantidade final do estoque em 5 semanas
    RTXT = Q.value - S;

    // Exibe o resultado, caso o estoque fique negativo, um ícone vermelho aparecerá, caso positvo, um verde aparecerá
    if (RTXT >= 1){
        R.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #31a201;"></i> <a>O estoque será de <strong> ${RTXT} </strong> sucos após 4 semanas. </a>`;
    } else if (RTXT < 0){
        R.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: #f00505;"></i> <a>O estoque será de <strong> ${RTXT} </strong> sucos após 4 semanas. </a>`
    } else if (RTXT == 0){
        R.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #f3c212;"></i> <a>O estoque será de <strong> ${RTXT} </strong> sucos após 4 semanas. </a>`
    }
}