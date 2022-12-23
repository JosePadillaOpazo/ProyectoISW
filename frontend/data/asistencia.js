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

const delAsistencia = async (asistencia) => {
    //console.log(`${process.env.SERVIDOR}/asistencia/delete/${asistencia}`)
    const response = await axios.delete(`${process.env.SERVIDOR}/asistencia/delete/${asistencia}`);
    return response
}

module.exports = {
    getAsistencias,
    addAsistencia,
    delAsistencia
}