const MesaVertical = ({posicion, place, side, mesa}) => {
console.log(mesa)
  return ( 
    <div className={"scriptorium scriptorium__3__silla" + ` scriptorium__${posicion}`}>
     
      { posicion === "circle" 
      ?
      <div id="18" className="mesa">
          <div className="circle-table">
            <div id="91" className="silla"><span></span></div>
            <div id="92" className="silla"><span></span></div>
            <div id="93" className="silla"><span></span></div>
            <div id="94" className="silla"><span></span></div>
            <div id="95" className="silla"><span></span></div>
          </div>
      </div> 
      :
      <div id={mesa} className="mesa">
          {side === 'both' 
          ? 
          <div className="left-side">
              <div className="silla"><span className="occuped"></span></div>
              <div className="silla"><span></span></div>
              {place === 3 ? <div className="silla"><span></span></div> : null}
            </div>
          : null 
          
          } 
            
            <div className="right-side">
              <div className="silla"><span className="ambar"></span></div>
              <div className="silla"><span></span></div>
              {place === 3 ? <div className="silla"><span></span></div> : null}
            </div>
      </div>  
      }
     
    </div>
   );
}
 
export default MesaVertical;