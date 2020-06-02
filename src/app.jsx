import React from "react";
import { Route } from "react-router-dom";
import "./app.css";

import { Main, RegionInfo } from "./pages";

export default function App() {
  return (
    <>
      <Route exact path="/" component={Main} />
      <Route exact path="/:region" component={RegionInfo} />
    </>
  );
}
