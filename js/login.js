let mensagem = document.getElementById("mensagem");
let logar = document.getElementById("logar");

logar.addEventListener("click", function () {

    // Declaração de variaveis

    let email = document.getElementById("email");
    let emailDigitado = email.value;

    let senha = document.getElementById("senha");
    let senhaDigitada = senha.value;

    // If/Else para confirmar se o usuario digitou algo

    if (emailDigitado == "") {
        mensagem.textContent = "Preencha o campo email!";
    }
    else if (senhaDigitada == "") {
        mensagem.textContent = "Preencha o campo senha!";
    }
    else {
        window.location.href = "../index.html";
    }
});
