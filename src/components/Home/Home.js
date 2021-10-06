import React from "react";
import "./Home.scss";
import { useHistory } from "react-router";
import { motion } from "framer-motion";

function Home() {
  const history = useHistory();

  const navigateTo = () => {
    history.push("/playground");
  };

  return (
    <div className="container-fluid home">
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-6 left-half">
          <span className="circle circle1"></span>
          <span className="circle circle2"></span>
          <span className="circle circle3"></span>
          <span className="circle circle4"></span>
          <span className="circle circle5"></span>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 right-half">
          <motion.span
            animate={{
              y: 900,
            }}
            transition={{
              ease: "linear",
              duration: 10,
              repeat: Infinity,
            }}
            className="cross cross1"
          >
            x
          </motion.span>
          <motion.span
            animate={{
              y: 700,
            }}
            transition={{
              ease: "linear",
              duration: 30,
              repeat: Infinity,
            }}
            className="cross cross2"
          >
            x
          </motion.span>
          <motion.span
            animate={{
              y: 900,
            }}
            transition={{
              ease: "linear",
              duration: 20,
              repeat: Infinity,
            }}
            className="cross cross3"
          >
            x
          </motion.span>
          <motion.span
            animate={{
              y: 700,
            }}
            transition={{
              ease: "linear",
              duration: 40,
              repeat: Infinity,
            }}
            className="cross cross4"
          >
            x
          </motion.span>
          <motion.span
            animate={{
              y: 700,
            }}
            transition={{
              ease: "linear",
              duration: 5,
              repeat: Infinity,
            }}
            className="cross cross5"
          >
            x
          </motion.span>
        </div>
        <div className="brand">
          <span>Tic-Tac-Toe</span>
          <button onClick={navigateTo} className="btn btn-primary">
            Play
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
