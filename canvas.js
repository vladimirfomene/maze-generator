var cols, rows;
var cellSize = 50;
var grid = [];
var current;
function setup() {
  createCanvas(500, 500);
	cols = Math.floor(height / cellSize);
	rows = Math.floor(width / cellSize);
	for(let i = 0; i < rows; i++){
		for(let j = 0; j < cols; j++){
			grid.push(new Cell(i, j));
		}
	}

	current = grid[0];
}

function draw() {
  background(51);
	for(let i = 0; i < grid.length; i++){
		grid[i].show();
	}

	current.visited = true;
	current.checkNeighbors();
}

function index(i, j){
		if(i < 0 || i > cols || j < 0 || j > rows){
			return -1;
		}else{
			return i + j * cols;
		}
}


