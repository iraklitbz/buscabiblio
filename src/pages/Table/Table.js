import { useEffect, useState } from "react";
import axios from "axios";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
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
        <Header noChart={noChart}  />
        <Sensor datos={datos} />
        <Footer />
      </div>
   );
}
 
export default Table;