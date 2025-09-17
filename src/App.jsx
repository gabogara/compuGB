import React from "react";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import Eventos from "./components/Eventos";
import States from "./States";

const App = () => {
  const persona = {
    nombre: "Gabriel",
    apellido: "Restrepo",
  };
  return (
    <div>
      <h1>Bienvenido</h1>
      <FirstComponent />
      <SecondComponent persona={persona} />
      <Eventos />
      <States />
    </div>
  );
};

export default App;
