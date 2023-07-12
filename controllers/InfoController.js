import axios from 'axios'
import xml2js from 'xml2js'

const getInfo = async (req, res) => {
    const { tipoDocumento, numeroDocumento } = req.body;
    console.log(numeroDocumento)
    const xmlBodyStr = `<?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
<soap12:Header>
<CabeceraCR xmlns="http://tempuri.org/">
<Usuario>wsDataClick</Usuario>
<Clave>POonu%7P</Clave>
</CabeceraCR>
</soap12:Header>
<soap12:Body>
<ObtenerDataClickFull xmlns="http://tempuri.org/">
<tipoDocumento>${tipoDocumento}</tipoDocumento>
<numeroDocumento>${numeroDocumento}</numeroDocumento>
</ObtenerDataClickFull>
</soap12:Body>
</soap12:Envelope>`;
    const config = {
        headers: { 'Content-Type': 'text/xml' }
    };
    axios.post('https://test.equifax.com.ec/wsDataClickFull/wsDataClickFull.asmx?op=ObtenerDataClickFull', xmlBodyStr, config).then((response) => {
        console.log(response.data)
        const parser = new xml2js.Parser();

        // Parsear el XML y convertirlo a JSON
        parser.parseString(response.data, (err, result) => {
            if (err) {
                console.error('Error al parsear el XML:', err);
                return;
            }

            // Convertir el resultado a JSON
            const jsonData = JSON.stringify(result, null, 2);

            // Imprimir el JSON resultante
            //console.log(jsonData);
            res.send(jsonData)
        });


    }, (error) => {
        console.log(error);
    });;

}


export {
    getInfo
};