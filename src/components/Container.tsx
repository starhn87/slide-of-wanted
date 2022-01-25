import React, { useMemo } from "react";
import "../assets/scss/slide.scss";

const Container: React.FC = ({ children }) => {
  return useMemo(() => <main className="slideBox">{children}</main>, []);
};

export default Container;
