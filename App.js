"use strict";

import {TargetView} from "./view/TargetView.js";
import {TargetController} from "./controller/TargetController.js";
import {Grave} from "./model/Grave.js";
import {Target} from "./model/Target.js";

let grave = new Grave();
grave.setNameAndImage("testGrave", "./img/square.png");

let target = new Target();
target.hp = 10;
target.grave = grave;

let tController = new TargetController(target);
let tView = new TargetView(tController);

let graveyard = document.getElementsByClassName("target")[0];

graveyard.appendChild(tView.element);