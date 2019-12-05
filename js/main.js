console.log("Main.js Loaded");

//
// Setup SEE MORE buttons on project-boxes
//
var projectBoxes = document.getElementsByClassName("project-box");
// projectBoxes[0] is the spotlight
//Buttons
var moreButtons = new Array();
//Get Expand Buttons
for(var i = 1; i < projectBoxes.length; i++){
    for(var x = 0; x < projectBoxes[i].childNodes.length; x++){
        if(projectBoxes[i].childNodes[x].textContent == "Show More"){
            moreButtons.push(projectBoxes[i].childNodes[x]);
        }
    }
}

//Set onclick for the buttons
for(var i = 0; i < moreButtons.length; i++){
    //Create function
    var func = function(){
        //If the button is show more
        if(this.textContent == "Show More"){
            //Find and set the expand child to flex
            for(var x = 0; x < this.parentElement.childNodes.length; x++){
                if(this.parentElement.childNodes[x].className == "expand"){
                    this.parentElement.childNodes[x].style.display = "flex";
                }
            }
            this.parentElement.style.gridColumn = "1 / span2";
            this.innerHTML = "Show Less";
        }else {
            //Find and set the expand child to none
            for(var x = 0; x < this.parentElement.childNodes.length; x++){
                if(this.parentElement.childNodes[x].className == "expand"){
                    this.parentElement.childNodes[x].style.display = "none";
                }
            }
            this.parentElement.style.gridColumn = "auto";
            this.innerHTML = "Show More";
        }
    };
    moreButtons[i].onclick = func;
}
