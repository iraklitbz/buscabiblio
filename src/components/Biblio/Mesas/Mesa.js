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
            var isLibre = false;

            /* 
            600 is 10min
            1200 is 20min
            93600 is 26h
            288000 is 80h
            */ 



           
            if(timeResult <= 1200 && element.libre === true && element.libreAntes === false ) {
              isLibre = false;
              isSinData = false;
              isInOcupate = false;
              isInAmbar = true;
            } 

            else if(timeResult <= 1200 && element.libre === true && element.libreAntes === true ) {
              isLibre = true;
              isSinData = false;
              isInOcupate = false;
              isInAmbar = false;
            } 

            else if( timeResult >= 1200 && timeResult <= 288000 && element.libre === true) {
              isLibre = true;
              isSinData = false;
              isInOcupate = false;
              isInAmbar = false;
            }
            
            else if( element.libre === false && timeResult <= 288000 ) {
              isLibre = false;
              isSinData = false;
              isInOcupate = true;
              isInAmbar = false;
            } 

            else if(timeResult >= 288000 && element.libre === true || timeResult >= 288000 && element.libre === false ) {
              isLibre = false;
              isSinData = true;
              isInOcupate = false;
              isInAmbar = false;
            } 
            
            else {
              isLibre = false;
              isSinData = false;
              isInOcupate = false;
              isInAmbar = false;
              
            }
         

     
            return (
              <div id={element.id} key={element.id} className="silla" onClick={(e) => guardarEstadoSilla({modalHide: false, estado: e.target.className ,texto: timeOnly})}>
                <span  className={
                  isLibre === true ? 'libre' :
                  isInOcupate === true ? 'occuped': 
                  isSinData === true ? 'sin-datos' : 
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