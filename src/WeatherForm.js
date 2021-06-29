import React from 'react'
import { fetchForecastReport } from './networkCalls'


export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            forecastDescription: '',
            forecastDetails: ''
        };

    }
    onSubmit = (e) => {
        e.preventDefault();

        const address = e.target.location.value.trim()
        if(address){
            fetchForecastReport(address).then(data => {
                const {location, latitude,longitude,temperature,weatherDescription,windDegree,windDirection,windSpeed,feelsLike} = data
                 const weatherMessage = `${location},
                 ${weatherDescription}. It is currently ${temperature} degrees out. It feels like ${feelsLike} degrees out.`
                 const weatherDetails = ` 
                   Wind speed: ${windSpeed} knots,
                   Wind direction: ${windDirection}
                `
                 this.setState( () => ({
                    forecastDescription:weatherMessage,
                     forecastDetails: weatherDetails
                 }))
              })
        }
          
    };
    render(){
        return(  
            <div>
                   <form className="form" onSubmit={this.onSubmit}>
                     <input placeholder="location" name="location" />
                <button>Search</button>
                </form>
                <p>{this.state.forecastDescription}</p>
                <p>{this.state.forecastDetails}</p>
            </div>
             
        );
    }
}