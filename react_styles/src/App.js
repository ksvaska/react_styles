
import './App.css';
import Card from './components/Card/card.jsx';
import themeBlue from "./components/themeBlue.module.css";
import themeRed from "./components/themeRed.module.css";
import themeGreen from './components/themeGreen.module.css';
import themeBlack from './components/themeBlack.module.css';



function App() {

  return (
    <div className="App">
      <Card
      price = '300'
      speed = '10'
      theme={themeBlue}
     

      />
      <Card
       price = '450'
       speed = '50'
       theme={themeGreen}
       
     
      />
      <Card
       price= '550'
       speed = '100'
       theme={themeRed}
       selected={true}
      />
      <Card
       price = '1000'
       speed = '200'
       theme={themeBlack}
      
      />
    </div>
  );

}

export default App;
