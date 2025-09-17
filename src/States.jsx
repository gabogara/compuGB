import React, { useState } from "react";

const States = () => {
  const [inp, setInp] = useState("");
  const [finalText, setFinalText] = useState("");

  const onHandleChange = (e) => {
    console.log(e.target.value);
    setInp(e.target.value);
  };

  const onHandleKey = (e) => {
    if (e.key === "Enter") {
      setFinalText(inp);
      setInp("");
    }
  };

  return (
    <div>
      <h3>Ingresa nombre y presiona enter</h3>
      <input
        type="text"
        value={inp}
        onChange={onHandleChange}
        onKeyDown={onHandleKey}
        placeholder="Introduce el nombre aqui"
      />
      {finalText && <p>Texto ingresado: {finalText}</p>}
    </div>
  );
};

export default States;
