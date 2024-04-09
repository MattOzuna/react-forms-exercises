import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css";

const BoxList = () => {
  const [boxes, setBoxes] = useState([
    // { color: "red", width: 100, height: 50 },
    // { color: "blue", width: 50, height: 100 },
    // { color: "yellow", width: 100, height: 100 },
  ]);

  const AddBox = ({ color, width, height }) => {
    setBoxes((boxes) => [...boxes, { color, width, height }]);
  };

  const deleteBox = (idx) => {
    setBoxes((boxes) => boxes.toSpliced(idx, 1));
  };

  return (
    <>
      <h1>Box List</h1>
      <div className="BoxList">
        {boxes.map(({ color, width, height }, idx) => (
          <Box
            color={color}
            width={width}
            height={height}
            key={idx}
            id={idx}
            deleteBox={deleteBox}
          />
        ))}
      </div>
      <NewBoxForm AddBox={AddBox} />
    </>
  );
};

export default BoxList;
