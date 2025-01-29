import Country from "./Country"


function ListCountries({listCountries}) {
//listado
  const countrieItemHtml = listCountries.map(item => {
    return <Country key= {item.name}/>
  })







  return (
    <section>
      {countrieItemHtml}

    </section>
  )
}

export default ListCountries