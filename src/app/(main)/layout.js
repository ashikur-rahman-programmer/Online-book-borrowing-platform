import Navbar from "@/components/shared/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default MainLayout;
