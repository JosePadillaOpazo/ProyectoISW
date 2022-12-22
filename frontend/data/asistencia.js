import axios from "axios";


const getAsistencias = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/asistencias`);
    return response
}

const addAsistencia = (asistencia) => {
    console.log(asistencia)
    const response = axios.post(`${process.env.SERVIDOR}/asistencia`, asistencia);
    return response
}


module.exports = {
    getAsistencias,
    addAsistencia
}