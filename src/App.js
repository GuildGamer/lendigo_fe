import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
import { ItemContext } from "./Contexts/Context";
import { useState } from "react";

function App() {

  const [itemValue, setItemValue] = useState([])

  return (
    <div className="container">
      <ItemContext.Provider value={{itemValue, setItemValue}}>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={ <Body /> } />
      {/* ADD itemValue state as prop in Detail component */}
      <Route path ="/item-details" element={<Detail />}  />
      </Routes>
      </BrowserRouter>
      </ItemContext.Provider>
    </div>
  );
}

export default App;
