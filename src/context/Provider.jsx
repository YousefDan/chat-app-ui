import { useState } from "react";
import Context from "./context";
import {toast} from "react-toastify"

const Provider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [openChatroom, setOpenChatroom] = useState(false);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      return toast.error("Username is required") ;
    }
    if (room.trim() === "") {
      return toast.error("Select A Room Please") ;
    }
    console.log({ username, room });
    setOpenChatroom(true);
  };

  return (
    <Context.Provider
      value={{
        username,
        room,
        openChatroom,
        setUsername,
        setRoom,
        setOpenChatroom,
        formSubmitHandler,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
