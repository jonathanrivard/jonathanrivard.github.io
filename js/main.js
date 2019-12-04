console.log("Main.js Loaded");

//
// Setup SEE MORE buttons on project-boxes
//
var projectBoxes = document.getElementsByClassName("project-box");
// projectBoxes[0] is the spotlight
//Expand Divs
var expands = new Array();
//Buttons
var moreButtons = new Array();
//Get Expands and Buttons
for(var i = 1; i < projectBoxes.length; i++){
    for(var x = 0; x < projectBoxes[i].childNodes.length; x++){
        if(projectBoxes[i].childNodes[x].className == "expand"){
            expands.push(projectBoxes[i].childNodes[x]);
        }else if(projectBoxes[i].childNodes[x].textContent == "See More"){
            moreButtons.push(projectBoxes[i].childNodes[x]);
        }
    }
}

//Set onclick for the buttons
for(var i = 0; i < moreButtons.length; i++){
    var num = i;
    var func = function(){
        if(this.textContent == "See More"){
            for(var x = 0; x < this.parentElement.childNodes.length; x++){
                if(this.parentElement.childNodes[x].className == "expand"){
                    this.parentElement.childNodes[x].style.display = "flex";
                }
            }
            this.innerHTML = "See Less";
        }else {
            for(var x = 0; x < this.parentElement.childNodes.length; x++){
                if(this.parentElement.childNodes[x].className == "expand"){
                    this.parentElement.childNodes[x].style.display = "none";
                }
            }
            this.innerHTML = "See More";
        }
    };
    moreButtons[i].onclick = func;
}
