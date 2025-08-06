import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";

const countLikes = 0;
const countDislikes = 0;

const [count, setCount] = useState(0);

const addLike = () => {
  setCount((prevValue) => {
    return (prevValue += 1);
  });
};

const addDislike = () => {
  setCount((prevValue) => {
    return (prevValue += 1);
  });
};

const resetResults = () => {
  countLikes = 0;
  countDislikes = 0;
};

function Feedback() {
  return   <div className="feedback_wrapper">
    <div className="button_control">
      <Button name="Like" onClick={addLike} />
      <p className="counter">{countLikes}</p>
    </div>
    <div className="button_control">
      <Button name="Dislike" onClick={addDislike} />
      <p className="counter">{countDislikes}</p>
    </div>
    <Button name="Reset Results" onClick={resetResults} />
  </div>;
}

export default Feedback;
