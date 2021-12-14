import { useEffect, useState } from "react";


const Chart = ({sillas}) => {
  const [ArraySillasOcupadas, guardarArraySillasOcupadas] = useState([]);
  useEffect(() => {
    let htmlCollection = document.getElementById('biblio').getElementsByClassName('silla');
    htmlCollection = [...htmlCollection];
    guardarArraySillasOcupadas(htmlCollection.filter(element => element.firstChild.className === 'occuped'));

  }, [sillas])

  const calculoPorcentaje = (100 * ArraySillasOcupadas.length) / sillas.length;
  const percentOcupado = calculoPorcentaje.toFixed();
  const percentCSS = { "--percent": percentOcupado };
  return ( 
   <div className="container max-width-lg mt-0 mb-0">
      <div className="text-center chart">
          <div className="ratio-chart" >
      
              <svg className="ring" style={percentCSS}>
                <circle></circle>
                <circle className="progress"></circle>
              </svg>

              <h2 className="ratio-chart-headline">Está ocupado un <span className="perccent">{`${percentOcupado} %`}</span></h2>
       
          </div>
      </div>
   </div>
   );
}
 
export default Chart;