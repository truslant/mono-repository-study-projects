import { useRef } from "react";

import ReactFoodContextProvider from "./context/ReactFoodContextProvider";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Modal from "./components/Modal";


function App() {

  const refToModal = useRef()

  const openDialog = () => {
    refToModal.current.open();
  }

  return (
    <ReactFoodContextProvider>
      <Modal ref={refToModal} />
      <Header openDialog={openDialog} />
      <Meals />
    </ReactFoodContextProvider>
  );
}

export default App;
