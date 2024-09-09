let rocket;

function preload() {
  rocket = loadImage("./assets/rocket.png");
}

function StampTool() {
  this.icon = "assets/rocket.png";
  this.name = "stamp";
  this.rocketSizeSlider = null;

  this.draw = function () {
    if (mouseIsPressed) {
      let rocketSize = this.rocketSizeSlider.value();
      let rocketX = mouseX - rocketSize / 2;
      let rocketY = mouseY - rocketSize / 2;
      image(rocket, rocketX, rocketY, rocketSize, rocketSize);
    }
  };

  this.populateOptions = function () {
    select(".options").html(`
          <div id="sizeOfRocketControlContainer">Size of Sticker:</div>
      `);

    this.rocketSizeSlider = createSlider(10, 100, 50);
    this.rocketSizeSlider.parent("#sizeOfRocketControlContainer");
  };
}
