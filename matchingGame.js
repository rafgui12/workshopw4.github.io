let numberOfFaces = 5;
const theLeftSide = document.getElementById('leftSide');

//window.addEventListener('load', generateFaces)
//console.log("Random Number",Math.floor(Math.random()*400)+1)

function generateFaces() {

    for(let i = 0; i<numberOfFaces; i++) {

        var face = document.createElement("img");
        face.src = "img/smile.png"
        let randomTop = Math.floor(Math.random()*400)+1
        let randomLeft = Math.floor(Math.random()*400)+1
        face.style.top = randomTop + "px"
        face.style.left =  randomLeft + "px"
        theLeftSide.appendChild(face);

    }

}