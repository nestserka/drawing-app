function SprayCanTool() {
	this.name = "sprayCanTool";
	this.icon = "assets/spraycan.png";
	this.sprayCanToolContainer = null;
	
	var points = 13;
	var spread = 10;
  
	this.draw = function () {
	  if (mouseIsPressed) {
		strokeWeight(this.sprayCanToolContainer.value());
		
		Array.from({ length: points }).forEach(() => {
		  point(
			random(mouseX - spread, mouseX + spread),
			random(mouseY - spread, mouseY + spread)
		  );
		});
	  }
	};
  
	this.populateOptions = function () {
	  select(".options").html(`
		<div class='menu'>
		  <div id="sprayCanToolContainer">Intensity of Spray:</div>
		</div>
	  `);
  
	  this.sprayCanToolContainer = createSlider(1, 20, 1);
	  this.sprayCanToolContainer.parent("#sprayCanToolContainer");
	};
  }