/**
 * Description: Partly code is provided from templete provided by Introduction to Programming II on week 3.
 * Url https://www.coursera.org/learn/uol-introduction-to-programming-2/home/week/3 
 */

function FreehandTool(){
	this.icon = "assets/freehand.png";
	this.name = "freehand";
	this.freeHandToolContainer = null;
	var previousMouseX = -1;
	var previousMouseY = -1;

	this.draw = function(){
		if(mouseIsPressed){
			strokeWeight(this.freeHandToolContainer.value());
			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			else{
				line(previousMouseX, previousMouseY, mouseX, mouseY);
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
		}
	
		else{
			previousMouseX = -1;
			previousMouseY = -1;
		}
	};

	//My code: added options for thinkness of pen
	this.populateOptions = function() {
		select(".options").html(`
		  <div class='menu'>
			<div id="freeHandToolContainer">Size of Pen:</div>
			</div>
		`);
  
		this.freeHandToolContainer = createSlider(1, 20, 5);
		this.freeHandToolContainer.parent("#freeHandToolContainer");
	};
}