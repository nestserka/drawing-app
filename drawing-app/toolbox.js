function Toolbox() {
  var self = this;

  this.tools = [];
  this.selectedTool = null;
  this.onToolSelected = null;

  var toolbarItemClick = function () {
    var items = selectAll(".sideBarItem");
    items.forEach((item) => item.style("border", "0"));

    var toolName = this.id().split("sideBarItem")[0];
    self.selectTool(toolName);
    loadPixels();
  };

  var addToolIcon = function (icon, name) {
    var sideBarItem = createDiv("<img src='" + icon + "'></div>");
    sideBarItem.class("sideBarItem");
    sideBarItem.id(name + "sideBarItem");
    sideBarItem.parent("sidebar");
    sideBarItem.mouseClicked(toolbarItemClick);
  };

  this.addTool = function (tool) {
    if (!tool.hasOwnProperty("icon") || !tool.hasOwnProperty("name")) {
      alert("Make sure your tool has both a name and an icon.");
      return;
    }
    this.tools.push(tool);
    addToolIcon(tool.icon, tool.name);
    if (this.selectedTool == null) {
      this.selectTool(tool.name);
    }
  };

  this.selectTool = function (toolName) {
    for (var i = 0; i < this.tools.length; i++) {
      if (this.tools[i].name == toolName) {
        if (
          this.selectedTool != null &&
          this.selectedTool.hasOwnProperty("unselectTool")
        ) {
          this.selectedTool.unselectTool();
        }

        this.selectedTool = this.tools[i];
        select("#" + toolName + "sideBarItem").style(
          "border",
          "2px solid #E1D7B7"
        );

        if (this.selectedTool.hasOwnProperty("populateOptions")) {
          this.selectedTool.populateOptions();
        }

        if (typeof self.onToolSelected === "function") {
          self.onToolSelected(this.selectedTool);
        }

        return;
      }
    }
  };

  this.setOnToolSelectedCallback = function (callback) {
    self.onToolSelected = callback;
  };
}
