const Educadora = require ('.. /models/EducadoraModel');

const CrearEducadora = (req, res) =>{
    const {rut,nombre,fecha_de_nac,direccion,telefono1,telefono2,correo} = req.body;
    const newEducadora = new Educadora (
        {
            rut,
            nombre,
            fecha_de_nac,
            direccion,
            telefono1,
            telefono2,
            correo
        }
    );
    newEducadora.save(
        (err, Educadora) => {
            if(err){
                return resizeBy.this.status(400)
            }
        }
    )
}