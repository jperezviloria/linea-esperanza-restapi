import {Router} from "express"
import {sendFormByEmail} from "../controller/pacienteController"
const router = Router();

router.route("/mail")
.post(sendFormByEmail);

export default router;
