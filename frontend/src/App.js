import Button from './components/Button/Button.js';
import Input from './components/Input/Input.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Input">
        <Input type="text" />
      </div>
      <div className="Button">
        <Button name="done" />
      </div>
    </div>
  );
}

export default App;
