import './App.css'
import { Slider } from './Slider';
import JsonData from "../src/data.json";

console.log(JsonData.data)
export default function App() {
  return (
    <Slider slide={JsonData}/>
  )
}