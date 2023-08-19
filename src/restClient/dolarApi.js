const axios = require('axios')

const getCotizacionDolar = async () => {
    const response = await axios.get('https://dolar-api-argentina.vercel.app/v1/dolares');
    return response 
} 

module.exports = getCotizacionDolar

