

function Filters({changeSearch}) {

  const handleInput = (event)=>{
//subir a app los datos del input
    changeSearch(event.target.value)

  }









  return (
    <>
    <label htmlFor="">By Country</label>
     <input type="text" placeholder="Buscar país" onChange= {handleInput} />

     <select name="" id="">
      <option value="All">Todos los contienentes</option>
      <option value="Africa">Africa</option>
      <option value="North America">America del Norte</option>
      <option value="South America">America del sur</option>
      <option value="Europe">Europa</option>
      <option value="Asia">Asia</option>
      <option value="Oceania">Oceania</option>
     </select>
    
    
    
    
    </>
  )
}

export default Filters