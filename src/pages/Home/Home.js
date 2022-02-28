import { useEffect, useState } from "react";
import axios from "axios";
import Bibliotwo from "../../components/Biblio/Bibliotwo";
import Chart from "../../components/Chart/Chart";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
const Home = () => {
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
        <Header sillas={sillas} />
        <Bibliotwo sillas={sillas} />
        <Footer />
      </div>
   );
}
 
export default Home;