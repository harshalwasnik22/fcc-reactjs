import './App.css';
import Home from './pages/Home/Home';
import React, { useRef } from "react";

export default function App() {
  const blobRef = useRef(null);

  const handlePointerMove = (event) => {
    const { clientX, clientY } = event;

    blobRef.current.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 3000, fill: "forwards" }
    );
  };

  return (
    <>
      
      <div>
        <div onPointerMove={handlePointerMove}>
        <div id="blob" ref={blobRef}></div>
        <div id="blur"><Home/></div>
        </div>
        
      </div>  
        
    </>
  );
}
