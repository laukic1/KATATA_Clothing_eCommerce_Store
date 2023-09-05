import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Navigation from "./routes/navigation/navigation.component";

const Shop = () => {
  return <h1>SHOP</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
