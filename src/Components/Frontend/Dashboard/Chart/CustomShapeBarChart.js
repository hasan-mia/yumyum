import React from 'react';
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

const colors = scaleOrdinal(schemeCategory10).range();

const data = [{
    "month": "Mar",
    "investment": 100000,
    "sell": 241,
    "revenue": 10401
  },
  {
    "month": "Apr",
    "investment": 200000,
    "sell": 423,
    "revenue": 24500
  },
  {
    "month": "May",
    "investment": 500000,
    "sell": 726,
    "revenue": 67010
  },
  {
    "month": "Jun",
    "investment": 500000,
    "sell": 529,
    "revenue": 40405
  },
  {
    "month": "Jul",
    "investment": 600000,
    "sell": 601,
    "revenue": 50900
  },
  {
    "month": "Aug",
    "investment": 700000,
    "sell": 670,
    "revenue": 61000
  }
];

const getPath = (x, y, width, height) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
          Z`;

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

TriangleBar.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

const CustomShapeBarChart = () => {
	return (
		<div>
			<BarChart width={400} height={300} data={data} margin={{top: 20, right: 30, left: 20, bottom: 5,}}>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="month" />
			<YAxis />
      <Tooltip />
      <Legend />
			<Bar dataKey="investment" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
				{data.map((entry, index) => (
				<Cell key={`revenue-${index}`} fill={colors[index % 20]} />
				))}
			</Bar>
			</BarChart>
		</div>
	);
};

export default CustomShapeBarChart;