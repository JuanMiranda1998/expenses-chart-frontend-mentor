import { useState } from 'react';
import PropTypes from 'prop-types';
import './Chart.css'

export function Chart(props){
    const [isHovering,setIsHovering] = useState(null)
    const data = props.data
    const isMaxValue = (value,maxValue) => Math.round(value) === maxValue
    const getMaxValue = arr => Math.round(Math.max(...arr.map(value=>value.amount)))
    const maximumValue = getMaxValue(data)

    const handleMouseOver = e => setIsHovering(e.target.id) 
    const handleMouseOut = () => setIsHovering(false)

    return (
        <section className='chart'>
           <h1 className='chartTitle'>Spending - Last 7 days</h1> 
           <div className='chartGraph'>
                <div className='chartValues'>
                    {data.map(value=>
                    (<div className='chartValue' key={value.day}>
                        <div className={isHovering===value.day?'chartAmount visible':'chartAmount'}>${value.amount}</div>
                        <div id={value.day} className={isMaxValue(value.amount,maximumValue)? 'chartBar maximum' : 'chartBar'} 
                        style={{height:`${value.amount*3}px`}} 
                        onMouseOver={handleMouseOver} 
                        onMouseOut={handleMouseOut}
                        ></div>
                        <p className='chartDay'>{value.day}</p>
                    </div>)
                    )}
                </div>
           </div>
           <div className='separator'></div>
           <div className='chartDetails'>
                <div className='chartTotal'>
                    <p className='totalLabel'>Total this month</p>
                    <p className='totalNumber'>$478.33</p>
                </div>
                <div className='chartPercentage'>
                    <p className='percentageNumber'>+2.4%</p>
                    <p className='percentageLabel'>from last month</p>
                </div>
           </div>
        </section>
    )
}

Chart.propTypes = {
    data: PropTypes.array
  };