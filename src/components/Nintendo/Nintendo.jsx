import React from 'react';
import './Nintendo.css';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
export const Nintendo = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChecked(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: '-100vh' }}
      transition={{ delay: 6.5, duration: 1 }}
      className="scale-[0.5] md:scale-100"
    >
      <input type="checkbox" id="screen" name="screen" checked={isChecked} />
      <motion.div className="nintendo-switch">
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
              <p>Loading...</p>
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
      </motion.div>
    </motion.div>
  );
};
