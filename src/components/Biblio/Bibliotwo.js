
import { useState } from "react";
import Mesa from "./Mesas/Mesa";

const Bibliotwo = ({sillas}) => {
  const [estadoSilla, guardarEstadoSilla] = useState({
    modalHide: true,
    estado: '',
    texto: ''
  });
  const [SinDato, guardarSinDato] = useState(
        [
          {
            "id": 1000,
            "mesa": "/public/api/mesas/1",
            "libre": true,
            "desde": "2021-01-08 19:00:00",
            "ahora": "2021-11-10 19:21:00",
            "ultimo": false
          },
          {
            "id": 1001,
            "mesa": "/public/api/mesas/1",
            "libre": true,
            "desde": "2021-01-08 19:00:00",
            "ahora": "2021-11-10 19:21:00",
            "ultimo": false
          },
          {
            "id": 1002,
            "mesa": "/public/api/mesas/1",
            "libre": true,
            "desde": "2021-01-08 19:00:00",
            "ahora": "2021-11-10 19:21:00",
            "ultimo": false
          },
          {
            "id": 1003,
            "mesa": "/public/api/mesas/1",
            "libre": true,
            "desde": "2021-01-08 19:00:00",
            "ahora": "2021-11-10 19:21:00",
            "ultimo": false
          },
          {
            "id": 1004,
            "mesa": "/public/api/mesas/1",
            "libre": true,
            "desde": "2021-01-08 19:00:00",
            "ahora": "2021-11-10 19:21:00",
            "ultimo": false
          }
        ]
      );
  return (
    <div className="container max-width-sm padding-bottom-xl">
       
        <div id="biblio" className="biblioteca-map">
        
          <div className="horizontal-align">
            <div className="horizontal-align">
              <Mesa 
                posicion={'horizontal small'}
                guardarEstadoSilla={guardarEstadoSilla}
                mesa={11}
                sillas={sillas.slice(54, 58)}
                
              />
              <Mesa 
                posicion={'horizontal small'}
                guardarEstadoSilla={guardarEstadoSilla}
                mesa={12}
                sillas={sillas.slice(58,62)}
                
              />
              <Mesa 
              posicion={'horizontal small'}
              guardarEstadoSilla={guardarEstadoSilla}
              mesa={13}
              sillas={sillas.slice(62, 66)}
              
              />
            </div>
             <Mesa 
            posicion={'circle'}
            mesa={18}
            sillas={SinDato}
            />
          </div>
          <div className="center center-distribution">
            <div className="vertical-align ">
                <Mesa 
                posicion={'vertical one-side'}
                guardarEstadoSilla={guardarEstadoSilla}
                side={'single'}
                mesa={5}
                sillas={sillas.slice(21, 24)}
                
                />
                <Mesa 
                posicion={'vertical one-side'}
                guardarEstadoSilla={guardarEstadoSilla}
                mesa={4}
                side={'single'}
                sillas={sillas.slice(18, 21)}
                
                />
              </div>
              <div className="vertical-align">
                <Mesa 
                posicion={'vertical'}
                guardarEstadoSilla={guardarEstadoSilla}
                mesa={7}
                side={'both'}
                sillas={sillas.slice(30, 36)}
                
                />
                <Mesa 
                posicion={'vertical'}
                guardarEstadoSilla={guardarEstadoSilla}
                mesa={6}
                side={'both'}
                sillas={sillas.slice(24, 30)}
                
                />
            </div>
            <div className="vertical-align united">
              <Mesa 
              posicion={'vertical'}
              guardarEstadoSilla={guardarEstadoSilla}
              mesa={10}
              side={'both'}
              sillas={sillas.slice(48, 54)}
              
              />
              <Mesa 
              posicion={'vertical'}
              guardarEstadoSilla={guardarEstadoSilla}
              mesa={9}
              side={'both'}
              sillas={sillas.slice(42, 48)}
              
              />
              <Mesa 
              posicion={'vertical'}
              guardarEstadoSilla={guardarEstadoSilla}
              mesa={8}
              side={'both'}
              sillas={sillas.slice(36, 42)}
              
              />
            </div>
            <div className="vertical-align united column">
              <Mesa 
                posicion={'horizontal'}
                guardarEstadoSilla={guardarEstadoSilla}
                mesa={17}
                sillas={sillas.slice(84, 90)}
                
              />
              <Mesa 
                posicion={'horizontal'}
                mesa={16}
                guardarEstadoSilla={guardarEstadoSilla}
                sillas={sillas.slice(78, 84)}
                
              />
              <Mesa 
              posicion={'horizontal'}
              mesa={15}
              guardarEstadoSilla={guardarEstadoSilla}
              sillas={sillas.slice(72, 78)} />

            </div>
          </div>
         
          <footer className="horizontal-align">
              <Mesa 
                  posicion={'horizontal'}
                  guardarEstadoSilla={guardarEstadoSilla}
                  side={'both'}
                  mesa={1}
                  sillas={sillas.slice(0, 6)}
                  
                />
                <Mesa 
                  posicion={'horizontal'}
                  guardarEstadoSilla={guardarEstadoSilla}
                  side={'both'}
                  mesa={2}
                  sillas={sillas.slice(6, 12)}
                  
                />
                <Mesa 
                posicion={'horizontal'}
                guardarEstadoSilla={guardarEstadoSilla}
                side={'both'}
                mesa={3}
                sillas={sillas.slice(12, 18)}
                
                />
                <div className="aside-footer">
                  <Mesa 
                  posicion={'horizontal'}
                  mesa={14}
                  guardarEstadoSilla={guardarEstadoSilla}
                  sillas={sillas.slice(66, 72)}
                
                  />
                </div>
           

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
 
export default Bibliotwo;