import type React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./components/checkout";
import PaymentFailure from "./components/failure";
import PaymentSuccess from "./components/success";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Checkout />} />
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/failure" element={<PaymentFailure />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
