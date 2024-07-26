import { useState } from "react";
import ColorPicker from "./ColorPicker";
import Counter from "./Counter";
import Modal from "./Modal";
import ToDoList from "./ToDoList";
import UncontrolledForm from "./UncontrolledForm";
import ControlledForm from "./ControlledForm";
import ExampleForm from "./useIdForm/ExampleForm";
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* <Counter /> */}

      {/* <ColorPicker /> */}

      {/* <ToDoList /> */}

      {/* <button onClick={handleOpen}>Open modal</button>
      {isOpen && (
        <Modal handleClose={handleClose}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero sunt
          nulla sint nesciunt aliquam mollitia magnam perferendis! Iste dolore,
          nam, explicabo dicta ducimus voluptates quia recusandae fugiat
          reprehenderit dignissimos aperiam.
        </Modal>
      )} */}

      {/* <UncontrolledForm /> */}
      {/* <ControlledForm /> */}
      <ExampleForm />
    </>
  );
};

export default App;
