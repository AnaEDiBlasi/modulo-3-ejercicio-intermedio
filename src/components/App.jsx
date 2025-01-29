import '../styles/App.scss';
import dataJson from '../services/data.json';
import ListCountries from './ListCountries';

function App() {
  return (
    <>
       <header> <h1>Country Info App</h1> </header>

       <main>

        <ListCountries listCountries = {dataJson}/>
      
       </main>


      
      
    </>
  );
}

export default App;