let numberOfFaces = 5;
const theLeftSide = document.getElementById('leftSide');
const theRightSide = document.getElementById('rightSide');
let level = 0;

//window.addEventListener('load', generateFaces)
//console.log("Random Number",Math.floor(Math.random()*400)+1)

function generateFaces() {

    for(let i = 0; i<numberOfFaces; i++) {

        var face = document.createElement("img"); // Image

        let randomTop = Math.floor(Math.random()*400)+1 // Random TOP
        let randomLeft = Math.floor(Math.random()*400)+1 // Random LEFT

        // Properties For Faces
        face.src = "https://cdn4.iconfinder.com/data/icons/emoji-18/61/2-48.png"
        face.style.top = randomTop + "px"
        face.style.left =  randomLeft + "px"
        face.addEventListener('click', nextLevel)
        // Append icons in the left Side
        theLeftSide.appendChild(face);
        //Clone Left Side 
        const leftSideImages = theLeftSide.cloneNode(true);
        leftSideImages.removeChild(leftSideImages.lastChild);
        theRightSide.appendChild(leftSideImages);
    }

    document.body.addEventListener('click', gameOver) // Call GameOver

}

function nextLevel() {
        event.stopPropagation();
        numberOfFaces += 5;
        level ++;
        while (theLeftSide.firstChild) {
            theLeftSide.removeChild(theLeftSide.firstChild);
            }
        while (theRightSide.firstChild) {
            theRightSide.removeChild(theRightSide.firstChild);
            }
        generateFaces();
    }


    function gameOver(){
        alert('Game Over you reached the level: ' + level )
        document.body.removeEventListener('click', gameOver)
        theLeftSide.removeEventListener('click', gameOver)
    }