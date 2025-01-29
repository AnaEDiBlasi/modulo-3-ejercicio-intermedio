import '../styles/App.scss';
import dataJson from '../services/data.json';
import ListCountries from './ListCountries';
import Filters from './Filters';
import { useState } from 'react';

function App() {

  const [countries] = useState(dataJson)

  const [searchValue, setSearchValue] = useState("")

  const [continent, setContinent] = useState("All")
//lifting/ filter
  const changeSearch = (value)=>{

    setSearchValue(value.toLowerCase())

  }

  const filterCountries = dataJson.filter(country => country.name.common.toLowerCase().includes(searchValue))

  const changeContinent = (value) => {
    setContinent(value)
  }

  // const filterContinent = ["All", ...new Set(conutries.map((country)=> country.continents[0]))]
 




  return (
    <>
       <header> <h1>Country Info App</h1> </header>

       <main>

        <Filters changeSearch = {changeSearch} changeContinent = {changeContinent}  />

        <br />
        <br />
        <br />

        <ListCountries listCountries = {filterCountries} />
      
       </main>


      
      
    </>
  );
}

export default App;