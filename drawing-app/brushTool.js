function BrushTool() {
  this.icon = "assets/brush.png";
  this.name = "brush";
  var previousMouseX = -1;
  var previousMouseY = -1;

  this.draw = function () {
    if (mouseIsPressed) {
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
