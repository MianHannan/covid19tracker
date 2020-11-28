import React from 'react'
import { Bar, Pie } from 'react-chartjs-2'
import { GlobalData } from '../App'


export const Charts = () => {

    const gData = React.useContext(GlobalData);

    const data24 = [
        gData.country === "Global" ? gData.data.Global.NewConfirmed : gData.data.Countries[gData.country].NewConfirmed,
        gData.country === "Global" ? gData.data.Global.NewRecovered : gData.data.Countries[gData.country].NewRecovered,
        gData.country === "Global" ? gData.data.Global.NewDeaths : gData.data.Countries[gData.country].NewDeaths
    ]



    const chartData = {
        labels: ['INFECTED', 'RECOVERED', 'DEAD'],
        datasets: [
            {
                label: "Status in Last 24 Hours",
                fill: false,
                lineTension: 0.1,
                backgroundColor: ['rgba(255, 146, 1,0.8)', 'rgba(79, 174, 84,0.8)', 'rgba(238, 71, 63,0.8)'],
                borderColor: '#ccc',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: data24
            }
        ]
    };

    return (
        <div className='container chartBox'>
            <div className="row">
                <div className="col-lg-6">
                    <Bar data={chartData} />
                </div>
                <div className="col-lg-6">
                    <Pie data={chartData} />
                </div>
            </div>
        </div>
    )
}

