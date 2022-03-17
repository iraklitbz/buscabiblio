import { useEffect, useState } from "react";
import axios from "axios";
import Sensor from "../../components/Sensor/Sensor";
const Table = () => {
  useEffect(() => {
    const consultarAPI = async () => {
      const url = 'https://www.emeluz.com/bibliotecas/public/api/sensors/1';
      const resultado = await axios.get(url);
      guardarDatos(resultado.data);
 
     
    }
    consultarAPI();

    const interval = setInterval(() => {
      consultarAPI();
    }, 300000);
    return () => clearInterval(interval);
   
  },[]);
 
  const [datos, guardarDatos] = useState([]);
  const [noChart, guardarNoChart] = useState(true);
  return (
      <div className="general">
        <div className="headerSensor">
          <div className="max-width-sm">
            <h3>Piloto para visualización de datos del sensor de la UCM</h3>
          </div>

        </div>
        <Sensor datos={datos} />
      </div>
   );
}
 
export default Table;