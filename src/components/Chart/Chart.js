import { useEffect, useState } from "react";


const Chart = ({sillas}) => {
  const [ArraySillasOcupadas, guardarArraySillasOcupadas] = useState([]);
  const [ArraySillasAmbar, guardarArraySillasAmbar] = useState([]);
  useEffect(() => {
    let htmlCollection = document.getElementById('biblio').getElementsByClassName('silla');
    htmlCollection = [...htmlCollection];
    guardarArraySillasOcupadas(htmlCollection.filter(element => element.firstChild.className === 'occuped' ));
    guardarArraySillasAmbar(htmlCollection.filter(element => element.firstChild.className === 'ambar' ));

  }, [sillas])
  const TotalArrayOcupado = ArraySillasOcupadas.length + ArraySillasAmbar.length 
  const calculoPorcentaje = (100 * TotalArrayOcupado) / sillas.length;
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