const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");


// camelCase : la primera palabra toda en minuscula y apartir de la segunda
// palabra en adelante se pone la primera letra en mayuscula

console.log(letterContainer)
let nombres = ["juli", "joaquin", "ignacio"];
console.log(nombres)
// manejo de indices
console.log(nombres[0])
console.log(nombres[1])
console.log(nombres[2])

//longitud
console.log(nombres.length);
let options = {
    frutas: ["manzana",
        "frutilla", "pera", "sandia", "naranja", "mandarina", "uvas", "kiwi"],
    animales: ["perro", "nutria", "gato", "jirafa", "cocodrilo",
        "pantera", "tortuga", "mamut"],
    paises: ["argentina", "alemania", "chile", "uruguay", "mexico"],
};

//contadores
let winCount = 0;
let Count = 0;
let chosenWord = "";
//trabajaremos con el display de las opciones
const displayOption = () => {
    optionsContainer.innerHTML += `<h3> Porfavor selecione una opcion</h3>`;
}

lettbuttonCon = document.creaateElement("div");
for (let value in options) {
    buttonCon.innerHTML += `<button class="options" onClick="generateWord"('${value}')">${value}</button>`;
}

optionsContainer.appendChild(buttonCon);

const blocker = () => {
    let optionsButton = document.querySelectorAll(".options");
    let letterButton = document.querySelectorAll(".letters");

    optionsButton.forEach((button) => {
        button.disabled = true;

    }
    )
};


letterButton.forEach((button) => {
    button.disabled = true;
});

newGameContainer.classList.remove("hide");

const generateWord = (optionValue) => {
    let optionsButton = document.querySelectorAll(".options");
    optionsButton.forEach((button) => {
        if (button.innerText.toLowerCase() === optionValue) {
            button.classList.add("active");

        }
        button.disabled = true;
    });
    letterContainer.classList.remove("hide");
    userInputSection.innerText = "";
    let optionArray = options[optionValue]
    chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];

    chosenWord = chosenWord.toUpperCase();

    let displayItem = chosenWord.replace(/./g, '<span class= "dashes">_</span');
    userInputSection.innerHTML = displayItem;
};

//cuando presionemos click en el boton de  nuevo juego se reinicie todop
const initialicer = () => {
    winCount = 0;
    count = 0;

    userInputSection.innerHTML = "";
    optionsContainer.innerHTML = "";
    letterContainer.classList.add("hide");
    newGameContainer.classList.add("hide");
    letterContainer.innerHTML = "";
    for (let i = 65; i < 91; i++) {
        let button = document.createElement("button");
        button.classList.add("letters");
        button.innerText = String.fromCharCode(i);
    }
}

button.addEventListener("click", () => {
    let charArray = chosenWord.split("");
    let dashes = document.getElementsByClassName("dashes");

    if (charArray.includes(button.innerText)) {
        charArray.forEach((char, index) => {
            if (char === button.innerText) {
                dashes[index].innerText = char;
                winCount += 1;
                if (winCount === charArray.length) {
                    resultText.innerHTML = `<h2 class="win-msg">Ganaste>/h2>`;
                    blocker();
                }
            }
        })
    }
})

