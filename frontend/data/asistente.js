import axios from "axios";

const getAsistentes = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/asistentes`);
    return response
}

const addAsistente = (asistente) => {
    const response = axios.post(`${process.env.SERVIDOR}/asistente`, asistente);
    return response
}

const editAsistente = async (id) => {
    console.log(id.asistente)
    const response = axios.get(`${process.env.SERVIDOR}/asistente/find/${id.asistente}`);
    return response
}

const delAsistente = async (asistente) => {
    console.log(`${process.env.SERVIDOR}/asistente/delete/${asistente._id}`)
    //const response = axios.delete(`${process.env.SERVIDOR}/asistente/delete/${asistente._id}`);
    //return response
}


module.exports = {
    getAsistentes,
    addAsistente,
    editAsistente,
    delAsistente
}