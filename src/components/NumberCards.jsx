import React from 'react'
import { NumberCard } from './NumberCard'
import { GlobalData } from '../App'

export const NumberCards = () => {

    const gData = React.useContext(GlobalData);

    return (
        <div className="container numberCards">
            <div className='row'>
                <div className='col-lg-4'>
                    <NumberCard
                        name="infected"
                        today={gData.country === "Global" ? gData.data.Global.NewConfirmed : gData.data.Countries[gData.country].NewConfirmed}
                        total={gData.country === "Global" ? gData.data.Global.TotalConfirmed : gData.data.Countries[gData.country].TotalConfirmed}
                    />
                </div>
                <div className='col-lg-4'>
                    <NumberCard
                        name="recovered"
                        today={gData.country === "Global" ? gData.data.Global.NewRecovered : gData.data.Countries[gData.country].NewRecovered}
                        total={gData.country === "Global" ? gData.data.Global.TotalRecovered : gData.data.Countries[gData.country].TotalRecovered}
                    />
                </div>
                <div className='col-lg-4'>
                    <NumberCard
                        name="dead"
                        today={gData.country === "Global" ? gData.data.Global.NewDeaths : gData.data.Countries[gData.country].NewDeaths}
                        total={gData.country === "Global" ? gData.data.Global.TotalDeaths : gData.data.Countries[gData.country].TotalDeaths}
                    />
                </div>
            </div>
        </div>
    )
}
