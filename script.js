function Game() {
	this.level = 0;
};

Game.prototype.play = function() {
	this.level++;
	console.log("Witamy na poziomie " + this.level + ".");
	this.unlock();
};

Game.prototype.unlock = function() {
	if (this.level === 42) {
		Robot.prototype.deployLaser = function() {
			alert(this.name + " strzela do Ciebie z lasera.");
		};
	};
};

function Robot(name, year, owner) {
	this.name = name;
	this.year = year;
	this.owner = owner;
};

var game = new Game();
var robby = new Robot("Robik", 2010, "Dr. Moroe");
var rosie = new Robot("Robusia", 1950, "Jetson");

while (game.level < 42) {
	game.play();
};

robby.deployLaser();
rosie.deployLaser();
