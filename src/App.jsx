import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ItemDetail from "./components/ItemDetail";
import Home from "./components/Home";

function App() {
  const [data, setData] = useState([]);
  const [type, setType] = useState("artist");

  return (
    <>
      <Navbar setData={setData} setType={setType} type={type} />
      <Routes>
        <Route
          path="/"
          element={
            <Home setData={setData} data={data} setType={setType} type={type} />
          }
        />
        <Route path="/artists" />
        <Route path="/albums" />
        <Route path="/likes" />
        <Route path="/recomendations" />
        <Route path="/details/:type/:id" element={<ItemDetail />} />
      </Routes>
    </>
  );
}

export default App;
// si artists/ o albums/ llega vacio, hago busqueda gral, si llega con query busco por
// si me hacen un patch en la url puede hacer un redireccionamiento al home con react router dom CHEQUEAR COMO!!!
