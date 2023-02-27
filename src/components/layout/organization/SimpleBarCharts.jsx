import { color } from '@mui/system'
import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
    {name: "Jan",  expense: 60},
    {name: 'Feb',  expense: 70},
    {name: 'Mar',  expense: 65},
    {name: 'Apr',  expense: 85},
    {name: 'May',  expense: 48},
    {name: 'Jun',  expense: 69},
    {name: 'Jul',  expense: 78},
    {name: 'Aug',  expense: 85},
    {name: 'Sep',  expense: 48},
    {name: 'Oct',  expense: 69},
    {name: 'Nov',  expense: 78},
    {name: 'Dec',  expense: 78},
]

const SimpleBarCharts = () => {
  return (
    <div style={{ width: '100%', height: 300, aspectRatio:2 }} >
    <ResponsiveContainer width="100%" height="100%" >
        <BarChart 
            data={data}
            width={400}
            height={200}
            margin={{
                top:5,
                right:30,
                left:20,
                bottom:15,
            }}  
            barCategoryGap={5}
            barSize={25}
                      
        >
          <CartesianGrid  strokeDasharray=""
        stroke=''
        radius={10} />
        
        <XAxis 
             dataKey="name"              
             style={{ border: 'none', width: '50px', textAlign: 'center'}}
             angle={-60}  
             dx={-6}          
            //  interval={0}
             dy={20} 
             stroke="semi-transparent"        
            
            />
        
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="expense" fill="#5DB075" radius={10} />
        
        
        </BarChart>
    </ResponsiveContainer>
    </div>
  )
}

export default SimpleBarCharts