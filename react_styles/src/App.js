
import './App.css';
import Card from './components/card.jsx'


function App() {
  return (
    <div className="App">
      <Card
      price = '300'
      speed = '10'
      />
      <Card
       price = '450'
       speed = '50'
      />
      <Card
       price = '550'
       speed = '100'
      />
      <Card
       price = '1000'
       speed = '200'
      />
    </div>
  );
}

export default App;
