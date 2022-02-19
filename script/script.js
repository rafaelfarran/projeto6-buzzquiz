let quizzes = [];

const promisse = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
promisse.then(promessaCumprida);

function promessaCumprida(resposta) {
    console.log(resposta)
    quizzes = resposta.data;
    renderizarQuizzesNaTela()
}


function renderizarQuizzesNaTela() {
    const quizzesServer = document.querySelector(".quizz-list");
    quizzesServer.innerHTML = "";
    for (let i = 0; i < 6; i++) {
        quizzesServer.innerHTML += `
        <div class="quizzes-from-server">
        <div class="gradient-color"></div>
            <img
                src="${quizzes[i].image}">
        <div class="titulo-quizz">
            <P>${quizzes[i].title}</P>
        </div>
    </div>
`;
    }
}


