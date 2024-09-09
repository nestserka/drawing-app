//global variables that will store the toolbox colour palette
var toolbox = null;
var colourP = null;
var helpers = null;
var stampTool = null;

var input;
var img;
var imgLoaded = false;

function setup() {
  canvasContainer = select("#content");
  var c = createCanvas(
    canvasContainer.size().width,
    canvasContainer.size().height
  );
  input = createFileInput(handleFile);
  input.position(350, 10);
  c.parent("content");

  helpers = new HelperFunctions(img, imgLoaded, input);
  colourP = new ColourPalette();
  colourP.setup();

  //create a toolbox for storing the tools
  toolbox = new Toolbox();

  //add the tools to the toolbox.
  toolbox.addTool(new FreehandTool());
  toolbox.addTool(new BrushTool());
  toolbox.addTool(new LineToTool());
  toolbox.addTool(new SprayCanTool());
  toolbox.addTool(new mirrorDrawTool());
  toolbox.addTool(new StampTool());
  toolbox.addTool(new ShapesTool());
  toolbox.addTool(new EraserTool());

  background(255);
}

function draw() {
  if (toolbox.selectedTool.hasOwnProperty("draw")) {
    toolbox.selectedTool.draw();
  } else {
    alert("it doesn't look like your tool has a draw method!");
  }

  if (imgLoaded) {
    image(img, 0, 0);
  }
}

function handleFile(file) {
  if (file.type === "image") {
    uploadedImage = loadImage(file.data, () => {
      uploadedImage.resize(
        canvasContainer.size().width,
        canvasContainer.size().height
      );
      clear();
      image(uploadedImage, 0, 0);
    });
  } else {
    alert("Please upload an image file.");
  }
}
