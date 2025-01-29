import PropTypes from "prop-types";

function Country({countryData}) {
  return (
    <article className="card">
      <p>{countryData.flag}</p>
      <h3>{countryData.name.common}</h3>
      <h4>{countryData.capital}</h4>
      <ul>
      {countryData.continents.map((item, i) => <li key= {i}>{item}</li>)}
      </ul>

    </article>
  )
}

Country.propTypes={
  countryData: PropTypes.object.isRequired
}


export default Country