"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pacienteController_1 = require("../controller/pacienteController");
const router = express_1.Router();
router.route("/mail")
    .post(pacienteController_1.sendFormByEmail);
exports.default = router;
