let quizzes = [];
/* Variáveis de controle tela 2 */
let quantidadePerguntas = 0;
let perguntasRespondidas = 0;
let quantidadeAcerto = 0;
let nivel = null;
let id = null;
let titulo = null;
let banner = null;
let perguntas = null;
let niveis = null;
let tipo = null;

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
        const quizz = quizzes[i];
        quizzesServer.innerHTML += `
        <div class="quizzes-from-server" onclick="renderizarPaginaDoQuizz(${quizz.id})">
            <div class="gradient-color"></div>
                <img
                    src="${quizz.image}">
            <div class="titulo-quizz">
                <P>${quizz.title}</P>
            </div>
        </div>
    `;
    }
}
function comparador() {
    return Math.random() - 0.5;
}
function renderizarPaginaDoQuizz(idQuizz) {
    console.log("id", idQuizz)
    document.querySelector(".home").classList.add("hidden");
    document.querySelector(".screen-2").classList.remove("hidden");
    const promise = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${idQuizz}`);
    promise.then(resposta => {
        console.log(resposta)
        resposta = resposta.data;
        id = resposta.id;
        titulo = resposta.title;
        banner = resposta.image;
        perguntas = resposta.questions;
        niveis = resposta.levels;
        quantidadePerguntas = perguntas.length;
        document.querySelector(".head-screen2 .title-quizz p").innerHTML = titulo;
        document.querySelector(".head-screen2 img").setAttribute('src', banner);
        const containerPerguntas = document.querySelector(".quizz-questions");
        containerPerguntas.innerHTML = "";
        perguntas.forEach((pergunta) => {
            const perguntaHTML = "";
            const cor = pergunta.color;
            const respostasOrdenadas = pergunta.answers;
            const respostas = respostasOrdenadas.sort(comparador);
            perguntaHTML += `
            <div class="question">
                    <div class="texto" style="background-color: ${cor}">
                    <p>${pergunta.title}</p>
            </div>`;
            containerPerguntas.innerHTML += perguntaHTML;
        })
    })
}
renderizarQuizzesNaTela();

renderizarPaginaDoQuizz();