import axios from "axios";

const BuscarRutina = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/Rutinas`);
    return response
}

module.exports ={
    BuscarRutina
}