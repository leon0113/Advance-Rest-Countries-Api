import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Countries from "./components/Countries/Countries";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Countries></Countries>}></Route>
      <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
    </Routes>
  )
}

export default App;
