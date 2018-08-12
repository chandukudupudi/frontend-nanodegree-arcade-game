// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    // Resets enemy position when it goes offscreen (looping effect)
      if (this.x > 550) {
           this.x = -100;
       }
    // Detects collisions and resets the player
       if (player.x < this.x + 60 &&
          player.x + 37 > this.x &&
          player.y < this.y + 25 &&
          30 + player.y > this.y) {
            player.sprite = 'images/char-cat-girl.png';
            setTimeout(function(){
              player.sprite = 'images/char-boy.png';
              player.x = 200;
              player.y = 400;
            }, 3000);

    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, speed){
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.sprite = 'images/char-boy.png';
}

Player.prototype.update = function() {

};
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(keyEnter) {
  switch (keyEnter) {
    case 'left':
      this.x -= this.speed;
      if (this.x < 0) {
        this.x = 0;
      }
      break;
    case 'right':
      this.x += this.speed;
      if (this.x > 400) {
        this.x = 400;
      }
      break;
    case 'up':
      this.y -= this.speed;
      if (this.y < 0) {
        this.x = 200;
        this.y = 400;
        alert('Dang Skippy, you made it!');
      }
      break;
    case 'down':
      this.y += this.speed;
      if (this.y > 425) {
        this.y = 425;
      }
      break;
  }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var enemy = new Enemy(-100,300,400);
var enemy2 = new Enemy(-100,200,100);
var enemy3 = new Enemy(-100,100,300);
var enemy4 = new Enemy(-100,250,200);
var enemy5 = new Enemy(-100,150,500);
var enemy6 = new Enemy(-100,350,50);
allEnemies.push(enemy, enemy2, enemy3, enemy4, enemy5, enemy6);
var player = new Player(200,400,50);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
