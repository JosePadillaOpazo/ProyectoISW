import axios from "axios";

const getAsistentes = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/asistentes`);
    return response
}

const addAsistente = async (asistente) => {
    //console.log("Datos guardados: " + asistente)
    const response = await axios.post(`${process.env.SERVIDOR}/asistente`, asistente);
    return response
}

module.exports = {
    getAsistentes,
    addAsistente
}