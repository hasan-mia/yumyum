import React from 'react';
import CustomShapeBarChart from './Chart/CustomShapeBarChart';
import MyAreaChart from './Chart/MyAreaChart';
import TwoLevelPieChart from './Chart/TwoLevelPieChart';
import CustomizedDotLineChart from './Chart/CustomizedDotLineChart';

const Dashboard = () => {
	return (
		<section className="py-1 lg:px-0 px-5">
            <div className="container-lg lg:px-28 pb-5">
				< div className = "grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1" >
					<MyAreaChart></MyAreaChart>
					<CustomizedDotLineChart></CustomizedDotLineChart>
					<CustomShapeBarChart></CustomShapeBarChart>
					<TwoLevelPieChart></TwoLevelPieChart>
				</div>	
			</div>
		</section>
	);
};

export default Dashboard;