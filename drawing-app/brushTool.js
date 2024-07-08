function BrushTool() {
  this.icon = "assets/brush.png";
  this.name = "brush";
  var previousMouseX = -1;
  var previousMouseY = -1;

  this.draw = function () {
    // draw a brush tool on mouse move
    if (mouseIsPressed) {
    // set the stroke for the brush
      strokeWeight(brushSizeSlider.value());
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
}
