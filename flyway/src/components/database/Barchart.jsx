import React from 'react'
/* import 'rsuite/dist/styles/rsuite-default.css';  */
import { BarChart } from '@rsuite/charts'; 

export default function Barchart() { 

// Sample data 
const sampleData = [ 
	['Airline', 1000], 
	['Traveler', 1461], 
	['Booking', 2480],
	['Earning',7850] 
]; 

return ( 
	<div style={{ 
	display: 'block', width: 700, paddingLeft: 30 
	}}> 
	<h4>Flight Details Bar Component</h4> 
	<BarChart name="BarChart" data={sampleData} /> 
	</div > 
); 
}
