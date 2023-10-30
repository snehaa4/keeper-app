import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateateArea";
import Notes from "./components/Notes";

function App() {
  const [note, setnote] = useState([]);
  function setClick(input) {
    setnote((prevalue) => {
      return [...prevalue, input];
    });
  }

  function HandelDel(id) {
    setnote((prevalue) => {
     return  prevalue.filter((value, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea Add={setClick} />
      {note?.map((todolist, index) => {
        return (
          <Notes
            id={index}
            key={index}
            title={todolist.title}
            content={todolist.content}
            Del={HandelDel}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
