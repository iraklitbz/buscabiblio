const MesaVertical = ({posicion, sillas, mesa}) => {

  return ( 
    <div className={"scriptorium scriptorium__3__silla" + ` scriptorium__${posicion}`}>
     
      
      <div id={mesa} className="mesa">
        {
          
          sillas.map(element => {
            /*Obtenemos el tiempo de ahora*/ 
           
    
            const timeNow = new Date(element.ahora).getTime()/1000
            const timeEmision = new Date(element.desde).getTime()/1000
            const timeResult = timeNow - timeEmision;
            var isInAmbar = false;
            var isInOcupate = false;
            if(timeResult <= 1200 && timeResult >= 601 ) {
              isInAmbar = true;
              isInOcupate = false;
              
            } else if(timeResult <= 600 && timeResult >= 0) {
              isInAmbar = false;
              isInOcupate = true;
            } else {
              isInAmbar = false;
              isInOcupate = false;
            }
           
        

            
     
            return (
              <div id={element.id} key={element.id} className="silla">
                <span className={
                  element.libre === false ? 'occuped': 
                  element.libre === null ? 'sin-datos' : 
                  isInOcupate === true ? 'occuped' :
                  isInAmbar === true ? 'ambar' : null
                  }>

                  </span>
              </div>
            )
          })}
           
      </div>  
     
    </div>
   );
}
 
export default MesaVertical;