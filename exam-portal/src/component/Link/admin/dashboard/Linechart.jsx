// App.js

/* import "./App.css"; */
import {
	LineChart,
	ResponsiveContainer,
	Legend,
	Tooltip,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
} from "recharts";

// Sample chart data
const pdata = [
	{
		name: "Teacher",
		count: 20,
	},
	{
		name: "Student",
		count: 10,
	},
	{
		name: "Course",
		count: 15,
	},
	{
		name: "Question",
		count: 25,
	},
	
];

function Linechart() {
	return (
		<>
			{/* <h3 style={{display:'inline'}}>Line Chart of Online Quiz</h3> */}
			<ResponsiveContainer width="50%" aspect={3}>
			<h3 style={{margin:'5px'}}>Line Chart of Online Quiz</h3>
				<LineChart data={pdata} /* margin={{ right: 300 }} */>
				
					<CartesianGrid />
					<XAxis dataKey="name" interval={"preserveStartEnd"} />
					<YAxis></YAxis>
					<Legend />
					<Tooltip />
					<Line
						dataKey="count"
						stroke="black"
						activeDot={{ r: 8 }}
					/>
					{/* <Line activeDot={{ r: 8 }} /> */}
				</LineChart>
			</ResponsiveContainer>
		</>
	);
}

export default Linechart;
