"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const sendEmail = (contentHTML) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transporter = nodemailer_1.default.createTransport({
            host: process.env.SERVER_SMTP,
            port: 465,
            auth: {
                user: process.env.USER_EMAIL,
                pass: process.env.PASSWORD_EMAIL, // generated ethereal password
            }
        });
        let mailOptions = {
            from: process.env.FROM_EMAIL,
            to: process.env.TO_EMAIL,
            subject: "Formulario de paciente - Linea de la Esperanza",
            html: contentHTML,
        };
        yield transporter.sendMail(mailOptions);
    }
    catch (error) {
        console.log(error);
    }
});
exports.sendEmail = sendEmail;
