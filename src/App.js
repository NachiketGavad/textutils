import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
      <Navbar title="My Practice react app" aboutText="about"></Navbar>
      <Textform></Textform>
    </>
  );
}

export default App;
