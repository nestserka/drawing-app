let rocket;

// preload image of the stamp function
function preload() {
  rocket = loadImage("./assets/rocket.png");
}

function StampTool() {
  this.icon = "assets/rocket.png";
  this.name = "stamp";
  this.draw = function () {
    if (mouseIsPressed) {
      // the value of the rocket is based on the slider value
      let rocketSize = rocketSizeSlider.value();
      let rocketX = mouseX - rocketSize / 2;
      let rocketY = mouseY - rocketSize / 2;
      image(rocket, rocketX, rocketY, rocketSize, rocketSize);
    }
  };
}
new StampTool();
