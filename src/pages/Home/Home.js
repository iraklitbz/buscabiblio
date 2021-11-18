import { useEffect, useState } from "react";
import axios from "axios";
import Biblio from "../../components/Biblio/Biblio";
import Chart from "../../components/Chart/Chart";


const Home = () => {
  useEffect(() => {
    const consultarAPI = async () => {
      const url = 'http://localhost:4000/sillas';
      const resultado = await axios.get(url);
     
      guardarSillas(resultado.data);
    }
    consultarAPI();

    const interval = setInterval(() => {
      console.log('check every x time')
      consultarAPI();
    }, 300000);
    return () => clearInterval(interval);
   
  },[]);
  const [sillas, guardarSillas] = useState([]); 
  return (
      <div className="general">
        <Biblio sillas={sillas} />
        <Chart sillas={sillas} />
      </div>
   );
}
 
export default Home;