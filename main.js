var header = document.getElementsByTagName("header");
var headerDiv = document.createElement("div");
headerDiv.className = "container-fluid";
var headerRow = document.createElement("div");
headerRow.className = "row";
var titleDiv = document.createElement("div");
titleDiv.className = "title col-xs-12 blueGradient"
var titleH1 = document.createElement("h1");
titleH1.className = "noMargin col-xs-12";
var titleH1Text = document.createTextNode("Derek Sharp");
var subTitleH4 = document.createElement("h4");
subTitleH4.className = "noMargin col-xs-12";
var subTitleH4Text = document.createTextNode("Game Design Portfolio");
var tabsDiv = document.createElement("div");
var headertabs = 3;

function OrganizeElements() {
  titleH1.appendChild(titleH1Text);
  titleDiv.appendChild(titleH1);
  subTitleH4.appendChild(subTitleH4Text);
  titleDiv.appendChild(subTitleH4);
  headerRow.appendChild(titleDiv);
  headerRow.appendChild(tabsDiv);
  headerDiv.appendChild(headerRow);
  header[0].appendChild(headerDiv);
}

function CreateTabs () {
  for(var i = 0; i < headertabs; i++) {
    var thisTabLink = document.createElement("a");
    var thisTabDiv = document.createElement("div");
    thisTabDiv.className = "tabDiv col-xs-4";
    var thisTabH4 = document.createElement("h4");
    thisTabH4.className = "noMargin tab";
    var thisTabText = document.createTextNode("");
    switch (i) {
      case 0:
        thisTabText.nodeValue = "Home";
        thisTabLink.href = "index.html";
        break;
      case 1:
        thisTabText.nodeValue = "About";
        thisTabLink.href = "about.html";
        break;
      case 2:
        thisTabText.nodeValue = "Projects";
        thisTabLink.href = "projects.html";
        break;
    }
    SetActiveTab(thisTabDiv,thisTabText.nodeValue);
    thisTabH4.appendChild(thisTabText);
    thisTabDiv.appendChild(thisTabH4);
    thisTabLink.appendChild(thisTabDiv);
    tabsDiv.appendChild(thisTabLink);
  }
}
function SetActiveTab(tabDiv, name) {
  if(document.title.includes(name)) {
    tabDiv.className = "activeTabDiv col-xs-4";
  }
}

function PopulateTextBoxes () {
  var nameBox = document.getElementById("Name");
  var numberBox = document.getElementById("phoneNumber");
  var emailBox = document.getElementById("emailAddress");
  var nameNode = document.createTextNode("Derek James Sharp");
  var numberNode = document.createTextNode("(970) 290-5361");
  var emailNode = document.createTextNode("dsharp640@comcast.net");
  nameBox.appendChild(nameNode);
  numberBox.appendChild(numberNode);
  numberBox.href = "tel:9702905361";
  emailBox.appendChild(emailNode);
  emailBox.href = "mailto:dsharp640@comcast.net"
}

OrganizeElements();
CreateTabs();
PopulateTextBoxes();
