import React from "react";
import PropTypes from "react";

export const SecondComponent = ({ persona: { nombre, apellido } }) => {
  const nombres = ["Juan", "Pedro", "Jose"];
  return (
    <div>
      <h2>
        Hola: {nombre},{apellido}
      </h2>
      {nombres.length >= 1 ? (
        <ul>
          {nombres.map((nombre, indice) => {
            return <li key={indice}>{nombre}</li>;
          })}
        </ul>
      ) : (
        <p>No hay nombres</p>
      )}
    </div>
  );
};

export default SecondComponent;

SecondComponent.propTypes = {
  nombre: PropTypes.string,
  apellido: PropTypes.stringisRequired,
};
