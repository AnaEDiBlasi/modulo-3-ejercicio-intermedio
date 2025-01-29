import Country from "./Country";
import PropTypes from "prop-types";


function ListCountries({listCountries}) {
//listado
  const countrieItemHtml = listCountries.map(country => {
    
    return <Country key= {country.name.common} countryData= {country}/>
  })







  return (
    <section>
      {countrieItemHtml}

    </section>
  )
}

ListCountries.propTypes={
  listCountries: PropTypes.array
}

export default ListCountries