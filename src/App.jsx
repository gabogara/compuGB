import React from "react";
import { FirstComponent } from "./FirstComponent";
import SecondComponent from "./SecondComponent";

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
    </div>
  );
};

export default App;
