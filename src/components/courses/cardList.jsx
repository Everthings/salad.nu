import React from "react";

const CardList = ({ list, Card, id, ...rest }) => {
  return (
    <React.Fragment>
      <center>{list.length} result(s)</center>
      {list.map((card) => {
        return <Card key={card[id]} {...card} />;
      })}
    </React.Fragment>
  );
};

export default CardList;
