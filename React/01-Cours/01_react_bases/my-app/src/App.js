import logo from './logo.svg';
import './App.css';
import FirstComponent from './Components/FirstComponent/FirstComponent';
import SecondComponent from './Components/SecondComponent/SecondComponent';
import ThirdComponent from './Components/ThirdComponent/ThirdComponent';



function App() {
  let myText = "Blabla"
  const image = {src : "https://campusnumerique.auvergnerhonealpes.fr/app/uploads/2021/10/logo-M2i.png", alt:"Logo"}
  const dogs = [
    {
      name: "Rex",
      breed: "German Shepard",
      age: 7
    },
    {
      name: "Lassi",
      breed: "Colley",
      age: 10
    },
    {
      name: "Milou",
      breed: "Fox-Terrier",
      age: 4
    }
  ]


  return (
    <div className="App">
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent myText={myText}/>
      <ThirdComponent myText={myText} image={image} dogs={dogs}/>
    </div>
  );
}

export default App;
