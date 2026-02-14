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

  const renderIntro = () => {
    return (
      <div>
        <nav>
          <a href="https://leonmaksin.me/" class="h3">leonmaksin.me</a>
        </nav>
        <div class="introduction mt-3">
          <h1>Hello, I'm <a href="#aboutme">Leon</a></h1>
          <p class="mt-3">Welcome, I'm glad you found your way here! 
          I'm a researcher at OpenAI, working on <a href="https://evals.openai.com/" target="_blank" rel="noreferrer">frontier evals</a>.
          I spend most of my time trying to understand the models we train, and care about responsibly achieving superintelligence.
          I was previously @ umich, and like to hike, read, play music, explore parks, play board games, and spend time with my 5 younger siblings.
          I love to create and solve hard problems. But enough talk about myself, I'd rather just show you:</p>
        </div>
      </div>
    )
  }

  const renderClosing = () => {
    return (
      <div id="aboutme" class="closing mt-5">
        <h3>a little more about me [slightly outdated]</h3>
        <p class="mt-3">I was a student at the University of Michigan majoring in Computer Science and Business Administration, 
        and minoring in Mathematics. I've always had an intense passion for creating, and have built anything from rockets 
        to physics simulations to WebGL websites. I also have strong interests in startup, product, growth, software, 
        and innovation in the fields of aerospace, AI, edtech, community-building, music, and want to break down barriers. 
        I strive to create as much as possible, and in my free time, I enjoy reading, exercising, playing card games and chess, 
        and spending time with my five younger siblings. Contact me at <a class="email-link" href="mailto: leonsmaksin@gmail.com">leonsmaksin@gmail.com</a>!</p>
      </div>
    )
  }

  return (
    <div>
      { renderIntro() }
      { cards }
      { renderClosing() }
    </div>
  );
}

export default App;
