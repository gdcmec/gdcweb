import React from 'react';
import './Nintendo.css';
import { useState, useEffect } from 'react';
export const Nintendo = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChecked(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="">
      <input type="checkbox" id="screen" name="screen" checked={isChecked} />
      <main className="nintendo-switch">
        <aside className="actions left">
          <i className="minus">-</i>
          <div className="analogic">
            <div className="center-circle"></div>
          </div>
          <div className="buttons">
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
          <div className="square"></div>
        </aside>
        <label className="middle" for="screen">
          <div className="screen">
            <div className="glass"></div>
            <span>
              Welcome to
              <br />
              <strong>GDC</strong>
              <p>Loading</p>
            </span>
          </div>
        </label>

        <aside className="actions right">
          <i className="plus">+</i>
          <div className="analogic">
            <div className="center-circle"></div>
          </div>
          <div className="buttons">
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
          <div className="circle"></div>
        </aside>
      </main>
    </div>
  );
};
