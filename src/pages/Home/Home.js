import { useEffect, useState } from "react";
import axios from "axios";
import Biblio from "../../components/Biblio/Biblio";
import Chart from "../../components/Chart/Chart";


const Home = () => {
  const [sillasSinData, guardarSillasSinData] = useState();
  useEffect(() => {
    const consultarAPI = async () => {
      const url = 'https://www.emeluz.com/bibliotecas/public/api/sillas';
      const resultado = await axios.get(url);
      guardarSillas(resultado.data);
     
    }
    consultarAPI();

    const interval = setInterval(() => {
      consultarAPI();
    }, 300000);
    return () => clearInterval(interval);
   
  },[]);
 
  const [sillas, guardarSillas] = useState([]); 
  return (
      <div className="general">
        <Biblio guardarSillasSinData={guardarSillasSinData} sillas={sillas} />
        <Chart sillasSinData={sillasSinData} sillas={sillas} />
      </div>
   );
}
 
export default Home;