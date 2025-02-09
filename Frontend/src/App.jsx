import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Navigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
