//App.js

import React, { useState } from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const App = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const data = [
        { name: 'Airline', data: 1000 },
        { name: 'Traveler', data: 1461 },
        { name: 'Booking', data: 2480 },
        { name: 'Earning', data: 7850 }
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };

    return (
        <div>
            <h3>Piecahrt of Flight details</h3>
                <PieChart width={400} height={400}>
                    <Pie
                        activeIndex={activeIndex}
                        data={data}
                        dataKey="data"
                        outerRadius={150}
                        fill="green"
                        onMouseEnter={onPieEnter}
                        style={{ cursor: 'pointer', outline: 'none' }} // Ensure no outline on focus
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
        </div>
        
    );
}

export default App;
