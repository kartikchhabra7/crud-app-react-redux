import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routerPath from "./routers/createRouterPath";
import Navbar from "./components/layout/Navbar";
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          {routerPath.map((router) => {
            const { path, element, exact, routerId } = router;
            return (
              <Route
                key={routerId}
                path={path}
                element={element}
                exact={exact}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
