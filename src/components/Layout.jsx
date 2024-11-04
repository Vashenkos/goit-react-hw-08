import React from "react"; // Додано імпорт React  
import { AppBar } from "./AppBar/AppBar";  
import { Outlet } from "react-router-dom";  
import { Suspense } from "react";  

export const Layout = ({ children }) => {  
  return (  
    <div >  
      <AppBar />  
      <Outlet />  
      <Suspense fallback={null}>{children}</Suspense>  
    </div>  
  );  
};