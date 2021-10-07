import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Playground.scss";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "13rem",
    borderRadius: "20px",
    width: "30rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const Playground = () => {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [usedPositions, setUsedPositions] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(
    () => {
      onGameOver();
    }, // eslint-disable-next-line
    [usedPositions]
  );

  function openModal() {
    setIsModalOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  const onGameOver = () => {
    const b1 = document.getElementsByClassName("box1")[0].innerText;
    const b2 = document.getElementsByClassName("box2")[0].innerText;
    const b3 = document.getElementsByClassName("box3")[0].innerText;
    const b4 = document.getElementsByClassName("box4")[0].innerText;
    const b5 = document.getElementsByClassName("box5")[0].innerText;
    const b6 = document.getElementsByClassName("box6")[0].innerText;
    const b7 = document.getElementsByClassName("box7")[0].innerText;
    const b8 = document.getElementsByClassName("box8")[0].innerText;
    const b9 = document.getElementsByClassName("box9")[0].innerText;
    if (
      (b1 === b2 && b2 === b3 && b3 === "X") ||
      (b1 === b2 && b2 === b3 && b3 === "O") ||
      (b4 === b5 && b5 === b6 && b6 === "X") ||
      (b4 === b5 && b5 === b6 && b6 === "O") ||
      (b7 === b8 && b8 === b9 && b9 === "X") ||
      (b7 === b8 && b8 === b9 && b9 === "O") ||
      (b1 === b4 && b4 === b7 && b7 === "X") ||
      (b1 === b4 && b4 === b7 && b7 === "O") ||
      (b2 === b5 && b5 === b8 && b8 === "X") ||
      (b2 === b5 && b5 === b8 && b8 === "O") ||
      (b3 === b6 && b6 === b9 && b9 === "X") ||
      (b3 === b6 && b6 === b9 && b9 === "O") ||
      (b1 === b5 && b5 === b9 && b9 === "X") ||
      (b1 === b5 && b5 === b9 && b9 === "O") ||
      (b3 === b5 && b5 === b7 && b7 === "X") ||
      (b3 === b5 && b5 === b7 && b7 === "O")
    ) {
      setIsGameOver(true);
      console.log("won!");
      openModal();
    }

    if (usedPositions.length === 9) {
      setIsGameOver(true);
      setIsDraw(true);
      console.log("draw!");
      openModal();
    }
  };

  const onBoxClick = (boxNum) => {
    if (!isGameOver) {
      if (!usedPositions.includes(boxNum)) {
        const up = [...usedPositions];
        up.push(boxNum);
        setUsedPositions(up);
        if (currentPlayer === "X") {
          const cross = document.createElement("span");
          cross.innerText = "X";
          cross.style.fontSize = "80px";
          document.getElementsByClassName(`box${boxNum}`)[0].appendChild(cross);
          setCurrentPlayer("O");
        } else {
          const circle = document.createElement("span");
          circle.innerText = "O";
          circle.style.fontSize = "80px";
          document
            .getElementsByClassName(`box${boxNum}`)[0]
            .appendChild(circle);
          setCurrentPlayer("X");
        }
      }
    }
  };

  const reset = () => {
    document.getElementsByClassName("box1")[0].innerText = "";
    document.getElementsByClassName("box2")[0].innerText = "";
    document.getElementsByClassName("box3")[0].innerText = "";
    document.getElementsByClassName("box4")[0].innerText = "";
    document.getElementsByClassName("box5")[0].innerText = "";
    document.getElementsByClassName("box6")[0].innerText = "";
    document.getElementsByClassName("box7")[0].innerText = "";
    document.getElementsByClassName("box8")[0].innerText = "";
    document.getElementsByClassName("box9")[0].innerText = "";
    setUsedPositions([]);
    setIsGameOver(false);
    setIsDraw(false);
    setCurrentPlayer("X");
    closeModal();
  };

  return (
    <div className="playground container-fluid p-0 m-0">
      <Modal
        isOpen={isModalOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {!isDraw ? (
          <h2>Player {currentPlayer === "X" ? "O" : "X"} won!</h2>
        ) : (
          <h2>Draw!</h2>
        )}
        <div className="button-group d-flex justify-content-between">
          <button className="btn btn-primary text-center" onClick={reset}>
            Play Again?
          </button>
          <Link to="/">
            <button
              className="btn btn-primary ml-2 text-center"
              onClick={closeModal}
            >
              Home
            </button>
          </Link>
        </div>
      </Modal>
      <div className="row header m-0 d-flex justify-content-center align-items-center">
        <h1>Tic Tac Toe</h1>
      </div>
      <div className="row m-0 d-flex mt-3 justify-content-around align-items-center">
        <h5>Whose Playing?: {currentPlayer}</h5>
        <div className="btn-grp">
          <button className="btn btn-primary" onClick={reset}>
            Reset
          </button>
          <Link to="/">
            <button className="btn btn-primary ml-2">Quit</button>
          </Link>
        </div>
      </div>
      <div className="row main m-0">
        <div className="game-card">
          <div className="centering">
            <div className="d-flex row w-100 m-0">
              <div className="box box1" onClick={() => onBoxClick(1)}></div>
              <div className="box box2" onClick={() => onBoxClick(2)}></div>
              <div className="box box3" onClick={() => onBoxClick(3)}></div>
            </div>
            <div className="d-flex row w-100 m-0">
              <div className="box box4" onClick={() => onBoxClick(4)}></div>
              <div className="box box5" onClick={() => onBoxClick(5)}></div>
              <div className="box box6" onClick={() => onBoxClick(6)}></div>
            </div>
            <div className="d-flex row w-100 m-0">
              <div className="box box7" onClick={() => onBoxClick(7)}></div>
              <div className="box box8" onClick={() => onBoxClick(8)}></div>
              <div className="box box9" onClick={() => onBoxClick(9)}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="row footer m-0"></div>
    </div>
  );
};

export default Playground;
