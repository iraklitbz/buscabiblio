

const Navbar = () => {
  return ( 
      <div className="header__container container max-width-lg">
        <div className="header__logo">
          <a href="#">
            <img src="logo.png" />
          </a>
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