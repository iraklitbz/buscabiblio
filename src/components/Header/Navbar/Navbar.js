import Chart from "../../Chart/Chart";


const Navbar = ({sillas}) => {
  return ( 
      <div className="header__container container dark--header margin-bottom-xl">
        <div className="header__logo max-width-sm">
          <a href="#">
            <img src="logo.png" />
          </a>
          <div className="quick--info">

            <Chart sillas={sillas} />
            <p>Colegio Mayor Sta. María de Europa <strong>Universidad Complutense de Madrid </strong> Biblioteca. Aforo 90 pax.</p>

          </div>
        </div>

        {/* <button className="btn btn--subtle header__trigger js-header__trigger" aria-label="Toggle menu" aria-expanded="false" aria-controls="header-nav">
          <i className="header__trigger-icon" aria-hidden="true"></i>
          <span>Menu</span>
        </button> */}

        {/* <nav className="header__nav js-header__nav" id="header-nav" role="navigation" aria-label="Main">
          <div className="header__nav-inner">
            <div className="header__label">Main menu</div>
            <ul className="header__list">
              <li className="header__item"> 
            
                <a href="#0" className={'header__link'}>Inicio</a> 
            </li>
              <li className="header__item">
          
                  <a href="#0" className={'header__link'}>Servicios</a>
              
              </li>
             

            </ul>
          </div>
        </nav> */}
    </div>
   );
}
 
export default Navbar;