import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import ScrollToTop from "./routes/scroll-restoration/scroll-restoration.component";
import Footer from "./routes/footer/footer.component";
import { Fragment } from "react";
import PaymentRedirect from "./routes/payment-redirect/payment-redirect.component";


const App = () => {
  return (
    <Fragment>
    {/* Everytime user goes to another page, users scroll view starts at the top */}
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Navigation />}>
      <Route path='/' element={<Footer />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path='redirect' element={<PaymentRedirect />} />
       
        </Route>
      </Route>
    </Routes>
    </Fragment>
  );
};

export default App;
