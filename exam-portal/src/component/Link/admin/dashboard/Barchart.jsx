import React from 'react'
/* import 'rsuite/dist/styles/rsuite-default.css';  */
import { BarChart } from '@rsuite/charts'; 

export default function Barchart() { 

// Sample data 
const sampleData = [ 
	['Teacher', 20], 
	['Student', 10], 
	['Course', 15],
	['Question',25] 
]; 

return ( 
	<div style={{ 
	display: 'block', width: 600, paddingLeft: 30 
	}}> 
	<h4>Bar Component of Online Quiz</h4> 
	<BarChart name="BarChart" data={sampleData} /> 
	</div > 
); 
}
