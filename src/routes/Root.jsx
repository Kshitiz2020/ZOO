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

      <Footer copy="Thanks for visiting ZOO! Have a Nice Day" />
    </div>
  );
};

export default Root;
