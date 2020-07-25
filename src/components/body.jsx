import React from "react";
import { useMediaQuery } from "react-responsive";
import BodyLarge from "./bodyLarge";
import BodySmall from "./bodySmall";

const Body = () => {
  const bigScreen = useMediaQuery({
    query: "(min-width: 992px)",
  });

  return (
    <React.Fragment>
      {bigScreen && <BodyLarge />}
      {!bigScreen && <BodySmall />}
    </React.Fragment>
  );
};

export default Body;
