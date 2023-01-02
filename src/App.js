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
import InputForm from './components/InputForm';

function App() {
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

const data = {
    labels: ["Biznese Authoritative", "Biznese Demokratike", "Biznese Liberale"],
    datasets: [
      {
        label: "Numri i Bizneseve",
        data: [1300, 400, 160],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1
      },
      {
        label: "Reload Chart",
        backgroundColor: "rgba(235, 240, 235, 100)",
        borderColor: "red",
        borderWidth: 1
      }
    ]
  };

  return (
    <div className='App'>
      <Radar data={data} />
      <InputForm data={data}/>
    </div>
  );
}

export default App;
