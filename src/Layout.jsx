//import React from "react";
import Header from "./components/Header";
//import Footer from "./components/Footer";


const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      
    </div>
  );
};

export default Layout;
