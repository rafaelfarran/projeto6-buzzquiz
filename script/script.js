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

function criarQuiz() {
    const trocarTela1 = document.querySelector(".tela")
    trocarTela1.classList.add("hidden");
    const mostrarTela3 = document.querySelector(".screen3-1")
    mostrarTela3.classList.remove("hidden")
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
    document.querySelector(".home").classList.add("hidden");
    document.querySelector(".screen-2").classList.remove("hidden");
    const promise = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${idQuizz}`);
    promise.then(montarPaginaDoQuizz);
    promise.catch(deuRuim);
}

function deuRuim(err) {
    alert("Ops! Rolou algum problema!");
    console.log("status", err.response.status);
    console.log("status text", err.response.statusText);
}

function montarPaginaDoQuizz(resposta) {
    console.log(resposta)
    resposta = resposta.data;
    perguntas = resposta.questions;

    const tituloQuizHTML = montaHTMLTituloPergunta(resposta);

    let containerPerguntasHTML = `<div class="quizz-questions">`;
    perguntas.forEach((pergunta) => {
        containerPerguntasHTML = montaHTMLPergunta(pergunta, containerPerguntasHTML);
    });
    containerPerguntasHTML += `</div>`;

    const section = document.querySelector(".screen-2");
    section.innerHTML = `
        ${tituloQuizHTML}
        ${containerPerguntasHTML}
    `
}

function montaHTMLTituloPergunta(resposta) {
    const titulo = resposta.title;
    const banner = resposta.image;

    return `
    <div class="head-screen2">
        <div class="camada-preta"></div>
        <img src="${banner}"
            alt="">
        <div class="title-quizz">
            <p>${titulo}</p>
        </div>
    </div>
    `
}

function montaHTMLPergunta(pergunta, containerPerguntasHTML) {
    const respostasHTML = montaHTMLRespostas(pergunta);
    const cor = pergunta.color;
    containerPerguntasHTML += `
        <div class="question-title" style="background-color: ${cor}"><p>${pergunta.title}</p></div>
        ${respostasHTML}
    </div>`;

    return containerPerguntasHTML;
}

function montaHTMLRespostas(pergunta) {
    let respostasHTML = `<div class="answer-options">`;
    pergunta.answers.sort(comparador); // embaralha
    pergunta.answers.forEach(answer => {
        respostasHTML += `
            <div class="answer">
                <img src="${answer.image}" alt="answer">
                <p>${answer.text}</p>
            </div>`
    });
    respostasHTML += `</div>`;

    return respostasHTML;
}

/*
ESTRUTURA QUE ESTÁ SENDO MONTADA NO HTML

<section class="screen-2 tela hidden">
<div class="head-screen2">
    <div class="camada-preta"></div>
    <img src="https://cdn2.unrealengine.com/fortnite-naruto-shinobi-teamwork-loading-screen-en-1920x1080-a344ea57a6a6.jpg"
        alt="">
    <div class="title-quizz">
        <p>Titulo bem legal</p>
    </div>
</div>
<div class="quizz-questions"> <---->
    <div class="question">
        <div class="question-title">
            <p>Uma pergunta bem boa?</p>
        </div>
        <div class="answer-options">
            <div class="answer">
                <img src="https://p2.trrsf.com/image/fget/cf/636/0/images.terra.com/2020/08/14/o-gatinho-de-cada-signo-15721.jpeg"
                    alt="">
                    <p>Gatinho1</p>
            </div>
            <div class="answer">
                <img src="https://p2.trrsf.com/image/fget/cf/636/0/images.terra.com/2020/08/14/o-gatinho-de-cada-signo-15721.jpeg"
                    alt="">
                    <p>Gatinho2</p>
            </div>
            <div class="answer">
                <img src="https://p2.trrsf.com/image/fget/cf/636/0/images.terra.com/2020/08/14/o-gatinho-de-cada-signo-15721.jpeg"
                    alt="">
                    <p>Gatinho3</p>
            </div>
            <div class="answer">
                <img src="https://p2.trrsf.com/image/fget/cf/636/0/images.terra.com/2020/08/14/o-gatinho-de-cada-signo-15721.jpeg"
                    alt="">
                    <p>Gatinho4</p>
            </div>
        </div>
    </div>
</div>
</section>
*/

renderizarQuizzesNaTela();

// renderizarPaginaDoQuizz();