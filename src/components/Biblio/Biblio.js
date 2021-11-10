import Mesa from "./Mesas/Mesa";

const Biblio = () => {
  return (
    <div className="container max-width-lg">
        <div className="guide">
        <h6>Libre: <span className="silla disponible"></span></h6>
        <h6>Descanso: <span className="silla ambar"></span></h6>
        <h6>Ocupado: <span className="silla ocupado"></span></h6>
      </div> 
        <div className="biblioteca-map">
        
          <aside className="left">
            <Mesa 
              posicion={'vertical'}
              place={3}
              side={'both'}
              mesa={1}
              ids={'silla1', 'silla2', 'silla3', 'silla4', 'silla5', 'silla6'}
            />
            <Mesa 
              posicion={'vertical'}
              place={3}
              side={'both'}
              mesa={2}
              ids={'silla7', 'silla8', 'silla9', 'silla10', 'silla11', 'silla12'}
            />
            <Mesa 
            posicion={'vertical'}
            place={3}
            side={'both'}
            mesa={3}
            ids={'silla13', 'silla14', 'silla15', 'silla16', 'silla17', 'silla18'}
            />
          </aside>
          <div className="center">
            <div className="horizontal-align">
              <Mesa 
              posicion={'horizontal one-side'}
              place={3}
              side={'single'}
              mesa={4}
              ids={'silla19', 'silla20', 'silla21'}
              />
              <Mesa 
              posicion={'horizontal one-side'}
              place={3}
              mesa={5}
              side={'single'}
              ids={'silla22', 'silla23', 'silla24'}
              />
            </div>
            <div className="horizontal-align mt-1">
              <Mesa 
              posicion={'horizontal'}
              place={3}
              mesa={6}
              side={'both'}
              ids={'silla25', 'silla26', 'silla27','silla28', 'silla29', 'silla30'}
              />
              <Mesa 
              posicion={'horizontal'}
              place={3}
              mesa={7}
              side={'both'}
              ids={'silla31', 'silla32', 'silla33','silla34', 'silla35', 'silla36'}
              />
            </div>
            <div className="horizontal-align united mt-1">
              <Mesa 
              posicion={'horizontal'}
              place={3}
              mesa={8}
              side={'both'}
              ids={'silla37', 'silla38', 'silla39','silla40', 'silla41', 'silla42'}
              />
              <Mesa 
              posicion={'horizontal'}
              place={3}
              mesa={9}
              side={'both'}
              ids={'silla43', 'silla44', 'silla45','silla46', 'silla47', 'silla48'}
              />
              <Mesa 
              posicion={'horizontal'}
              place={3}
              mesa={10}
              side={'both'}
              ids={'silla49', 'silla50', 'silla51','silla52', 'silla53', 'silla54'}
              />
            </div>
          </div>
          <aside className="right">
            <Mesa 
              posicion={'vertical small'}
              place={2}
              mesa={11}
              side={'both'}
              ids={'silla55', 'silla56', 'silla57','silla58'}
            />
            <Mesa 
              posicion={'vertical small'}
              place={2}
              mesa={12}
              side={'both'}
              ids={'silla59', 'silla60', 'silla61','silla62'}
            />
            <Mesa 
            posicion={'vertical small'}
            place={2}
            mesa={13}
            side={'both'}
            ids={'silla63', 'silla64', 'silla65','silla66'}
            />
          </aside>
          <footer className="bottom">
            <Mesa 
              posicion={'vertical'}
              place={3}
              mesa={14}
              side={'both'}
              ids={'silla67', 'silla68', 'silla69','silla70','silla71','silla72'}
            />
            <Mesa 
              posicion={'vertical'}
              place={3}
              mesa={15}
              side={'both'}
              ids={'silla73', 'silla74', 'silla75','silla76','silla77','silla78'}
            />
            <Mesa 
            posicion={'vertical'}
            place={3}
            mesa={16}
            side={'both'}
            ids={'silla79', 'silla80', 'silla81','silla82','silla83','silla84'}
            />
            <Mesa 
              posicion={'vertical'}
              place={3}
              mesa={17}
              side={'both'}
              ids={'silla85', 'silla86', 'silla87','silla88','silla89','silla90'}
            />
            <Mesa 
            posicion={'circle'}
            place={5}
            side={'both'}
            />

          </footer>
        </div>
    </div>
   );
}
 
export default Biblio;