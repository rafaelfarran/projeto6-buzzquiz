let quizzes = [];

const promisse = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
promisse.then(promessaCumprida);

function promessaCumprida(resposta){
    console.log(resposta)
    quizzes = resposta.data;
}

function renderizarQuizzesNaTela(indice){
    const quizzesServer = document.querySelector(".quizzes-from-server");
}
