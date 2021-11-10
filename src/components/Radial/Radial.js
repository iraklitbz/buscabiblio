


const Radial = () => {
  
  return ( 
    <div className="radial-bar flex flex-column gap-md gap-lg@sm flex-row@xs items-center@xs js-radial-bar" data-radial-bar-animation="on">
        <div className="flex-shrink-0 ">
          <div className="radial-bar__area js-radial-bar__area" aria-hidden="true">
        

            <div className="radial-bar__tooltip is-hidden js-radial-bar__tooltip"></div>
          </div>
        </div>

        <div>
          <ul className="grid gap-xs">
            <li className="flex items-center">
              <span className="radial-bar__bullet bg-primary margin-right-xxs" aria-hidden="true"></span>
              <span className="text-sm">Label 1 (<i className="js-radial-bar__value" data-radial-bar-color="color-primary">75%</i>)</span>
            </li>

          </ul>
        </div>
      </div>
   );
}
 
export default Radial;