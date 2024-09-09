function BrushTool() {
  this.icon = "assets/brush.png";
  this.name = "brush";
  var previousMouseX = -1;
  var previousMouseY = -1;
  this.brushSizeSlider = null;

  this.draw = function() {
      if (mouseIsPressed) {
          strokeWeight(this.brushSizeSlider.value());
          if (previousMouseX == -1) {
              previousMouseX = mouseX;
              previousMouseY = mouseY;
          } else {
              line(previousMouseX, previousMouseY, mouseX, mouseY);
              previousMouseX = mouseX;
              previousMouseY = mouseY;
          }
      } else {
          previousMouseX = -1;
          previousMouseY = -1;
      }
  };

  this.populateOptions = function() {
      select(".options").html(`
        <div class='menu'>
          <div id="brushSizeControlContainer">Size of Brush:</div>
          </div>
      `);

      this.brushSizeSlider = createSlider(1, 20, 5);
      this.brushSizeSlider.parent("#brushSizeControlContainer");
  };
}