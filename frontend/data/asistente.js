import axios from "axios";

const getAsistentes = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/asistentes`);
    return response
}

const addAsistente = (asistente) => {
    const response = axios.post(`${process.env.SERVIDOR}/asistente`, asistente);
    return response
}



module.exports = {
    getAsistentes,
    addAsistente
}