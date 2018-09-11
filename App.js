"use strict";

import {TargetView} from "./view/TargetView.js";
import {TargetController} from "./controller/TargetController.js";
import {Grave} from "./model/Grave.js";
import {Target} from "./model/Target.js";

let target = new Target();
target.fullHp = 0;
target.grave = Grave.createGrave("click grave to start", []);

let tController = new TargetController(target);
let tView = new TargetView(tController);

let graveyard = document.getElementsByClassName("target")[0];

graveyard.appendChild(tView.element);