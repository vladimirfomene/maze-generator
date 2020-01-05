var cols, rows;
var cellSize = 50;
var grid = [];
var stack = [];
var current;
function setup() {
  createCanvas(500, 500);
	cols = Math.floor(height / cellSize);
	rows = Math.floor(width / cellSize);
	frameRate(5);

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
	current.highlight();
	var next = current.checkNeighbors();

	if(next){
		next.visited = true;
		stack.push(current);

		removeWalls(current, next);
		current = next;
	} else if(stack.length > 0){
		current = stack.pop();
	}
}

function index(i, j){
		if(i < 0 || i > cols - 1 || j < 0 || j > rows - 1){
			return -1;
		}else{
			return j + i * cols;
		}
}

function removeWalls(a, b){
		var x = a.i - b.i;
		if(x === 1){
			a.walls["left"] = false;
			b.walls["right"] = false;
		} else if(x === -1){
			a.walls["right"] = false;
			b.walls["left"] = false;
		}

		var y = a.j - b.j;
		if(y === 1){
			a.walls["top"] = false;
			b.walls["bottom"] = false;
		} else if(y === -1){
			a.walls["bottom"] = false;
			b.walls["top"] = false;
		}


}


