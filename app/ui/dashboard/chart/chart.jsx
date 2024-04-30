"use client"

import styles from './chart.module.css';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
      name: 'Mon',
      visit: 3000,
      click: 1398,
    },
    {
      name: 'Tue',
      visit: 4000,
      click: 2500,
    },
    {
      name: 'Wed',
      visit: 3654,
      click: 2597,
    },
    {
      name: 'Thu',
      visit: 3322,
      click: 2222,
    },
    {
      name: 'Fri',
      visit: 5423,
      click: 1132,
    },
    {
      name: 'Sat',
      visit: 4025,
      click: 2000,
    },
  ];

const Chart = () => {
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Weekly Recap</h2>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip contentStyle={{background:"#151c2c", border:"none"}}/>
                    <Legend />
                    <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
export default Chart;