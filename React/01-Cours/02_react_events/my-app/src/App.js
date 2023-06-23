import logo from './logo.svg';
import './App.css';
import FirstComponent from './Components/FirstComponent/FirstComponent';
import SecondComponent from './Components/SecondComponent/SecondComponent';

function App() {
  const valueFromParent = () => {
    alert('Value from parent')
  }

  const valueFromChild = (value) => {
    alert('Value from child'+ value)
  }

  return (
    <div className="App">
      <FirstComponent />
      <SecondComponent valueFromParent={valueFromParent} ValueFromChild={valueFromChild}/>
    </div>
  );
}

export default App;
