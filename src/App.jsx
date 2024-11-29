import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { TypeProvider } from "./Context/TypeContext";
import { LikesProvider } from "./Context/LikesContext";
import Navbar from "./Components/Navbar.jsx";
import ItemDetail from "./Components/ItemDetail.jsx";
import Items from "./Components/Items.jsx";
import Home from "./Components/Home.jsx";
import Likes from "./Components/Likes.jsx";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  return (
    <>
      <TypeProvider>
        <LikesProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artists/:query?" element={<Items />} />
            <Route path="/albums/:query?" element={<Items />} />
            <Route path="/likes" element={<Likes setData={setData} />} />
            <Route path="/recomendations" />
            <Route
              path="/details/:type/:id"
              element={<ItemDetail setData={setData} data={data} />}
            />
          </Routes>
        </LikesProvider>
      </TypeProvider>
    </>
  );
}

export default App;

// 29/11: hice un paginator y un boton volver. Como hago que aparezca un toast cuando se agrega a los likes?? ver
