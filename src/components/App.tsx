import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import "../assets/scss/global.scss";
import Container from "./Container";

const App: React.FC = () => (
  <>
    <Header />
    <Container>
      <Slider />
    </Container>
  </>
);

export default App;
