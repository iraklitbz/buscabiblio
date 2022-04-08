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

  return ( 
    <div className="graph">
        <div className="graph-chart" style={{width: `${percentOcupado}%`}}></div>
        <span>{`Ocupado: ${percentOcupado} %`}</span>
    </div>
   );
}
 
export default Chart;