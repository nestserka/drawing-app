/**
 * Description: Partly the code is the base from the templete provided by Introduction to Programming II on week 3.
 * Url https://www.coursera.org/learn/uol-introduction-to-programming-2/home/week/3 
 */
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

  //My code: added input for file upload
  input = createFileInput(handleFile);
  input.position(400, 10);
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
  if (toolbox.selectedTool instanceof mirrorDrawTool) {
    alert("Image upload is not allowed while MirrorDrawTool is selected.");
    return;
  }
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
