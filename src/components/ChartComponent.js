import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import "./GlobalStyles.css";
import "./Dashboard.css";

const generateDummyData = () => {
	const startDate = new Date(); // Current date
	startDate.setDate(startDate.getDate() - 30); // Go back 30 days

	const dummyData = [];
	for (let i = 0; i < 30; i++) {
		const currentDate = new Date(startDate);
		currentDate.setDate(startDate.getDate() + i);
		const x = currentDate.toISOString().split("T")[0];
		const y = Math.random() * 1000 + 500; // Random stock price within a range
		dummyData.push({ x, y });
	}

	return dummyData;
};

const ChartComponent = () => {
	const [data, setData] = useState(generateDummyData());
	const chartData = {
		x: data.map((entry) => entry.x), // an array of time
		y: data.map((entry) => entry.y), //an array of values
		type: "scatter",
		mode: "lines+markers",
		line: { color: "blue" },
	};
	return (
        <div className="d-flex justify-content-center mt-5 mb-5">
            <Plot
                data={[chartData]}
                layout={{
                    title: "Dummy Plot",
                    autosize: true,
                }}
                useResizeHandler="true"
                style={{ width: "85%", height: "100%" }}
            />
        </div>
	);
};

export default ChartComponent;