import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = () => {
  const el = useRef(null);   
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Compete", "Code", "Collab"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <h1 className="text-3xl inline-block">
      <span ref={el} className="typed-cursor gradient_text font-[Miniver] font-[400] "></span>
    </h1>
  );
};

export default TypedText;
