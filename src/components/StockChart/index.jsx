import React, { useRef, useState } from "react";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import "./style.css";

Chart.register(...registerables);

const StockChart = ({ stockData, dayKey }) => {
  const [selectedData, setSelectedData] = useState(dayKey);
  const [selectedDataName, setSelectedDataName] = useState("Day");
  
  const chartRef = useRef(null);

  const toggleData = (option,name) => {
    
    setSelectedData(option);
    setSelectedDataName(name);
  };

  const stockDataArray = stockData.map((obj) => obj[selectedData]);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const chartData = {
    labels: stockDataArray[0].values?.map((data) => data.datetime),
    datasets: stockDataArray.map((data) => ({
      label: `Stock Price ${data.meta.symbol}`,
      data: data.values.map((data) => parseFloat(data.open)),
      fill: false,
      borderColor: getRandomColor(),
      borderWidth: 2,
      pointRadius: 2,
    })),
  };

  const config = {
    type: "line",
    data: chartData,
    options: {
      responsive: true,
      interaction: {
        mode: "index",
        intersect: false,
      },
      stacked: false,
      plugins: {
        title: {
          display: true,
          text: `Chart.js Line Chart - Multi Axis (${selectedData} Data)`, 
        },
      },
      scales: {
        y: {
          type: "linear",
          display: true,
          position: "left",
        },
        y1: {
          type: "linear",
          display: true,
          position: "right",
          grid: {
            drawOnChartArea: false,
          },
        },
      },
     
    },
  };

  return (
    <div className="stocks-container">
      <div className="stock-chart">
        <div className="heading">

        <h1>Stock Price Chart </h1>
        <p>Per {selectedDataName} Data</p>
        </div>
        <div className="btns-container">
        <button onClick={() => toggleData("min", "Minute")}>Show Minute Data</button>
          <button onClick={() => toggleData("day", "Day")}>Show Daily Data</button>
          <button onClick={() => toggleData("week", "Week")}>Show Weekly Data</button>
          <button onClick={() => toggleData("month", "Month")}>Show Monthly Data</button>
        </div>
        {stockDataArray[0].values ? (
          <div className="stocks-graph">
            <Line ref={chartRef} data={chartData} options={config} />
          </div>
        ) : (
          <p>Data not available for the selected stock</p>
        )}
      </div>
    </div>
  );
};

export default StockChart;
