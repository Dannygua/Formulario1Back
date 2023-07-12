const axios = require('axios');
const parseString = require('xml2js').parseString;
var xmlBodyStr = `<?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
<soap12:Header>
<CabeceraCR xmlns="http://tempuri.org/">
<Usuario>wsDataClick</Usuario>
<Clave>POonu%7P</Clave>
</CabeceraCR>
</soap12:Header>
<soap12:Body>
<ObtenerDataClickFull xmlns="http://tempuri.org/">
<tipoDocumento>C</tipoDocumento>
<numeroDocumento>1646941532</numeroDocumento>
</ObtenerDataClickFull>
</soap12:Body>
</soap12:Envelope>`;
var config = {
  headers: { 'Content-Type': 'text/xml' }
};
axios.post('https://test.equifax.com.ec/wsDataClickFull/wsDataClickFull.asmx?op=ObtenerDataClickFull', xmlBodyStr, config).then((response) => {
  console.log(response);
}, (error) => {
  console.log(error);
});;


