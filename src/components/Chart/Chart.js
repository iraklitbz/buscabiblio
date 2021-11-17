import DonutChart from "react-donut-chart";

const Chart = () => {
  const percentOcupado = 10; 
  const percentCSS = { "--percent": percentOcupado };
  return ( 
   <div className="container max-width-lg mt-0 mb-0">
      <div className="text-center chart">
          <div className="ratio-chart" >
      
              <svg class="ring" style={percentCSS}>
                <circle></circle>
                <circle class="progress"></circle>
              </svg>

              <h2 className="ratio-chart-headline">Esta ocupado un <span className="perccent">{`${percentOcupado} %`}</span></h2>
       
          </div>
      </div>
   </div>
   );
}
 
export default Chart;