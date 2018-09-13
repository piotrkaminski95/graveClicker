export class GamePanelController {
    
    constructor(){
    }

    openContent(e) {
        let name = e.target.name;
        let i, tabcontent, contentToDisplay;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        
        contentToDisplay = document.getElementsByClassName(name);
        for(i = 0; i < contentToDisplay.length; i++){
            console.log("change from none to block");
            contentToDisplay[i].style.display = "block";
        }
    }
}