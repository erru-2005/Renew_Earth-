import React from "react";  
import Header from "./Header";
import Carousel from "./Carousels";
import DonationBlock from "./DonationBlock";
import Footer from "./Footer";

function UserMain() {
  
  return (
    <div>
      <Header  />
      <Carousel />
      <DonationBlock />
      <Footer />
    </div>
  );
}

export default UserMain;