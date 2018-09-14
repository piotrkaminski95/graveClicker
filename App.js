"use strict";

import {TargetView} from "./view/TargetView.js";
import {TargetController} from "./controller/TargetController.js";
import {Grave} from "./model/Grave.js";
import {Target} from "./model/Target.js";
import {GamePanelView} from "./view/GamePanelView.js"
import {GamePanelController} from "./controller/GamePanelController.js";
import {ItemController} from "./controller/ItemController.js";
import {ItemView} from "./view/ItemView.js";
import {items} from "./resources/itemsJS/items.js";
import {storage} from "./storage/Storage.js";
import {CoinView} from "./view/CoinView.js";
import {Coin} from "./model/Coin.js";
import {MathemathicHelper} from "../model/MathemathicHelper.js";
import {timer} from "./model/Timer.js";
import {timerObservator} from "./model/Observator.js";

localStorage.clear;
let gameController = new GamePanelController();
let gamePanelView = new GamePanelView(gameController);
let panelGame = document.getElementsByClassName("panel")[0];
panelGame.appendChild(gamePanelView.element);

localStorage.setItem('itemSet', items)

let itemBoard = document.getElementsByClassName("panelContent")[0];
for(let item of storage.itemSet){
    let itemController = new ItemController(item);
    let itemView = new ItemView(itemController);
    itemBoard.appendChild(itemView.element);
}

let coinView = new CoinView();
let coin = new Coin();

let target = new Target();
target.fullHp = 0;
target.grave = Grave.createGrave("click grave to start", []);

let tController = new TargetController(target);
let tView = new TargetView(tController);

let graveyard = document.getElementsByClassName("site")[0];

graveyard.appendChild(tView.element);

timerObservator.subscribe(tController);
