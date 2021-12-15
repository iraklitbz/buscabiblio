import moment from 'moment';
const MesaVertical = ({posicion, sillas, guardarEstadoSilla, mesa}) => {
  
  return ( 
    <div className={"scriptorium scriptorium__3__silla" + ` scriptorium__${posicion}`}>
     
      
      <div id={mesa} className="mesa">
        {
          
          sillas.map(element => {
            /*Obtenemos el tiempo de ahora*/ 
           
            var timeOnly = element.desde;
            timeOnly = timeOnly.split(' ')[1];

            const timeNow = moment(element.ahora).toDate()/1000
            const timeEmision = moment(element.desde).toDate()/1000
           
            const timeResult = timeNow - timeEmision;
            var isInAmbar = false;
            var isInOcupate = false;
            var isSinData = false;
           
            if(timeResult <= 1200 && timeResult >= 601 ) {
              isInAmbar = true;
              isInOcupate = false;
              isSinData = false;
              
            } else if(timeResult <= 600 && timeResult >= 0) {
              isInAmbar = false;
              isInOcupate = true;
              isSinData = false;
            }

            else if(timeResult > 93600) {
              isSinData = true;
              isInOcupate = false;
              isInAmbar = false;
            } 
            
            else {
              isInAmbar = false;
              isInOcupate = false;
              isSinData = false;
            }
         
        

            
     
            return (
              <div id={element.id} key={element.id} className="silla" onClick={(e) => guardarEstadoSilla({modalHide: false, estado: e.target.className ,texto: timeOnly})}>
                <span  className={
                  element.libre === false && !isSinData ? 'occuped': 
                  isSinData === true ? 'sin-datos' : 
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