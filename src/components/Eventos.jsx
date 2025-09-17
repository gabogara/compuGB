import React from "react";

const Eventos = () => {
  const handleClick = (event) => {
    console.log(event.target.value);
  };
  const handleDoubleClick = (e, usuario) => {
    console.log(e.target.value);
    console.log("Buen trabajo" + usuario);
  };
  return (
    <div>
      <h3>Eventos</h3>
      <button onClick={(e) => handleClick(e, "Usuario")} value="click">
        Clic Aqui
      </button>

      <button
        onDoubleClick={(e) => handleDoubleClick(e, "usuario")}
        value="DoubleClick"
      >
        Double click
      </button>
    </div>
  );
};

export default Eventos;
