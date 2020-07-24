import React from "react";

import { useMediaQuery } from "react-responsive";
import BodyLarge from "./bodyLarge";
import BodySmall from "./bodySmall";

const Body = () => {
  const bigScreen = useMediaQuery({
    query: "(min-width: 992px)",
  });

  return (
    <div>
      {bigScreen && <BodyLarge />}
      {!bigScreen && <BodySmall />}
    </div>
  );
};

export default Body;
