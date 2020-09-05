import React from "react";
import { useMediaQuery } from "react-responsive";
import BodyLarge from "./bodyLarge";
import BodySmall from "./bodySmall";
import InfoModal from "./infoModal/modal";

const Body = () => {
  const bigScreen = useMediaQuery({
    query: "(min-width: 992px)",
  });

  return (
    <>
      {bigScreen ? <BodyLarge /> : <BodySmall />}
      <InfoModal />
    </>
  );
};

export default Body;
