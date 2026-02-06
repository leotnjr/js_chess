alert("test 0")

let columns = "ABCDEFGH";
let last_selected = "";
let color_shift = 0;

//Board Container
let message_box = document.createElement("p");
document.body.appendChild(message_box);
message_box.innerText = "Test";
message_box.className = "message";

let container = document.createElement("div");
document.body.appendChild(container);
container.classList.add("container");

let chessboard_left = document.createElement("div");
container.appendChild(chessboard_left);
chessboard_left.classList.add("chessboard");
chessboard_left.classList.add("left");

let chessboard = document.createElement("div");
container.appendChild(chessboard);
chessboard.classList.add("chessboard")

let chessboard_right = document.createElement("div");
container.appendChild(chessboard_right);
chessboard_right.classList.add("chessboard");
chessboard_right.classList.add("right");


for (var j = 0; j < 8; j ++){
  let column = document.createElement("div");
  chessboard.appendChild(column);
  
  column.classList.add("column")
  column.id = `${columns[j]}`
  
  for (var i = 0; i < 8; i++){
    let square_div = document.createElement("div");
    document.getElementById(`${columns[j]}`).appendChild(square_div);
    square_div.classList.add("square");
    
    square_div.id = `${columns[j]}${i+1}`;
    square_div.innerHTML = `${square_div.id}`; //`<p>${columns[j]}${i+1}</p>`;
    defineColor(j, i, square_div);
    
    square_div.addEventListener('mouseenter', enterSquare);
    square_div.addEventListener('mouseleave', leaveSquare);
    square_div.addEventListener('click', selectSquare);
  }
}

function enterSquare() {
  this.classList.add("hovered");
}

function leaveSquare() {
  this.classList.remove("hovered")
}

function selectSquare() {
}

function defineColor(col, row, element) {
  if ((col % 2 && row % 2) || (!(col % 2) && !(row % 2))){
    element.classList.add("white_square");
  } else
    element.classList.add("black_square");
}
