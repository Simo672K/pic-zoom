const zoomField = document.querySelector("div.zoom-field-container");
const displayOffsets = document.querySelector("div.offsets-pose");
const zoomArea = document.querySelector("div.zoom-area");

zoomField.addEventListener('mousemove',positions);

function positions(event){
    displayOffsets.textContent = `MouseX: ${event.offsetX} MouseY: ${event.offsetY}`;
    // console.log("mouse move")
    moveSquare(event.offsetX, event.offsetY);
    event.preventDefault();
}

const moveSquare = (pos_x, pos_y) =>{
    zoomArea.style.top = (pos_y - 50) + "px";
    zoomArea.style.left = (pos_x - 50) + "px";
}







