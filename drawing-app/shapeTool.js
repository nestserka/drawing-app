function ShapesTool() {
  this.icon = "assets/shapes.png";
  this.name = "shapes";
  this.currentShape = "triangle";
  this.sizeInput = null;

  function drawTriangle(x, y, size) {
    noFill();
    triangle(x, y, x + size, y, x + size / 2, y - size);
  }

  function drawSquare(x, y, size) {
    noFill();
    rect(x, y, size, size);
  }

  function drawPentagon(x, y, size) {
    noFill();
    beginShape();
    for (let i = 0; i < 5; i++) {
      let angle = (TWO_PI / 5) * i;
      let px = x + cos(angle) * size;
      let py = y + sin(angle) * size;
      vertex(px, py);
    }
    endShape(CLOSE);
  }

  function drawArrow(x, y, size) {
    noFill();
    push();
    translate(x, y);
    rotate(PI / 4);
    line(0, 0, size, 0);
    line(size, 0, size - 10, -5);
    line(size, 0, size - 10, 5);
    pop();
  }

  this.draw = function () {
    let size = parseFloat(this.sizeInput.value()) || 50;
    let x = mouseX - size / 2;
    let y = mouseY - size / 2;

    if (mouseIsPressed) {
      switch (this.currentShape) {
        case "triangle":
          drawTriangle(x, y, size);
          break;
        case "square":
          drawSquare(x, y, size);
          break;
        case "pentagon":
          drawPentagon(mouseX, mouseY, size);
          break;
        case "arrow":
          drawArrow(mouseX, mouseY, size);
          break;
      }
    }
  };

  this.populateOptions = function () {
    select(".options").html(`
        <div class='menu'>
          <div id="sizeOfShapeControlContainer">Size of Shape:</div>
          <div id="shapeDropdownContainer">
            <select id="shapeDropdown">
              <option value="triangle">Triangle</option>
              <option value="square">Square</option>
              <option value="pentagon">Pentagon</option>
              <option value="arrow">Arrow</option>
            </select>
          </div>
          <div id="shapeSizeInputContainer">
            <input type="text" id="shapeSizeInput" value="50" placeholder="Enter size">
          </div>
        </div>
      `);

    this.sizeInput = select("#shapeSizeInput");

    this.sizeInput.changed(() => {
      let size = parseFloat(this.sizeInput.value());

      if (isNaN(size)) {
        alert("Please enter a valid number.");
        this.sizeInput.value("50");
      } else if (size < 10) {
        alert("Size can be a minimum of 10.");
        this.sizeInput.value("10");
      } else if (size > 100) {
        alert("Size cannot be more than 100.");
        this.sizeInput.value("100");
      }
    });

    select("#shapeDropdown").changed(() => {
      this.currentShape = select("#shapeDropdown").value();
    });
  };
}
