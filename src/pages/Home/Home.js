import { Fragment } from "react/cjs/react.production.min";
import Biblio from "../../components/Biblio/Biblio";
import Chart from "../../components/Chart/Chart";


const Home = () => {
  return (
    <Fragment> 
      <Biblio />
      <Chart />
    </Fragment>
   );
}
 
export default Home;