let numberOfFaces = 5;
const theLeftSide = document.getElementById('leftSide');

console.log("Random Number",Math.floor(Math.random()*400)+1)

function generateFaces() {

    for(let i = 0; i<numberOfFaces; i++) {

        var face = document.createElement("img");
        face.src = "img/smile.png"
        let randomNumb = Math.floor(Math.random()*400)+1
        face.style.top = randomNumb + "px"
        face.style.left =  randomNumb + "px"
        theLeftSide.appendChild(face);

    }

}