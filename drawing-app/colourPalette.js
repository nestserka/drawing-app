function ColourPalette() {
    this.selectedColour = "#000000";
    var self = this;
    var colorPicker;

    this.setup = function() {
        colorPicker = select("#colorPicker");

        // Function to handle color changes
        var colorChange = function() {
            var c = this.value();
            self.selectedColour = c;
            fill(c);
            stroke(c);
        };

        colorPicker.value(this.selectedColour);
        colorPicker.input(colorChange);
        fill(this.selectedColour);
        stroke(this.selectedColour);
    };
}

new ColourPalette();
