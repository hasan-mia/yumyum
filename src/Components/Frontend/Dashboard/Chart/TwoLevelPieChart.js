import React from 'react';
import { PieChart, Pie, Tooltip, Legend, } from 'recharts';

const TwoLevelPieChart = () => {
	const data01 = [
	{ name: 'invesment', value: 400 },
	{ name: 'invesment', value: 300 },
	{ name: 'invesment', value: 300 },
	{ name: 'invesment', value: 200 },
	];
	const data02 = [
	{ name: 'Jan', value: 100 },
	{ name: 'Feb', value: 300 },
	{ name: 'Mar', value: 100 },
	{ name: 'Apr', value: 80 },
	{ name: 'May', value: 40 },
	{ name: 'Jun', value: 30 },
	{ name: 'Jul', value: 50 },
	{ name: 'Aug', value: 100 },
	{ name: 'Sep', value: 200 },
	{ name: 'Oct', value: 150 },
	{ name: 'Nov', value: 50 },
	{ name: 'Dec', value: 90 },
	];
	const demoUrl = 'https://codesandbox.io/s/pie-chart-of-two-levels-gor24';
	return (
		<div>
				<PieChart width={400} height={400}>
					<Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
					<Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
					<Tooltip/>
        			<Legend/>
				</PieChart>
		</div>
	);
};

export default TwoLevelPieChart;