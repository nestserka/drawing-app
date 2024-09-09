function EraserTool() {
  this.icon = "assets/eraser.png";
  this.name = "eraserTool";
  this.eraserSizeTool = null;
  var previousMouseX = -1;
  var previousMouseY = -1;

  this.draw = function () {

    if (mouseIsPressed) {
      if (previousMouseX == -1) {
        previousMouseX = mouseX;
        previousMouseY = mouseY;
      }
      else {
        push();
        stroke(255, 255, 255);
        strokeWeight(this.eraserSizeTool.value());
        line(previousMouseX, previousMouseY, mouseX, mouseY);
        pop();
        previousMouseX = mouseX;
        previousMouseY = mouseY;
      }
    }
    else {
      previousMouseX = -1;
      previousMouseY = -1;
    }
  };
  this.populateOptions = function () {
    select(".options").html(`
      <div class='menu'>
        <div id="eraserSizeControlContainer">Size of Eraser:</div>
      </div>
    `);

    this.eraserSizeTool = createSlider(10, 100, 50);
    this.eraserSizeTool.parent("#eraserSizeControlContainer");
  };
}
