const PUZZLE_DIFFICULTY = 5;
const PUZZLE_HOVER_TINT = '#009900';

    let stage;
    let canvas;

    let img;
    let pieces;
    let puzzleWidth;
    let puzzleHeight;
    let pieceWidth;
    let pieceHeight;
    let currentPiece;
    let currentDropPiece;

    let mouse;

    function pic1() {//tải ảnh vào
        img = new Image();
        img.addEventListener('load', onImage, false);
        img.src = "../image/saber.PNG";
        newPuzzle();

    }

    function pic2() {
        img = new Image();
        img.addEventListener('load', onImage, false);
        img.src = "../image/blaster blade.jpg"
        newPuzzle()
}

function pic3(){
    img = new Image();
    img.addEventListener('load', onImage, false);
    img.src = "../image/blue eye.png"
    newPuzzle()
}

function pic4(){
    img = new Image();
    img.addEventListener('load', onImage, false);
    img.src = "../image/pacifica.jpg"
    newPuzzle();
}

function newPuzzle() {//chơi lại từ đầu
    pieces = [];
    mouse = {x: 0, y: 0};
    currentPiece = null;
    currentDropPiece = null;
    stage.drawImage(img, 0, 0, puzzleWidth, puzzleHeight, 0, 0, puzzleWidth, puzzleHeight);
    createTitle("Do you want to play again?? or Pick another one!!");
    buildPieces();
    }