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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendFormByEmail = void 0;
const nodemailer_1 = require("../config/nodemailer");
const sendFormByEmail = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, apellido, sexo, edad, email, codigoCelular, telefonoCelular, codigoFijo, telefonoFijo, pais, ciudad, formaContacto, motivoConsulta, descripcionEmocional, habitosPersonales, comentarioAdicional, } = request.body;
        const contentHTML = `
    <div style="font-family: 'Lato', sans-serif;">
    <h1>Solicitud de atención desde ${pais}</h1>
    <h2>Datos personales</h2>
    <table border="1">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Sexo</th>
                <th>Edad</th>
                <th>Email</th>
                <th>Teléfono Celular</th>
                <th>Teléfono Fijo</th>
                <th>País</th>
                <th>Ciudad</th>
                <th>Forma de contacto</th>
                <th>¿Cual es el motivo de la consulta?</th>
                <th>¿Describe cómo te siente emocionalmente en este momento?</th>
                <th>Mencione los campos importantes en los hábitos personales que has notado recientemente</th>
                <th>¿Quiere agregar algún comentario adicional?</th>
            </tr>
        </thead>
        <tr>
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${sexo}</td>
            <td>${edad}</td>
            <td>${email}</td>
            <td>${codigoCelular}-${telefonoCelular}</td>
            <td>${codigoFijo}-${telefonoFijo}</td>
            <td>${pais}</td>
            <td>${ciudad}</td>
            <td>${formaContacto}</td>
            <td>${motivoConsulta}</td>
            <td>${descripcionEmocional}</td>
            <td>${habitosPersonales}</td>
            <td>${comentarioAdicional}</td>
        </tr>
    </table>
    </div>
    `;
        yield nodemailer_1.sendEmail(contentHTML);
        return response.json({
            "status": 200,
            "message": "the email was sended"
        });
    }
    catch (error) {
        console.log(error);
        return response.json({
            "status": 500,
            "message": "error to send email"
        });
    }
});
exports.sendFormByEmail = sendFormByEmail;
