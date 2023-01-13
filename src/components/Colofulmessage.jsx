import React from "react";
const Colofulmessage = (props) => {
  const { color, children } = props;
  const contentpinkState = { color: color, fontSize: "18px" }; //中にCSSの記法
  return <p style={contentpinkState}>{children}</p>;
};
export default Colofulmessage;
