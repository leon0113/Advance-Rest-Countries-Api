import './App.css';
import { Routes, Route } from "react-router-dom";
import Countries from "./components/Countries/Countries";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Country from './components/Country/Country';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Countries></Countries>}></Route>
      <Route path='/:name' element={<Country></Country>}></Route>
      <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
    </Routes>
  )
}

export default App;
