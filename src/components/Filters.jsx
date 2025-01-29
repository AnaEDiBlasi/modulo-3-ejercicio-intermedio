

function Filters({changeSearch, changeContinent, filterContinent} , ) {

  const handleInput = (event)=>{
//subir a app los datos del input
    changeSearch(event.target.value)

  }


  const handleSelect = (event) =>{

    changeContinent(event.target.value)

  }









  return (
    <>
    <label htmlFor="search">By Country</label>
     <input type="text" placeholder="Buscar país" onChange= {handleInput} />


     <label htmlFor="continet">By Continet</label>
     <select name="continent" id="continent" onChange={handleSelect}>
      <option value="All">All</option>
      <option value="Africa">Africa</option>
      <option value="North America">North America</option>
      <option value="South America">South America</option>
      <option value="Europe">Europe</option>
      <option value="Asia">Asia</option>
      <option value="Oceania">Oceania</option>
     </select>
    
    
    
    
    </>
  )
}

export default Filters