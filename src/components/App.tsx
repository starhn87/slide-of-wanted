import React from "react";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "../header.scss";
import "../style.scss";
import "../style-cf.scss";
import "../main.scss";
import "../slide.scss";
import "../custom.scss";
import "../layout.scss";

import Slide from "./Slide";

const App: React.FC = () => (
  <>
    <Header />
    <Slide />
  </>
);

export default App;
