import './App.css';
import {useState} from "react";

function App() {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }
  return (
    <div className="App">
    {!modal && <button className="open" onClick={toggleModal}>Open Modal</button>}
    {modal && (
      <div className="modal">
      <button className="close" onClick={toggleModal}>X</button>
       <h1 className="header"> Modal</h1>
      <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</p>
      </div>
      )}
    </div>
  );
}

export default App;
