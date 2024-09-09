let rocket, star, heart; 

function preload() {
  rocket = loadImage("./assets/rocket.png");
  star = loadImage("./assets/star.png"); 
  heart = loadImage("./assets/heart.png");
}

function StampTool() {
  this.icon = "assets/rocket.png";
  this.name = "stamp";
  this.rocketSizeSlider = null;
  this.currentImage = rocket;
  this.lastDrawTime = 0; 
  this.drawInterval = 50;

  this.draw = function () {
    let now = millis();
    if (mouseIsPressed && (now - this.lastDrawTime > this.drawInterval)) {
      let rocketSize = this.rocketSizeSlider.value();
      let rocketX = mouseX - rocketSize / 2;
      let rocketY = mouseY - rocketSize / 2;
      image(this.currentImage, rocketX, rocketY, rocketSize, rocketSize);
      this.lastDrawTime = now;
    }
  };

  this.populateOptions = function () {
    select(".options").html(`
      <div class='menu'>
      <div id="sizeOfRocketControlContainer">Size of Sticker:</div>
      <div id="iconDropdownContainer">
        <select id="iconDropdown">
          <option value="rocket">Rocket</option>
          <option value="star">Star</option>
          <option value="heart">Heart</option>
        </select>
      </div>
      </div>
    `);

    this.rocketSizeSlider = createSlider(10, 100, 50);
    this.rocketSizeSlider.parent("#sizeOfRocketControlContainer");

    select("#iconDropdown").changed(() => {
      let selectedIcon = select("#iconDropdown").value();
      switch (selectedIcon) {
        case 'rocket':
          this.currentImage = rocket;
          break;
        case 'star':
          this.currentImage = star;
          break;
        case 'heart':
          this.currentImage = heart;
          break;
      }
    });
  };
}
