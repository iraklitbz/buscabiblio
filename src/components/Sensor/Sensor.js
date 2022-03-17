import react from "react";
const Sensor = ({datos}) => {
    return ( 
       <div className="container max-width-sm padding-bottom-xl">
           <h4>Datos del dispositivo {datos.deviceId}</h4>
           <div className="tbl margin-top-md">
            <table className="tbl__table text-unit-em text-sm border-bottom border-2">
                    <thead className="tbl__header border-bottom border-2">
                        <tr className="tbl__row">
                            <th className="tbl__cell text-left"> 
                                <span className="text-xs text-uppercase letter-spacing-lg font-semibold">Medida</span>
                            </th>
                            <th className="tbl__cell text-left"> 
                                <span className="text-xs text-uppercase letter-spacing-lg font-semibold">Valor</span>
                            </th>
                            <th className="tbl__cell text-left"> 
                                <span className="text-xs text-uppercase letter-spacing-lg font-semibold">Unidad</span>
                            </th>
                        
                        </tr>
                    </thead>
                    <tbody className="tbl__body">
                      
                        <tr className="tbl__row">
                            <td className="tbl__cell" role="cell">Activity counter</td>
                            <td className="tbl__cell" role="cell">{datos.activityCounter}</td>
                            <td className="tbl__cell" role="cell"></td>
                        </tr>
                        <tr className="tbl__row">
                            <td className="tbl__cell" role="cell">Air humidity</td>
                            <td className="tbl__cell" role="cell">{datos.airHumidity}</td>
                            <td className="tbl__cell" role="cell">%</td>
                        </tr>
                        <tr className="tbl__row">
                            <td className="tbl__cell" role="cell">Air temperature</td>
                            <td className="tbl__cell" role="cell">{datos.airTemperature}</td>
                            <td className="tbl__cell" role="cell">°C</td>
                        </tr>
                        <tr className="tbl__row">
                            <td className="tbl__cell" role="cell">Ambient light (infrared)</td>
                            <td className="tbl__cell" role="cell">{datos.ambientLightInfrared}</td>
                            <td className="tbl__cell" role="cell"></td>
                        </tr>
                        <tr className="tbl__row">
                            <td className="tbl__cell" role="cell">Ambient light (visible + infrared)</td>
                            <td className="tbl__cell" role="cell">{datos.ambientLightVisibleInfrared}</td>
                            <td className="tbl__cell" role="cell"></td>
                        </tr>
                        <tr className="tbl__row">
                            <td className="tbl__cell" role="cell">Barometric pressure</td>
                            <td className="tbl__cell" role="cell">{datos.barometricPressure}</td>
                            <td className="tbl__cell" role="cell">Pa</td>
                        </tr>
                        <tr className="tbl__row">
                            <td className="tbl__cell" role="cell">Battery voltage</td>
                            <td className="tbl__cell" role="cell">{datos.batteryVoltage}</td>
                            <td className="tbl__cell" role="cell">V</td>
                        </tr>
                        <tr className="tbl__row">
                            <td className="tbl__cell" role="cell">CO2 concentration</td>
                            <td className="tbl__cell" role="cell">{datos.co2Concentration}</td>
                            <td className="tbl__cell" role="cell">ppm</td>
                        </tr>
                        <tr className="tbl__row">
                            <td className="tbl__cell" role="cell">CO2 sensor status</td>
                            <td className="tbl__cell" role="cell">{datos.co2SensorStatus}</td>
                            <td className="tbl__cell" role="cell"></td>
                        </tr>
                        <tr className="tbl__row">
                            <td className="tbl__cell" role="cell">Illuminance</td>
                            <td className="tbl__cell" role="cell">{datos.illuminance}</td>
                            <td className="tbl__cell" role="cell">lx</td>
                        </tr>
                        <tr className="tbl__row">
                            <td className="tbl__cell" role="cell">Raw IR reading</td>
                            <td className="tbl__cell" role="cell">{datos.rawIrReading}</td>
                            <td className="tbl__cell" role="cell"></td>
                        </tr>
                        <tr className="tbl__row">
                            <td className="tbl__cell" role="cell">Total VOC</td>
                            <td className="tbl__cell" role="cell">{datos.totalVoc}</td>
                            <td className="tbl__cell" role="cell">ppb</td>
                        </tr>
                        <tr className="tbl__row">
                            <td className="tbl__cell" role="cell">Protocol version</td>
                            <td className="tbl__cell" role="cell">{datos.protocolVersion}</td>
                            <td className="tbl__cell" role="cell"></td>
                        </tr>
                    </tbody>
                </table>
                <p className="margin-top-xs outstanding">Fecha y hora de recepción de datos: {datos.recibido}</p>
            </div>
       </div>
     );
}
 
export default Sensor;