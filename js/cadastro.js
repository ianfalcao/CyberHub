let mensagem = document.getElementById("mensagem");
let cadastrar = document.getElementById("cadastrar");

cadastrar.addEventListener("click", function () {

    // Declaração de variaveis

    let nome = document.getElementById("nome");
    let nomeDigitado = nome.value;

    let email = document.getElementById("email");
    let emailDigitado = email.value;

    let senha = document.getElementById("senha");
    let senhaDigitada = senha.value;

    let confirmacaoSenha = document.getElementById("confirmacao-senha");
    let senhaConfirmada = confirmacaoSenha.value;

    // If/Else para confirmar se o usuario digitou algo

    if (nomeDigitado == "") {
        mensagem.textContent = "Preencha o campo nome!";
    }
    else if (emailDigitado == "") {
        mensagem.textContent = "Preencha o campo email!";
    }
    else if (senhaDigitada == "") {
        mensagem.textContent = "Preencha o campo senha!";
    }
    else if (senhaConfirmada == "") {
        mensagem.textContent = "Preencha o campo repetir senha!";
    }
    else if (senhaConfirmada != senhaDigitada) {
        mensagem.textContent = "As senhas não coincidem. Por favor, tente novamente. !";
    }
    else {
        window.location.href = "login.html";
    }


});
