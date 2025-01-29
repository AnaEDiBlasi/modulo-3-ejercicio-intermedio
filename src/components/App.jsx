import '../styles/App.scss';
import dataJson from '../services/data.json';
import ListCountries from './ListCountries';
import Filters from './Filters';
import { useState } from 'react';

function App() {

  const [searchValue, setSearchValue] = useState("")

  const changeSearch = (value)=>{

    setSearchValue(value.toLowerCase())

  }

 




  return (
    <>
       <header> <h1>Country Info App</h1> </header>

       <main>

        <Filters changeSearch = {changeSearch}/>

        <br />
        <br />
        <br />

        <ListCountries listCountries = {dataJson}/>
      
       </main>


      
      
    </>
  );
}

export default App;