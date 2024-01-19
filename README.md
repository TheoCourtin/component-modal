# Modal-Componant

React Modal Component for HRnet - HealthWealth

## Install Component

`npm i test-modal-component-7`

## How use it !

The Modal use props :

- {props.title} : string
- {props.message} : string
- {props.image} : string
- {props.imageContent} : string
- {closeModal} : function

### Example to use :

```
import Modal from "./lib";
import approval from "./assets/approval.png";

function closeModal() {
  alert("Close button clicked");
  // Set to close the modal with a useState ?
}

function App() {
  return (
    <Modal
      title="Successfull"
      message="A new employee has been created to the list."
      image={approval}
      imageContent="Woman with a valid element"
      closeModal={closeModal}
    />
  );
}

export default App;
```