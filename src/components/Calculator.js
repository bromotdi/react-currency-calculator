import { useState } from "react"
import Select from "react-select";
import './Calculator.css'

const options = [
    {value: 'USD', label: 'US Dollar'},
    {value: 'EUR', label: 'Euro'},
    {value: 'UAH', label: 'Ukraine'},
    {value: 'BRL', label: 'Brazilian Real'},
    {value: 'XAF', label: 'CFA Franc BCEAO'},
    {value: 'ARS', label: 'Argentine Peso'},
    {value: 'AUD', label: 'Australian Dollar'},
    {value: 'CAD', label: 'Canadian Dollar'},
    {value: 'CHF', label: 'Swiss Franc'},
    {value: 'CLP', label: 'Chilean Peso'},
    {value: 'CNY', label: 'Yuan'},
    {value: 'COP', label: 'Colombian Peso'},
    {value: 'GBP', label: 'Pound Sterling'},
    {value: 'JPY', label: 'Yen'},
    {value: 'KRW', label: 'South Korean Won'},
    {value: 'MXN', label: 'Mexican Peso'},
    {value: 'NZD', label: 'New Zealand Dollar'},
    {value: 'PEN', label: 'Nuevo Sol'},
    {value: 'PYG', label: 'Guarani'},
    {value: 'RUB', label: 'Russian Ruble'},
    {value: 'TRY', label: 'Turkish Lira'},
    {value: 'UYU', label: 'Peso Uruguayo'},
    {value: 'VEF', label: 'Bolivar Fuerte'},
    {value: 'XCD', label: 'East Caribbean Dollar'},
    {value: 'ZAR', label: 'Rand'}

]

const updateCoin = (valueBase, valueB=false, ask) => {
    if (valueB) return valueBase / ask;
    return valueBase * ask || 0;
}

const Calculator = ({ ask, setCA, setCB }) => {
    const [valueCoinA, setValueCoinA] = useState(0);
    const [valueCoinB, setValueCoinB] = useState(updateCoin(valueCoinA, false, ask));

    const onChangeA = ({ target: { value } }) => {
        setValueCoinA(value)
        setValueCoinB(updateCoin(value, false, ask).toFixed(2))
    }

    const onChangeB = ({ target: { value } }) => {
        setValueCoinB(value)
        setValueCoinA(updateCoin(value, true, ask).toFixed(2))
    }

    return (
        <div className="calculator">
            <div>
                <div className="setCoins">
                    <input type="number" className="inCoin" min={0} value={valueCoinA} onChange={onChangeA}/>
                    <Select className="select" options={options} defaultValue={options[0]} onChange={e => setCA(e.value)}/>
                </div>
                <div className="setCoins">
                    <input type="number" className="inCoin" min={0} value={valueCoinB} onChange={onChangeB}/>
                    <Select className="select" options={options} defaultValue={options[2]} onChange={e => setCB(e.value)}/>
                </div>
            </div>
        </div>
    )
}

export default Calculator