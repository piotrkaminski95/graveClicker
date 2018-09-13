"use strict";

import {TargetView} from "./view/TargetView.js";
import {TargetController} from "./controller/TargetController.js";
import {Grave} from "./model/Grave.js";
import {Target} from "./model/Target.js";
import {GamePanelView} from "./model/GamePanelView.js"
import {GamePanelController} from "./model/GamePanelController.js";
import {ItemController} from "./model/ItemController.js";
import {ItemView} from "./model/ItemView.js";
import {items} from "./resources/itemsJS/items.js";
import {storage} from "./storage/Storage.js";

localStorage.clear;
let gameController = new GamePanelController();
let gamePanelView = new GamePanelView(gameController);
let panelGame = document.getElementsByClassName("panel")[0];
panelGame.appendChild(gamePanelView.element);


localStorage.setItem('itemSet', items)
console.log(storage.itemSet.length);
let itemBoard = document.getElementsByClassName("panelContent")[0];
for(let item of storage.itemSet){
    console.log("dziala?");
    let itemController = new ItemController(item);
    let itemView = new ItemView(itemController);
    itemBoard.appendChild(itemView.element)
}

let grave = new Grave();
grave.setNameAndImage("testGrave", "./img/square.png");

let target = new Target();
target.hp = 10;
target.grave = grave;

let tController = new TargetController(target);
let tView = new TargetView(tController);

let graveyard = document.getElementsByClassName("target")[0];

// graveyard.appendChild(tView.element);