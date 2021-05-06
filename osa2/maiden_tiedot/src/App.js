import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Display = ({country}) => {
  const [ weather, setWeather ] = useState([])
  useEffect(() => {
    axios.get('http://api.weatherstack.com/current'+ "?access_key="+ process.env.REACT_APP_API_KEY + '&query='+country.name).then(response => {
      console.log(response)
      setWeather(response.data)
  })
},[])
  console.log(weather)
  return (
    <div>
    <h1>{country.name}</h1>
    <p>capital {country.capital}</p>
    <p>population {country.population}</p>
    <p><b>Spoken languages</b></p>
    <ul>
      {country.languages.map(language => <li> {language.name} </li>)}
    </ul>
    <img src={country.flag} alt='flag' width='200' height='100' />
    <p>Weather in Helsinki</p>
    <p><b>Temperature:</b> {weather.current.temperature} Celcius</p>
    <img src={weather.current.weather_icons} alt='weather icon' width='100' height='100' />
    <p><b>Wind:</b> {weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
    </div>
  )
}

const App = () => {
  const [country, setCountry] = useState([])
  const [search, setSearch ] = useState('')

  
  useEffect (() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountry(response.data)
      })
  }, [])
  console.log(country)

  const handleSearchChange = (event) => {
    event.preventDefault()
    setSearch(event.target.value)
  }

  return (
    <div>
      <input value={search} onChange={handleSearchChange}></input>
      {/* {country.map(country =>
        <Display key={country.name} country={country}/>
        )} */}
      <Display country={country[76]}/>
    </div>
  )
}

export default App;
