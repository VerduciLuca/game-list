const g1 = new Game(
    "./assets/dsr.jpg",
    "Dark Souls: Remastered",
    2018,
    "9 su 10"
);
const g2 = new Game("./assets/ds2.jpg", "Dark Souls 2: SotfS", 2015, "7 su 10");
const g3 = new Game("./assets/ds3.webp", "Dark Souls III", 2013, "8.5 su 10");
const g4 = new Game("./assets/bb.jpg", "Bloodborne", 2015, "9 su 10");
const g5 = new Game(
    "./assets/sekiro.jpg",
    "Sekiro: Shadows Die Twice",
    2019,
    "8.5 su 10"
);
const g6 = new Game("./assets/er.jpg", "Elden Ring", 2022, "9.5 su 10");

const gameArr = [g1, g2, g3, g4, g5, g6];

function render(list) {
  const mainDiv = document.getElementById("main-div"); //trovo l'elemento
  mainDiv.innerHTML = ""; //questo svuota la div

for (let i = 0; i < list.length; i++) {
    let game = list[i];
    const gameCard = document.createElement("div");
    gameCard.classList.add("game-card"); //do la classe alle div nuove

    const title = document.createElement("span");
    const yop = document.createElement("span");
    const vote = document.createElement("span"); //creo le span vuote per le info

    const nodeTitle = document.createTextNode("Titolo: " + game.title);
    const nodeYop = document.createTextNode("Anno di uscita: " + game.yop);
    const nodeVote = document.createTextNode("Voto: " + game.vote); //creo le info

    const gameImage = document.createElement("img");
    gameImage.src = game.image;

    title.appendChild(nodeTitle);
    yop.appendChild(nodeYop);
    vote.appendChild(nodeVote); //metto le info negli span

    gameCard.appendChild(title);
    gameCard.appendChild(yop);
    gameCard.appendChild(vote);
    gameCard.appendChild(gameImage); //metto tutti gli span e l'immagini nelle card

    mainDiv.appendChild(gameCard); // tutte le card dentro il main

    mainDiv.classList.add("main-div");
    }
}

render(gameArr);

function sortByName() {
    gameArr.sort((a, b) => a.title.localeCompare(b.title));

    render(gameArr);
}

function sortByYop() {
    gameArr.sort((a, b) => a.yop - b.yop);

    render(gameArr);
}

function sortByVote() {
    gameArr.sort((a, b) => a.vote.localeCompare(b.vote));

    render(gameArr);
}
