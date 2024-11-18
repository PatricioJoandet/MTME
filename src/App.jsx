import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import ItemDetail from "./Components/ItemDetail";
import Home from "./Components/Home";
import Items from "./Components/Items";
import { TypeProvider } from "./Context/TypeContext";

function App() {
  const [data, setData] = useState([]);
  return (
    <>
      <TypeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/artists/:query?"
            element={<Items setData={setData} data={data} />}
          />
          <Route
            path="/albums/:query?"
            element={<Items setData={setData} data={data} />}
          />
          <Route path="/likes" />
          <Route path="/recomendations" />
          <Route path="/details/:type/:id" element={<ItemDetail />} />
        </Routes>
      </TypeProvider>
    </>
  );
}

export default App;
// si artists/ o albums/ llega vacio, hago busqueda gral, si llega con query busco por. LISTO -> PROBAR FULL
// si me hacen un patch en la url puede hacer un redireccionamiento al home con react router dom CHEQUEAR COMO!!! LISTO??
// ESTABA HACIENDO DETALLE DE ALBUM. TENGO QUE TERMINAR EL LAYOUT. VER COMO HACER QUE SEA COMPATIBLE CON ARTIST TMB. SI ES ALBUM AGREGA LINEA DEL ARTISTA SI NO NO. ACOMODAR UN POCO MAS
// VER COMO HACER LOS LIKES. CONTEXT????
