import React from 'react'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'
import './forecast.css'

const DaysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {

    const dayInWeek = new Date().getDay();

    const forecastDays = DaysOfWeek.slice(dayInWeek, DaysOfWeek.length).concat(DaysOfWeek.slice(0, dayInWeek));
    console.log(forecastDays);

    return (
        <>
            <label className='title'>Daily</label>
            <Accordion allowZeroExpanded >
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="dailyItem">
                                    <img src={`icons/${item.weather[0].icon}.png`} alt="Weather" className="iconSmall" />
                                    <label className="day">
                                        {forecastDays[idx]}
                                    </label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="minMaxTemp">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C </label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="dailyDetailsGrid">
                                <div className="dailyDetailsGridItem">
                                    <label>Pressure : </label>
                                    <label>{item.main.pressure/100} Pa</label>
                                </div>
                                <div className="dailyDetailsGridItem">
                                    <label>Humidity : </label>
                                    <label>{item.main.humidity} %</label>
                                </div>
                                <div className="dailyDetailsGridItem">
                                    <label>Clouds : </label>
                                    <label>{item.clouds.all} % </label>
                                </div>
                                <div className="dailyDetailsGridItem">
                                    <label>Wind Speed : </label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="dailyDetailsGridItem">
                                    <label>Sea Level : </label>
                                    <label>{item.main.sea_level} m</label>
                                </div>
                                <div className="dailyDetailsGridItem">
                                    <label>Feels Like : </label>
                                    <label>{item.main.feels_like} °C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}

export default Forecast
