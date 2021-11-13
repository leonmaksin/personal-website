import logo from './logo.svg';
import './App.css';
import Card from "./Card.js"
import data from "./data.js"

function App() {
  const cards = data.map(function(cardData) {
    return <Card
      key={cardData.id}
      input={cardData}
    />
  })
  return (
    <div>
      {cards}
    </div>
  );
}

export default App;
