let numberOfFaces = 5;
const theLeftSide = document.getElementById('leftSide');
const theRightSide = document.getElementById('rightSide');

//window.addEventListener('load', generateFaces)
//console.log("Random Number",Math.floor(Math.random()*400)+1)

function generateFaces() {

    for(let i = 0; i<numberOfFaces; i++) {

        var face = document.createElement("img"); // Image

        let randomTop = Math.floor(Math.random()*400)+1 // Random TOP
        let randomLeft = Math.floor(Math.random()*400)+1 // Random LEFT

        // Properties For Faces
        face.src = "img/smile.png"
        face.style.top = randomTop + "px"
        face.style.left =  randomLeft + "px"
        face.addEventListener('click', nextLevel)

        theLeftSide.appendChild(face);
        const leftSideImages = theLeftSide.cloneNode(true);
        leftSideImages.removeChild(leftSideImages.lastChild);
        theRightSide.appendChild(leftSideImages);
    }

    document.body.addEventListener('click', gameOver) // Call GameOver

}

function nextLevel() {
    event.stopPropagation();
    numberOfFaces += 5;
    generateFaces();
}


function gameOver(){
    alert('Game Over')
    document.body.removeEventListener('click', gameOver)
    theLeftSide.removeEventListener('click', gameOver)
}