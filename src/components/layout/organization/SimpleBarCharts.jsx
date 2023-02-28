import React from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from 'recharts'

const SimpleBarCharts = ({color,data}) => { 

  return (
    <div style={{ width: '100%', height: 300, aspectRatio:2 }} >
    <ResponsiveContainer width="100%" height="100%" >
        <BarChart 
            data={data}
            width={400}
            height={200}
            margin={{
                top:1,
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
        <Bar dataKey="expense" fill={color} radius={10} />
        
        
        </BarChart>
    </ResponsiveContainer>
    </div>
  )
}

export default SimpleBarCharts