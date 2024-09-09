function HelperFunctions(imgRef, imgLoadedRef, inputElement) {
  //event handler for the clear button event. Clears the screen
  select("#clearButton").mouseClicked(function () {
    background(255, 255, 255);
    imgRef = null;
    imgLoadedRef = false;
    inputElement.value('');
    loadPixels();
  });

  //event handler for the save image button. saves the canvsa to the
  select("#saveImageButton").mouseClicked(function () {
    saveCanvas("myPicture", "jpg");
  });
}
