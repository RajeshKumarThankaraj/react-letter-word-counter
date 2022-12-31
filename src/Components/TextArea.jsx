import React, { useState } from "react";

const TextArea = () => {
  const [inputText, setInputText] = useState("");
  const [letterCount, setLetterCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);

  const lettersInputHandler = (event) => {
    setInputText(event.target.value);
    setLetterCount(inputText.split(" ").join("").length);
    setWordCount(inputText.split(" ").length);
  };

  const clearInputHandler = () => {
    setInputText("");
    setLetterCount(0);
    setWordCount(0);
  };
  return (
    <div className="card text-center">
      <div className="card-header">React Letter Word Counter</div>
      <div className="card-body">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Enter your text
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="4"
            onChange={lettersInputHandler}
            value={inputText}
          ></textarea>
        </div>
        <button
          href="#"
          className="btn btn-primary"
          onClick={clearInputHandler}
        >
          Clear the Board
        </button>
      </div>
      <div className="card-footer text-muted d-flex justify-content-between">
        <div>Letter count: {letterCount}</div>
        <div>Word count: {wordCount}</div>
      </div>
    </div>
  );
};

export default TextArea;
