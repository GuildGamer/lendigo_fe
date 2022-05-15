import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./components/Detail"

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={ <Body /> } />
      {/* ADD itemValue state as prop in Detail component */}
      <Route path ="item-details" element={<Detail />}  />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
