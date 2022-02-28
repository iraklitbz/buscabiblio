
import { useState } from "react";
import Mesa from "./Mesas/Mesa";

const Biblio = ({sillas}) => {
  const [estadoSilla, guardarEstadoSilla] = useState({
    modalHide: true,
    estado: '',
    texto: ''
  });
  return (
    <div className="container max-width-sm">
      <div className="guide">
          <h6>Libre: <span className="silla disponible"></span></h6>
          <h6>Descanso: <span className="silla ambar"></span></h6>
          <h6>Ocupado: <span className="silla ocupado"></span></h6>
          <h6>Sin datos: <span className="silla sin-datos"></span></h6>
      </div> 
        <div id="biblio" className="biblioteca-map">
        
          <div className="left">
            <Mesa 
              posicion={'vertical'}
              guardarEstadoSilla={guardarEstadoSilla}
              side={'both'}
              mesa={1}
              sillas={sillas.slice(0, 6)}
              
            />
            <Mesa 
              posicion={'vertical'}
              guardarEstadoSilla={guardarEstadoSilla}
              side={'both'}
              mesa={2}
              sillas={sillas.slice(6, 12)}
              
            />
            <Mesa 
            posicion={'vertical'}
            guardarEstadoSilla={guardarEstadoSilla}
            side={'both'}
            mesa={3}
            sillas={sillas.slice(12, 18)}
            
            />
          </div>
          <div className="center">
            <div className="horizontal-align">
              <Mesa 
              posicion={'horizontal one-side'}
              guardarEstadoSilla={guardarEstadoSilla}
              side={'single'}
              mesa={4}
              sillas={sillas.slice(18, 21)}
              
              />
              <Mesa 
              posicion={'horizontal one-side'}
              guardarEstadoSilla={guardarEstadoSilla}
              mesa={5}
              side={'single'}
              sillas={sillas.slice(21, 24)}
              
              />
            </div>
            <div className="horizontal-align mt-1">
              <Mesa 
              posicion={'horizontal'}
              guardarEstadoSilla={guardarEstadoSilla}
              mesa={6}
              side={'both'}
              sillas={sillas.slice(24, 30)}
              
              />
              <Mesa 
              posicion={'horizontal'}
              guardarEstadoSilla={guardarEstadoSilla}
              mesa={7}
              side={'both'}
              sillas={sillas.slice(30, 36)}
              
              />
            </div>
            <div className="horizontal-align united mt-1">
              <Mesa 
              posicion={'horizontal'}
              guardarEstadoSilla={guardarEstadoSilla}
              mesa={8}
              side={'both'}
              sillas={sillas.slice(36, 42)}
              
              />
              <Mesa 
              posicion={'horizontal'}
              guardarEstadoSilla={guardarEstadoSilla}
              mesa={9}
              side={'both'}
              sillas={sillas.slice(42, 48)}
              
              />
              <Mesa 
              posicion={'horizontal'}
              guardarEstadoSilla={guardarEstadoSilla}
              mesa={10}
              side={'both'}
              sillas={sillas.slice(48, 54)}
              
              />
            </div>
          </div>
          <div className="right">
            <Mesa 
              posicion={'vertical small'}
              guardarEstadoSilla={guardarEstadoSilla}
              mesa={11}
              sillas={sillas.slice(54, 58)}
              
            />
            <Mesa 
              posicion={'vertical small'}
              guardarEstadoSilla={guardarEstadoSilla}
              mesa={12}
              sillas={sillas.slice(58, 62)}
              
            />
            <Mesa 
            posicion={'vertical small'}
            guardarEstadoSilla={guardarEstadoSilla}
            mesa={13}
            sillas={sillas.slice(62, 66)}
            
            />
          </div>
          <footer className="bottom">
            <Mesa 
              posicion={'vertical'}
              guardarEstadoSilla={guardarEstadoSilla}
              mesa={14}
              sillas={sillas.slice(66, 72)}
              
            />
            <Mesa 
              posicion={'vertical'}
              mesa={15}
              guardarEstadoSilla={guardarEstadoSilla}
              sillas={sillas.slice(72, 78)}
              
            />
            <Mesa 
            posicion={'vertical'}
            mesa={16}
            guardarEstadoSilla={guardarEstadoSilla}
            sillas={sillas.slice(78, 84)}
            
            />
            <Mesa 
              posicion={'vertical'}
              mesa={17}
              guardarEstadoSilla={guardarEstadoSilla}
              sillas={sillas.slice(84, 90)}
              
            />
           

          </footer>
        </div>
        {!estadoSilla.modalHide === true ?
          <div className="modal">
          
          { estadoSilla.estado === 'libre' ? `Está silla esta libre desde las ${estadoSilla.texto}` : 
            estadoSilla.estado === 'occuped' ? `Está silla esta ocupada desde las ${estadoSilla.texto}`:
            estadoSilla.estado === 'sin-datos' ? `Está silla esta sin datos` : 
            estadoSilla.estado === 'ambar' ? 'Está silla lleva libre menos de 20min' : null
          }
        </div>
        
        : null}
       
    </div>
   );
}
 
export default Biblio;