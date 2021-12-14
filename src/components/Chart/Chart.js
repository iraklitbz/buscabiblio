

const Chart = ({sillasSinData, sillas}) => {
  console.log(sillasSinData)
  const guardarArraySillasOcupadas = [];
  const filtroSillasOcupadas = sillas.filter(element => element.libre === false );
  const removeSinDatos = filtroSillasOcupadas.filter(element => {
    const timeNow = new Date(element.ahora).getTime()/1000
    const timeEmision = new Date(element.desde).getTime()/1000
    const timeResult = timeNow - timeEmision;
    return timeResult > 93600
  } );

  const totalArrayOcupado = filtroSillasOcupadas.length - guardarArraySillasOcupadas.length;
  const calculoPorcentaje = (100 * totalArrayOcupado) / sillas.length;
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