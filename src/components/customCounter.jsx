import React, { useState, useRef, useEffect } from "react";

import useCounter from "./useCounter";
import {
  AiFillInfoCircle,
  AiOutlineCloseCircle,
  AiOutlineCopyrightCircle,
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillSetting,
  AiOutlineReload,
} from "react-icons/ai";
import "./style.css";

function Counter() {
  const resetRef = useRef();
  const desRef = useRef();
  const setRef = useRef();
  
  const [background, setBackground] = useState('');
  const [toggle, setToggle] = useState(false);
  const [count, increment, decrement, reset, setValue, maxNum, maxVal] = useCounter()
  useEffect(() => {
    document.body.style.backgroundColor = background
  }, [background])

  const colors = [
    "black",
    "darkred",
    "blue",
    "brown",
    "darkslategray",
    "purple",
    "green",
    "darkslateblue",
  ];
  const setColor = background => {
    setBackground(background)
  }
  const triggerToggle = () => {
    setToggle(!toggle)
  }

  
  const bodyReset = () => {
    resetRef.current.classList.remove("show-text");
  };

  const showReset = () => {
    resetRef.current.classList.toggle("show-text");
  };
  const showDes = () => {
    desRef.current.classList.toggle("show-des");
  };
  const showSet = () => {
    setRef.current.classList.toggle("show-set");
  };
  const setReset = () => {
    setRef.current.classList.remove("show-set");
  };
  const desReset = () => {
    desRef.current.classList.remove("show-des");
  };

  return (
  
    <div className="counter-containers">
      <nav className="navbar">
        <div className="symbol">
          <button className="sign" onClick={showDes}>
            <AiFillInfoCircle />
          </button>
          <button className="sign" onClick={showSet}>
            <AiFillSetting />
          </button>
          <button className="sign" onClick={showReset}>
            <AiOutlineReload />
          </button>
        </div>
      </nav>
      <div className="count-sym">
        <button onClick={decrement} className="decrease">
          <AiOutlineMinus />
        </button>
        <h1 className="counts">{count}</h1>
        <button onClick={increment} className="increase">
          <AiOutlinePlus />
        </button>
      </div>
      <div className="reset-box" ref={resetRef} onClick={bodyReset}>
        <p className="reset-text">Reset counter?</p>
        <p className="yes" onClick={reset}>
          Yes
        </p>
        <p className="no" onClick={bodyReset}>
          Cancel
        </p>
      </div>
      <div className="description" ref={desRef} onClick={desReset}>
        <div className="des-content">
          <h2 className="count-title">Simple counter</h2>
          <p className="count-text">
            A Simple tool for counting things and keeping track of numbers.
          </p>
          <p className="owner">
            <AiOutlineCopyrightCircle /> Orji Onyinyechi
          </p>
          <button className="close" onClick={desReset}>
            <AiOutlineCloseCircle />
          </button>
        </div>
      </div>
      <section className="setting-box" ref={setRef}>
        <div className="setting-content">
          <h2 className="setting-title">Settings</h2>
          <div className="count-display">
            <p className="counts-display">
              Set count ={" "}
              <input
                type="number"
                placeholder="0"
                className="count-input"
                min="0"
                value={count}
                onChange={setValue}
              />
            </p>
          </div>
          <div className="range-box">
            <div className="range-content">
              <p className="limit">
                Limits Off/On
                </p>
                <label class="switch">
                  <input type="checkbox" onClick={triggerToggle} />
                  <span class="slider round"></span>
                </label>
              
              {toggle ?
                <p className="max">
                  Maximum ={" "}
                  <input
                    type="number"
                    placeholder="0"
                    className="max-input"
                    min="11"
                    value={maxNum}
                    onChange={maxVal}
                  />
              
                  </p> : null}
                
            </div>
          </div>
          <div className="color-pallete">
            <div className="color-content">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className={color}
                  onClick={() => setColor(color)
                  }
                ></div>
              ))}
            </div>
          </div>
          <button className="close" onClick={setReset}>
            <AiOutlineCloseCircle />
          </button>
        </div>
      </section>
    </div>
  
  );
}

export default Counter;
