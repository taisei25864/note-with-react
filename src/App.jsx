import Main from "./components/main";
import Sidebar from "./components/sidebar";
import { Flex, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { useState, useEffect } from "react"; 
import {v4 as uuid} from "uuid";

function App() {

  const [activeNote, setActiveNote] = useState(false);

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);

  useEffect(() => {
    //ローカルストレージにノートを保存する
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes])

  const onDelete = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  }

  const onAddNotes = () => {
    const newNote = {
      id: uuid(),
      title: "新しい本の名前",
      content: "本の内容",
      modDate: Date.now()
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  }

  const updatedNote = (newNote) => {
    const updatedNotesArray = notes.map((note) => {
      if(note.id === newNote.id) {
        return newNote;
      } else {
        return note;
      }
    })
    setNotes(updatedNotesArray);
  }

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote)
  }

  return (
    <ChakraProvider theme={theme}>
      <Flex className="App">
        <Sidebar 
          onAddNotes={onAddNotes}
          notes={notes}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
        <Main 
          activeNote={getActiveNote()}
          updatedNote={updatedNote}
          onDelete={onDelete}
        />
      </Flex>
    </ChakraProvider>
  )
}

export default App
