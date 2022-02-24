let expression = /[-a-zA-Z0-9@:%\+.~#?&//=]{2,256}.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%\+.~#?&//=]*)?/gi;
let topTitle = null;
let img = null;
let imgURL = null;
let validateFirstQuestion = null;
let validateRightAnswer = null;
let levelURL = null;
let levelDescription = null;
let rightAnswerURL = null;
let wrongAnswerURL1 = null;
let wrongAnswerURL2 = null;
let wrongAnswerURL3 = null;
let imgScreen31 = null;
let allQuestions = null;
let questionsNumber = null;
let levelsNumber = null;
let changeScreen = null;
let backgroundColor = null;
let definePercentage = null;
let levelTitle = null;
let isFalse = null;
let levels = null;
let color = null;
let test1 = null;
let test2 = null;
let test3 = null;
let test4 = null;
let test5 = null;
let test6 = null;
let store = {
    l1: "",
    l2: "",
    l3: "",
    l4: "",
    l5: "",
    l6: "",
    l7: "",
    l8: "",
    l9: "",
    l10: ""
};
let storage = [];
let storeLevel = {
    p1: "",
    p2: "",
    p3: "",
    p4: ""
}
let storageLevels = [];

function autheticateScreen31() {
    if (authenticateTitle() == true && authenticateURL() == true && authenticateQuizzsQuestionsNumber() == true && authenticateQuizzsLevelsNumber() == true) {
        changeScreen = document.querySelector(".screen3-1");
        changeScreen.classList.add("hidden");
        let changeTo32 = document.querySelector(".screen3-2");
        changeTo32.classList.remove("hidden");
        createQuestions();
    }
}

function authenticateTitle() {
    quizzTitle = document.querySelector(".quizz-title");
    if (quizzTitle.value.length >= 20 && quizzTitle.value.length <= 60) {
        topTitle = quizzTitle.value;
        return true;
    }
    else {
        quizzTitle.value = "";
        quizzTitle.placeholder = "Insira um título válido";
        return false;
    }
}

function authenticateLevelTitle(e){
    let checkLevelTitle = document.querySelector(`.notification${e} .level-title`);
    if (checkLevelTitle.value.length > 10){
        levelTitle = checkLevelTitle.value
        return true;
    }
    else {
        checkLevelTitle.value = "";
        checkLevelTitle.placeholder = "Insira um título válido";
    }
}

function authenticateDescription(r){
    let checkDescription = document.querySelector(`.notification${r} .level-details`);
    if (checkDescription.value.length > 30){
        levelDescription = checkDescription.value;
        return true;
    }
    else {
        checkDescription.value = "";
        checkDescription.placeholder = "Insira uma descrição válida";
    }
}

function authenticateURL() {
    let regex = new RegExp(expression);
    imgURL = document.querySelector(".quizz-img");
    img = imgURL.value;
    if (!img.match(regex)) {
        imgURL.value = ""
        imgURL.placeholder = "Insira uma URL válida";
        return false;
    }
    else {
        return true;
    }
}

function authenticateRightAnswersURL(a) {
    let regex = new RegExp(expression);
    imgURL = document.querySelector(`.right-answer-URL.validation${a}`);
    rightAnswerURL = imgURL.value;
    if (!rightAnswerURL.match(regex)) {
        imgURL.value = ""
        imgURL.placeholder = "Insira uma URL válida";
        return false;
    }
    else {
        return true;
    }
}

function authenticateLevelURL(u) {
    let regex = new RegExp(expression);
    imgURL = document.querySelector(`.notification${u} .level-img`);
    levelURL = imgURL.value;
    if (!levelURL.match(regex)) {
        imgURL.value = ""
        imgURL.placeholder = "Insira uma URL válida";
        return false;
    }
    else {
        return true;
    }
}

function authenticateWrongAnswersURL(wrong, a) {
    let regex = new RegExp(expression);
    if (wrong == test2) {
        imgURL = document.querySelector(`.test2.validation${a}`);
        wrongAnswerURL1 = imgURL.value;
        if (!wrongAnswerURL1.match(regex)) {
            imgURL.value = ""
            imgURL.placeholder = "Insira uma URL válida";
            return false;
        }
        else {
            return true;
        }
    }
}

function authenticateWrongAnswersURL2(wrong, a) {
    let regex = new RegExp(expression);
    if (wrong == test4) {
        imgURL = document.querySelector(`.test4.validation${a}`);
        wrongAnswerURL2 = imgURL.value;
        if (!wrongAnswerURL2.match(regex)) {
            imgURL.value = ""
            imgURL.placeholder = "Insira uma URL válida";
            return false;
        }
        else {
            return true;
        }
    }
}

function authenticateWrongAnswersURL3(wrong, a) {
    let regex = new RegExp(expression);
    if (wrong == test6) {
        imgURL = document.querySelector(`.test6.validation${a}`);
        wrongAnswerURL3 = imgURL.value;
        if (!wrongAnswerURL3.match(regex)) {
            imgURL.value = ""
            imgURL.placeholder = "Insira uma URL válida";
            return false;
        }
        else {
            return true;
        }
    }
}

function authenticateQuizzsQuestionsNumber() {
    questionsNumber = document.querySelector(".initiate-questions");
    allQuestions = questionsNumber.value;
    if (allQuestions < 3) {
        questionsNumber.value = "";
        questionsNumber.placeholder = "Faça no mínimo 3 perguntas";
        return false;
    }
    else {
        return true;
    }
}

function authenticateQuizzsLevelsNumber() {
    levelsNumber = document.querySelector(".initiate-levels");
    levels = levelsNumber.value;
    if (levels < 2) {
        levelsNumber.value = "";
        levelsNumber.placeholder = "Escolha no mínimo 2 níveis";
        return false;
    }
    else {
        return true;
    }
}

function authenticateBackgroundColor(a) {
    let expressionHex = /^#[0-9a-fA-F]{6}/gi;
    let regex = new RegExp(expressionHex);
    backgroundColor = document.querySelector(`.background-color-input.validation${a}`);
    color = backgroundColor.value;
    if (!color.match(regex)) {
        backgroundColor.value = "";
        backgroundColor.placeholder = "Código inválido!";
        return false;
    }
    else {
        return true;
    }

}

function createQuestions() {
    let nextQuestion = document.querySelector(".all-next-questions");
    for (i = 1; i < allQuestions; i++) {
        nextQuestion.innerHTML += `
        <div class="next-question" onclick="fillQuestions()">
            <h2>Pergunta ${i + 1}</h2>
            <ion-icon name="create-outline"></ion-icon>
        </div>
        `;
    }
    nextQuestion.innerHTML += `
    <div class="screen3-instructions">
        <button class="change-to-secreen3-3">Prosseguir para criar níveis</button>
    </div>
    `;
}

function fillQuestions() {
    let hiddenQuestions = document.querySelector(".all-next-questions");
    hiddenQuestions.innerHTML = "";
    for (j = 1; j < allQuestions; j++) {
        hiddenQuestions.innerHTML += `
    <div class="basic-questions">
            <div class="clean-object"></div>
            <h2>Pergunta ${j + 1}</h2>
            <div class="basic-question-input">
                <input class="question-input first-question validation${j}" type="text" placeholder="Texto da pergunta">
                <input class="questions background-color-input validation${j}" type="text" placeholder="Cor de fundo da pergunta">
            </div>
            <h2>Resposta correta</h2>
            <div class="basic-question-input">
                <input class="question-input right-answer validation${j}" type="text" placeholder="Resposta correta">
                <input class="questions right-answer-URL validation${j}" type="url" placeholder="URL da imagem">
            </div>
            <h2>Respostas incorretas</h2>
            <div class="basic-question-input">
                <input class="question-input wrong-answer test1 validation${j}" type="text" placeholder="Resposta incorreta 1">
                <input class="questions wrong-answer-URL test2 validation${j}" type="url" placeholder="URL da imagem 1">
            </div>
            <div class="basic-question-input">
                <input class="question-input wrong-answer test3 validation${j}" type="text" placeholder="Resposta incorreta 2">
                <input class="questions wrong-answer-URL test4 validation${j}" type="url" placeholder="URL da imagem 2">
            </div>
            <div class="basic-question-input">
                <input class="question-input wrong-answer test5 validation${j}" type="text" placeholder="Resposta incorreta 3">
                <input class="questions wrong-answer-URL test6 validation${j}" type="url" placeholder="URL da imagem 3">
            </div>
        </div>
    `;
    }
    hiddenQuestions.innerHTML += `
    <div class="screen3-instructions">
        <button class="change-to-secreen3-3" onclick="verifyScreenInputs()">Prosseguir para criar níveis</button>
    </div>
    `;
}

function verifyScreenInputs() {
    for (k = 0; k < allQuestions; k++) {
        validateFirstQuestion = document.querySelector(`.first-question.validation${k}`).value;
        validateRightAnswer = document.querySelector(`.right-answer.validation${k}`).value;
        test1 = document.querySelector(`.test1.validation${k}`).value;
        test3 = document.querySelector(`.test3.validation${k}`).value;
        test5 = document.querySelector(`.test5.validation${k}`).value;
        if (validateFirstQuestion != null) {
            store = {
                l1: validateFirstQuestion,
                l2: "",
                l3: "",
                l4: "",
                l5: "",
                l6: "",
                l7: "",
                l8: "",
                l9: "",
                l10: ""
            };
        }
        if (authenticateBackgroundColor(k) == true) {
            store = {
                l1: validateFirstQuestion,
                l2: color,
                l3: "",
                l4: "",
                l5: "",
                l6: "",
                l7: "",
                l8: "",
                l9: "",
                l10: ""
            };
        }
        if (validateRightAnswer != null) {
            store = {
                l1: validateFirstQuestion,
                l2: color,
                l3: validateRightAnswer,
                l4: "",
                l5: "",
                l6: "",
                l7: "",
                l8: "",
                l9: "",
                l10: ""
            };
        }
        if (authenticateRightAnswersURL(k) == true) {
            store = {
                l1: validateFirstQuestion,
                l2: color,
                l3: validateRightAnswer,
                l4: rightAnswerURL,
                l5: "",
                l6: "",
                l7: "",
                l8: "",
                l9: "",
                l10: ""
            };
        }
        if (test1 != null) {
            store = {
                l1: validateFirstQuestion,
                l2: color,
                l3: validateRightAnswer,
                l4: rightAnswerURL,
                l5: test1,
                l6: "",
                l7: "",
                l8: "",
                l9: "",
                l10: ""
            };
        }
        if (authenticateWrongAnswersURL(test2, k) == true) {
            store = {
                l1: validateFirstQuestion,
                l2: color,
                l3: validateRightAnswer,
                l4: rightAnswerURL,
                l5: test1,
                l6: wrongAnswerURL1,
                l7: "",
                l8: "",
                l9: "",
                l10: ""
            };
        }
        if (test3 != null) {
            store = {
                l1: validateFirstQuestion,
                l2: color,
                l3: validateRightAnswer,
                l4: rightAnswerURL,
                l5: test1,
                l6: wrongAnswerURL1,
                l7: test3,
                l8: "",
                l9: "",
                l10: ""
            };
        }
        if (authenticateWrongAnswersURL2(test4, k) == true) {
            store = {
                l1: validateFirstQuestion,
                l2: color,
                l3: validateRightAnswer,
                l4: rightAnswerURL,
                l5: test1,
                l6: wrongAnswerURL1,
                l7: test3,
                l8: wrongAnswerURL2,
                l9: "",
                l10: ""
            };
        }
        if (test5 != null) {
            store = {
                l1: validateFirstQuestion,
                l2: color,
                l3: validateRightAnswer,
                l4: rightAnswerURL,
                l5: test1,
                l6: wrongAnswerURL1,
                l7: test3,
                l8: wrongAnswerURL2,
                l9: test5,
                l10: ""
            };
        }
        if (authenticateWrongAnswersURL3(test6, k) == true) {
            store = {
                l1: validateFirstQuestion,
                l2: color,
                l3: validateRightAnswer,
                l4: rightAnswerURL,
                l5: test1,
                l6: wrongAnswerURL1,
                l7: test3,
                l8: wrongAnswerURL2,
                l9: test5,
                l10: wrongAnswerURL3
            };

        }
        storage[k] = store;
        console.log(storage);
        if (storage[k].l1 == null || storage[k].l2 == null || storage[k].l3 == null || storage[k].l4 == null || storage[k].l5 == null || storage[k].l6 == null) {
            isFalse = null;
            console.log(isFalse)
        }
        test1 = null;
        test3 = null;
        test6 = null;
        validateFirstQuestion = null;
        validateRightAnswer = null;
    }
    if (isFalse == null) {
        alert("Preencha todos os campos corretamente!");
        isFalse = 1;
    }
    else {
        let changeToScreen33 = document.querySelector(".screen3-2");
        changeToScreen33.classList.add("hidden");
        let addHidden = document.querySelector(".screen3-3");
        addHidden.classList.remove("hidden");
        creatLevels();
    }
}

function creatLevels() {
    let nextLevel = document.querySelector(".screen3-3");
    for (n = 1; n < levels; n++) {
        nextLevel.innerHTML += `
        <div class="next-level notification${n}" onclick="openLevels(${n})">
            <h2>Nível ${n + 1}</h2>
            <ion-icon name="create-outline"></ion-icon>
        </div>
        `;
    }
    nextLevel.innerHTML += `
        <div class="screen3-instructions">
            <button class="change-to-screen3.4" onclick="endQuizz()">Finalizar Quizz</button>
        </div>
    `;
}

function openLevels(levelCheck){
    let checkLevel = document.querySelector(`.next-level.notification${levelCheck}`);
    checkLevel.innerHTML = `
        <div class="level">
             <h2>Nível ${levelCheck}</h2>
            <div class="level-description notification${levelCheck}">
                <input class="level-title level-input" type="text" placeholder="Título do nível">
                <input class="level-percentage level-input" type="text" placeholder="% de acerto mínima">
                <input class="level-img level-input" type="url" placeholder="URL da imagem do nível">
                <input class="level-details" type="text" placeholder="Descrição do nível">
                </div>
        </div>
    `;
    checkLevel.classList.remove("next-level")
}

function endQuizz(){
    for (w = 0; w < levels; w++){
        definePercentage = document.querySelector(`.notification${w} .level-percentage`).value;
        if (authenticateLevelTitle(w) == true){
            storeLevel = {
                p1: levelTitle,
                p2: "",
                p3: "",
                p4: ""
            }
        }
        if (definePercentage != null){
            storeLevel = {
                p1: levelTitle,
                p2: definePercentage,
                p3: "",
                p4: ""
            }
        }
        if (authenticateLevelURL(w) == true){
            storeLevel = {
                p1: levelTitle,
                p2: definePercentage,
                p3: levelURL,
                p4: ""
            }
        }
        if (authenticateDescription(w) == true){
            storeLevel = {
                p1: levelTitle,
                p2: definePercentage,
                p3: levelURL,
                p4: levelDescription
            }
        }
        storageLevels[w] = storeLevel;
        console.log(storageLevels)
        if (storageLevels[w].p1 == null || storageLevels[w].p2 == null || storageLevels[w].p3 == null || storageLevels[w].p4 == null ){
            isFalse = null;
        }
    }
    if (isFalse == null) {
        alert("Preencha todos os campos corretamente!");
        isFalse = 1;
    }
    else {
        alert("ta certo!");
    }
}
function showCreatScreens() {
    let bodyHTML = document.querySelector("body");
    bodyHTML.innerHTML += `
    <!-- quizzs basic informations section-->

    <section class="screen3-1 hidden">
        <div class="screen3-instructions">
            <h2>Comece pelo começo</h2>
        </div>
        <div class="basic-infos">
            <input class="quizz-title" type="text" placeholder="Título do seu quizz">
            <input class="quizz-img info-secreen3-1" type="url" placeholder="URL da imagem do seu quizz">
            <input class="initiate-questions info-secreen3-1" type="text" placeholder="Quantidade de perguntas do quizz">
            <input class="initiate-levels info-secreen3-1" type="text" placeholder="Quantidade de níveis do quizz">
        </div>
        <div class="screen3-instructions">
            <button class="change-to-secreen3-2" onclick="autheticateScreen31()">Prosseguir para criar perguntas</button>
        </div>
    </section>

    <!--creat quizzs questions-->

    <section class="screen3-2 hidden">
        <div class="screen3-instructions">
            <h2>Crie suas perguntas</h2>
        </div>
        <div class="basic-questions">
            <div class="clean-object"></div>
            <h2>Pergunta 1</h2>
            <div class="basic-question-input">
                <input class="question-input first-question validation0" type="text" placeholder="Texto da pergunta">
                <input class="questions background-color-input validation0" type="text" placeholder="Cor de fundo da pergunta">
            </div>
            <h2>Resposta correta</h2>
            <div class="basic-question-input">
                <input class="question-input right-answer validation0" type="text" placeholder="Resposta correta">
                <input class="questions right-answer-URL validation0" type="url" placeholder="URL da imagem">
            </div>
            <h2>Respostas incorretas</h2>
            <div class="basic-question-input">
                <input class="question-input wrong-answer test1 validation0" type="text" placeholder="Resposta incorreta 1">
                <input class="questions wrong-answer-URL test2 validation0" type="url" placeholder="URL da imagem 1">
            </div>
            <div class="basic-question-input">
                <input class="question-input wrong-answer test3 validation0" type="text" placeholder="Resposta incorreta 2">
                <input class="questions wrong-answer-URL test4 validation0" type="url" placeholder="URL da imagem 2">
            </div>
            <div class="basic-question-input">
                <input class="question-input wrong-answer test5 validation0" type="text" placeholder="Resposta incorreta 3">
                <input class="questions wrong-answer-URL test6 validation0" type="url" placeholder="URL da imagem 3">
            </div>
        </div>
        <div class="all-next-questions"></div>
    </section>

    <!--creat quizzs levels-->

    <section class="screen3-3 hidden">
        <div class="screen3-instructions">
            <h2>Agora, decida os níveis!</h2>
        </div>
        <div class="level">
            <h2>Nível 1</h2>
            <div class="level-description notification0">
                <input class="level-title level-input" type="text" placeholder="Título do nível">
                <input class="level-percentage level-input" type="text" placeholder="% de acerto mínima">
                <input class="level-img level-input" type="url" placeholder="URL da imagem do nível">
                <input class="level-details" type="text" placeholder="Descrição do nível">
            </div>
        </div>
        </section>
        `;
}

showCreatScreens();