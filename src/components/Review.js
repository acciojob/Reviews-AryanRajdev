import React, { useState } from "react";
import "./../styles/Review.css";

const Review = ({ data }) => {
  const [currentId, setCurrentId] = useState(0);

  function handlePrev() {
    setCurrentId((value) => (value === 0 ? data.length - 1 : value - 1));
  }

  function handleNext() {
    setCurrentId((value) => (value === data.length - 1 ? 0 : value + 1));
  }

  function handleRandom() {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * data.length);
    } while (randomIndex === currentId);
    setCurrentId(randomIndex);
  }

  const current = data[currentId];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="review">
        <h2 id = {`author-${current.id}`} className="author">{current.name}</h2>
        <img src={current.image} className="person-img" />
        <h3 className="job">{current.job}</h3>
        <p className="info">{current.text}</p>
        <div className="buttonContainer">
          <button className="prev-btn" onClick={handlePrev}>
            Previous
          </button>
          <button className="random-btn" onClick={handleRandom}>
            surprise me
          </button>
          <button className="next-btn" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );


};

export default Review;


