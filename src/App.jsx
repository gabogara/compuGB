import React from "react";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import Eventos from "./components/Eventos";

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
    </div>
  );
};

export default App;
