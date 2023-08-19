const axios = require('axios');
const CotizacionModel = require('../../models/cotizacion.models');

const addCotizacionController = async (req, res) => {
    const { valorPesos, tipoDolar } = req.body;
    if(req.user.rol == 'USER_ROLE' && (tipoDolar == 'contadoconliqui' || tipoDolar == 'bolsa')){
        return res.status(403).json({ message: "Usted no esta autorizado a realizar esta cotizacion" });
    }

    const response = await axios.get('https://dolar-api-argentina.vercel.app/v1/dolares');
    const cotizacion = response.data.filter(item => item.casa == tipoDolar)[0]
    if (cotizacion == undefined) {
        return res.status(404).json({ message: "Cotizacion no encontrada, ingrese un tipo de Dolar valido para realizar su cotizacion: 'oficial' - 'blue' - 'bolsa' - 'contadoconliqui' - 'mayorista' - 'solidario'" });
    }
    const newCotizacionModel = new CotizacionModel(
        {
            cotizacion: valorPesos / cotizacion.venta,
            valorPesos: valorPesos,
            tipoDolar: cotizacion.nombre,
            cotizacionDolar: cotizacion.venta,
            fechaCotizacion: cotizacion.fechaActualizacion,
        })
    await newCotizacionModel.save();
    return res.json({
        valorPesos: valorPesos,
        cotizacion: valorPesos / cotizacion.venta,
        tipoDolar: cotizacion.nombre,
        fechaCotizacion: cotizacion.fechaActualizacion
    })
};

const getCotizacionController = async (req, res) => {
    try {
        const cotizaciones = await CotizacionModel.find();
        res.json(cotizaciones)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message + 'No se ha podido acceder a los usuarios' })
    }

}

module.exports = { addCotizacionController, getCotizacionController }