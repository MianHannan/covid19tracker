import React from 'react'
import { Header } from './components/Header'
import { NumberCards } from './components/NumberCards'
import { Charts } from './components/Charts'


export const GlobalData = React.createContext({});

export const App = () => {

  const [isFetched, setIsFetched] = React.useState(false);
  const [data, setData] = React.useState({});

  const [message, setMessage] = React.useState("");
  const [country, setCountry] = React.useState("Global");

  React.useEffect(() => {
    fetch('https://api.covid19api.com/summary')
      .then(response => response.json())
      .then(data => {
        if (data.Message === "") {
          setData(data);
          setIsFetched(true);
        }
        else {
          setMessage("Error Refresh the Page API message : " + data.Message);
        }
      })
  }, [])

  if (isFetched === false) {
    return (
      <div>
        <div className='loader'>
          <img src={document.URL + '/favicon.ico'} alt='Loading' />
        </div>
        <h1>{message}</h1>
      </div>

    )
  } else {
    return (
      <GlobalData.Provider value={{
        data: data,
        setData: setData,
        country: country,
        setCountry: setCountry
      }}>
        <Header />
        <NumberCards />
        <Charts />
        <div style={{ marginBottom: '10px' }}>
          <a href="https://mianhannan.github.io/covid19tracker">Covid19 Tracker </a>
          Developed with ❤ by
          <a href="https://mianhannan.github.io"> Mian Hannan</a>
        </div>
      </GlobalData.Provider>
    )
  }
}
