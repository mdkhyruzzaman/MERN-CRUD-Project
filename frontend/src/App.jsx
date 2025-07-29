import { BrowserRouter, Route } from "react-router";
import { Header } from "./componets/header/Header";
import { Routes } from "react-router";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/book-list" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
