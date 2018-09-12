"use strict";

import {TargetView} from "./view/TargetView.js";
import {TargetController} from "./controller/TargetController.js";
import {Grave} from "./model/Grave.js";
import {Target} from "./model/Target.js";
import {GamePanelView} from "./model/GamePanelView.js"
import {GamePanelController} from "./model/GamePanelController.js";
import {ItemController} from "./model/ItemController.js";
import {ItemView} from "./model/ItemView.js";

let gameController = new GamePanelController();
let gamePanelView = new GamePanelView(gameController);
let panelGame = document.getElementsByClassName("panel")[0];
panelGame.appendChild(gamePanelView.element);

//let itemController = new ItemController();
//let itemView = new ItemView(itemController);
//let items = document.getElementsByClassName("panel-game")[0];
//items.appendChild(itemView.element);

let target = new Target();
target.fullHp = 0;
target.grave = Grave.createGrave("click grave to start", []);

let tController = new TargetController(target);
let tView = new TargetView(tController);

let graveyard = document.getElementsByClassName("site")[0];

graveyard.appendChild(tView.element);