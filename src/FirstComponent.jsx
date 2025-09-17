import React from "react";

export const FirstComponent = () => {
  const books = ["book1", "book2", "book3", "book4"];
  //const books = [];

  return (
    <div>
      {books.length >= 1 ? (
        <ul>
          {books.map((book, indice) => {
            return <li key={indice}>{book}</li>;
          })}
        </ul>
      ) : (
        <p> No hay libros </p>
      )}
    </div>
  );
};

export default FirstComponent;
