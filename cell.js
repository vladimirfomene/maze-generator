class Cell {

	constructor(i, j){
		this.i = i;
		this.j = j;
		this.walls = { top: true, right: true, bottom: true, left: true };
		this.visited = false;

	}

	show(){
		var x = this.i * cellSize;
		var y = this.j * cellSize;
		stroke(255);
		if(this.walls.top) line(x, y, x + cellSize, y);
		if(this.walls.right) line(x + cellSize, y, x + cellSize, y + cellSize);
		if(this.walls.bottom) line(x + cellSize, y + cellSize, x, y + cellSize);
		if(this.walls.left) line(x, y + cellSize, x, y);

		if(this.visited){
			fill(255, 0, 255, 100);
			rect(x, y, cellSize, cellSize);
		}
	}

	checkNeighbors(){
		var neighbors = [];

		var top = grid[index(i, j - 1)];
		var right = grid[index(i + 1, j)];
		var bottom = grid[index(i, j + 1)];
		var left = grid[index(i - 1, j)];

		if(top && !top.visited) neighbors.push(top);
		if(right && !right.visited) neighbors.push(right);
		if(bottom && !bottom.visited) neighbors.push(bottom);
		if(left && !left.visited) neighbors.push(left);
	
		return neighbors;
	}

}
