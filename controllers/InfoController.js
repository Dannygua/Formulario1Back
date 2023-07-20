import axios from "axios";
import xml2js from "xml2js";

const getInfo = async (req, res) => {
  try {
    const { tipoDocumento, numeroDocumento } = req.body;
    console.log(numeroDocumento);

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
      headers: { "Content-Type": "text/xml" },
    };

    const response = await axios.post(
      "https://test.equifax.com.ec/wsDataClickFull/wsDataClickFull.asmx?op=ObtenerDataClickFull",
      xmlBodyStr,
      config
    );

    const parser = new xml2js.Parser();

    // Parsear el XML y convertirlo a JSON
    const result = await new Promise((resolve, reject) => {
      parser.parseString(response.data, (err, result) => {
        if (err) {
          console.error("Error al parsear el XML:", err);
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    // Convertir el resultado a JSON
    const jsonData = JSON.stringify(result, null, 2);

    // Imprimir el JSON resultante
    console.log(jsonData);
    res.send(jsonData);
  } catch (error) {
    console.log(error);
  }
};

const getInfo2 = async (req, res) => {
  try {
    const { tipoDocumento, numeroDocumento } = req.body;
    console.log(numeroDocumento);

    const xmlBodyStr = `<?xml version="1.0" encoding="utf-8"?>
      <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Header>
          <CabeceraCR xmlns="http://www.creditreport.ec/">
            <Usuario>wsmicro2</Usuario>
            <Clave>burocr</Clave>
          </CabeceraCR>
        </soap:Header>
        <soap:Body>
          <ObtenerNivelDireccionesyTelefonos xmlns="http://www.creditreport.ec/">
            <idReportePadre>0</idReportePadre>
            <tipoDocumento>${tipoDocumento}</tipoDocumento>
            <numeroDocumento>${numeroDocumento}</numeroDocumento>
          </ObtenerNivelDireccionesyTelefonos>
        </soap:Body>
      </soap:Envelope>`;

    const config = {
      headers: { "Content-Type": "text/xml" },
    };

    const response = await axios.post(
      "https://test.equifax.com.ec/wsExpertoMicrofinanzas/wsExpertoMicrofinanzas.asmx",
      xmlBodyStr,
      config
    );

    const parser = new xml2js.Parser();

    // Parsear el XML y convertirlo a JSON
    const result = await new Promise((resolve, reject) => {
      parser.parseString(response.data, (err, result) => {
        if (err) {
          console.error("Error al parsear el XML:", err);
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    // Convertir el resultado a JSON
    const jsonData = JSON.stringify(result, null, 2);

    // Imprimir el JSON resultante
    //console.log(jsonData);
    console.log(jsonData);
    res.send(jsonData);
  } catch (error) {
    console.log(error);
  }
};

const getInfo3 = async (req, res) => {
  const { PagoInteres, Monto, Plazo, Periodicidad } = req.body;
  try {
    const response = await axios.post(
      "https://apitest.denariusonline.com/api/SimularInversion",
      {
        meSimulacion: {
          Cabecera: {
            Canal: "IN",
            Oficina: 11,
            Organizacion: "KuryWayta",
            Usuario: "Kurywaytatest",
          },
          PagoInteres,
          Monto,
          Plazo,
          Periodicidad,
        },
      },
      {
        headers: {
          "Ocp-Apim-Subscription-Key": "b5bfa45dc0a342939f940e18adeb75b7",
        },
      }
    );

    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.error(error.message);
  }
};

const getInfo4 = async (req, res) => {
  const {
    TipoCredito,
    Monto,
    Plazo,
    TipoPlazo,
    IdMoneda,
    TipoTabla,
    VentasAnuales,
    DiaPago,
  } = req.body;

  try {
    const response = await axios.post(
      "https://apitest.denariusonline.com/api/SimularCredito",
      {
        meSimulacion: {
          Cabecera: {
            Canal: "IN",
            Oficina: 11,
            Organizacion: "KuryWayta",
            Usuario: "Kurywaytatest",
          },
          TipoCredito,
          Monto,
          Plazo,
          TipoPlazo,
          //IdMoneda: parseInt(formulario.IdMoneda),
          IdMoneda, //Valor por defecto para dólares americanos
          TipoTabla,
          VentasAnuales,
          DiaPago,
        },
      },
      {
        headers: {
          "Ocp-Apim-Subscription-Key": "b5bfa45dc0a342939f940e18adeb75b7",
        },
      }
    );

    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.error(error.message);
  }
};

const getInfo5 = async (req, res) => {
  const { FechaInicio, MontoMensual, Plazo } = req.body;

  try {
    const response = await axios.post(
      "https://apitest.denariusonline.com/api/SimularAhorroProgramado",

      {
        meSimular: {
          Cabecera: {
            Canal: "IN",
            Oficina: 11,
            Organizacion: "KuryWayta",
            Usuario: "Kurywaytatest",
          },
          FechaInicio,
          MontoMensual,
          Plazo,
        },
      },
      {
        headers: {
          "Ocp-Apim-Subscription-Key": "b5bfa45dc0a342939f940e18adeb75b7",
        },
      }
    );

    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.error(error.message);
  }
};

export { getInfo, getInfo2, getInfo3, getInfo4, getInfo5 };
