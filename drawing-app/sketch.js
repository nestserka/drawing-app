var toolbox = null;
var colourP = null;
var helpers = null;
var stampTool = null;
var canvasHistory = []; 
var canvasRedoHistory = [];  
var isDrawing = false;

function setup() {
  canvasContainer = select('#content');
  var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
  c.parent("content");

  helpers = new HelperFunctions();
  colourP = new ColourPalette();
  colourP.setup(); 

 
  toolbox = new Toolbox();
  toolbox.addTool(new FreehandTool()); 
  toolbox.addTool(new BrushTool());
  toolbox.addTool(new LineToTool());
  toolbox.addTool(new SprayCanTool());
  toolbox.addTool(new mirrorDrawTool());
  toolbox.addTool(new StampTool());
  toolbox.addTool(new ShapesTool());

  background(255);
  
  saveState();
  
  document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'z') {
      undo();
    } else if (event.ctrlKey && event.key === 'y') {
      redo(); 
    }
  });
}

function draw() {
  if (toolbox.selectedTool.hasOwnProperty("draw")) {
    toolbox.selectedTool.draw();
    if (mouseIsPressed) {
      if (!isDrawing) {
        saveState();
        isDrawing = true;
      }
    } else {
      isDrawing = false;
    }
  } else {
    alert("It doesn't look like your tool has a draw method!");
  }
}


function saveState() {
  if (!Array.isArray(canvasHistory)) {
    canvasHistory = [];
  }
  canvasHistory.push(get()); 
  canvasRedoHistory = []; 
}


function undo() {
  if (canvasHistory.length > 0) {
    canvasRedoHistory.push(get());
    let previousState = canvasHistory.pop();
    clear();
    image(previousState, 0, 0);
  }
}


function redo() {
  if (canvasRedoHistory.length > 0) {
  
    canvasHistory.push(get());
    let redoState = canvasRedoHistory.pop();
    clear();
    image(redoState, 0, 0);
  }
}

