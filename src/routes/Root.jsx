import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="container">
      <Header />
      <div className="outlet">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Root;
