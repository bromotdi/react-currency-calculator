import { useEffect, useState, useCallback } from "react"

import Calculator from './components/Calculator.js';
import Header from "./components/Header.js";
import './App.css';
import bg from './img/bg.jpg'

const getCurrency = async (a, b, setData) => {
    console.log("getCurrency", a, b)
  const res = await fetch(`https://economia.awesomeapi.com.br/last/${a}-${b}`)
  const data = await res.json()
  if (data[a+b]) setData(data[a+b])
}

const App = () => {
  const [exchangeData, setExchangeData] = useState({});
  const [coinA, setCoinA] = useState('USD');
  const [coinB, setCoinB] = useState('UAH');
  const [coinC] = useState('EUR');
  const [additionData, setAdditionData] = useState({})
  const setCA = useCallback(async cv => {
     await getCurrency(cv, coinB, setExchangeData)
     setCoinA(cv);
  }, [coinB])
  const setCB = useCallback(async cv => {
      await getCurrency(coinA, cv, setExchangeData)
      setCoinB(cv);
  }, [coinA])

  useEffect(() => {
    getCurrency(coinA, coinB, setExchangeData)
    getCurrency(coinC, coinB, setAdditionData)
  }, [])

  return (
      <div>
      <div className='App'>
          <header>
            <h2>Currency Calculator</h2>
          </header>
          <Header data={exchangeData}/>
          <Header data={additionData}/>
          <div>
            <p>Currency quote day of UAH: {exchangeData.create_date}</p>
          </div>
          <Calculator ask={exchangeData.ask} setCA={setCA} setCB={setCB}/>
      </div>
          <img className="img" src={bg}/>
      </div>
  );
}

export default App;
