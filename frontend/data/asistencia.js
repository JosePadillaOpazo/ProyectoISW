import axios from "axios";

const getAsistencias = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/asistencias`);
    return response
}

module.exports = {
    getAsistencias
}