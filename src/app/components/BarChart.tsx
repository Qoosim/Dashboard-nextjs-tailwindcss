'use client'

import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(  
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)
interface ChartData {
  labels: string[];
  datasets: DataProps[];
}

interface ChartOptions {
  plugins: {
    legend: {
      position: string;
    };
    title: {
      display: boolean;
      text: string;
    };
  };
  maintainAspectRatio: boolean;
  responsive: boolean;
}

export interface DataProps {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
}

const BarChart: React.FC<DataProps> = ({ label, data, borderColor, backgroundColor }) => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: []
  })

  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    setChartData({
      labels: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
      datasets: [
        {
          label: "Sale $",
          data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.4)"
        }
      ]
    });
    setChartOptions({
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: "Daily Revenue"
        },
      },
      maintainAspectRatio: false,
      responsive: true
    })
  }, [])

  return (
    <>
      <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto border p-4 bg-white rounded-lg">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  )
}

export default BarChart;
