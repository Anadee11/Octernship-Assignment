import React, { useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";
import styles from "./Screen2.module.css";
import ColorHash from "color-hash";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Screen2 = () => {
  var colorHash = new ColorHash();
  const navigate = useNavigate();
  let { word } = useParams();
  const [finalWord, setFinalWord] = useState([...word]);
  const [displayed, setDisplayed] = useState(false);
  function hashCode(str) {
    return colorHash.hex(str);
  }

  var charRepeats = function (str) {
    for (var i = 0; i < str.length; i++) {
      if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
        return false; // repeats
      }
    }
    return true;
  };
  const notify = () => {
    var finalString = finalWord.join("");
    toast(
      <div>
        <div>SUCCESS!!</div>
        {word!==finalString && 
        <>
        <div> Initial Word = {word} </div>
        <div>Final Word = {finalString}</div> 
        </>}
      </div>
    );
  };
  useEffect(() => {
    if (charRepeats(finalWord) === true) {
      setTimeout(() => {
          !displayed && notify();
      }, 1000);
      setDisplayed(true);
    }
  }, [finalWord]);
  const handleClick = (letter, index) => {
    let newFinalWord = finalWord.filter((l, filterIndex) => {
      if (filterIndex === index) return l;
      else if (l !== letter) return l;
    });
    setFinalWord(newFinalWord);
  };

  return (
    <>
      <div className={styles["back-btn"]}>
        <img
          src="/assets/icons/back-button-svgrepo-com.svg"
          alt=""
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div className={styles["card-wrapper"]}>
        {/* <div>{word}</div> */}
        {finalWord.map((letter, index) => {
          return (
            <div
              onClick={() => handleClick(letter, index)}
              style={{ backgroundColor: hashCode(letter) }}
              className={styles["card"]}
              key={index}
            >
              <div className={styles["cross-img"]}>
                <img src="/assets/icons/Cross.svg"></img>
              </div>
              <div className={styles["letter"]}>{letter}</div>
            </div>
          );
        })}
        {/* <div>{finalWord}</div> */}
      </div>
      <ToastContainer limit={1}/>
    </>
  );
};

export default Screen2;
