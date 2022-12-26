import './App.css';
import React from 'react'
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
} from "chart.js";
import { Radar } from "react-chartjs-2";
import Labels from './components/Labels';
import Data from './components/Data';
ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );
  
  export const data = {
    labels: ["Biznese Authoritative", "Biznese Demokratike", "Biznese Liberale"],
    datasets: [
      {
        label: "Numri i Bizneseve",
        data: [1300, 400, 160],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1
      }
    ]
  };
  

function App() {
  return (
    <div className='App'>
      <Radar data={data} />
      <Labels />
      <Data />
    </div>
  );
}

export default App;
