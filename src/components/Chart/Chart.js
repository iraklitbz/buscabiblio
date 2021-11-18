
const Chart = ({sillas}) => {
 
  const filtroSillasOcupadas = sillas.filter(element => element.libre === false);
  const calculoPorcentaje = (100 * filtroSillasOcupadas.length) / sillas.length;
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

              <h2 className="ratio-chart-headline">Esta ocupado un <span className="perccent">{`${percentOcupado} %`}</span></h2>
       
          </div>
      </div>
   </div>
   );
}
 
export default Chart;