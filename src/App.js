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
          I'm finishing up @ umich and am spending the semester 
          running <a href="https://shiftcreator.space/" target="_blank" rel="noreferrer">Shift</a>, teaching newbies
          for <a href="https://www.bond-consulting.org/" target="_blank" rel="noreferrer">BOND</a>, 
          and gearing up to help teach a course 
          on <a href="https://www.eecs.umich.edu/courses/eecs498.001/" target="_blank" rel="noreferrer">Quantum Computing</a>. 
          I'm also digging deep into music; I learned to play guitar, am making a real-time sound to art piece (coming soon), 
          and will be building a synth instrument with some buddies soon. Throughout, I'm a problem-solver, and I love to create. 
          But instead of talking about myself, I'd rather just show you:</p>
        </div>
      </div>
    )
  }

  const renderClosing = () => {
    return (
      <div id="aboutme" class="closing mt-5">
        <h3>a little more about me</h3>
        <p class="mt-3">I am a student at the University of Michigan majoring in Computer Science and Business Administration, 
        and minoring in Mathematics. I've always had an intense passion for creating, and have built anything from rockets 
        to physics simulations to WebGL websites. I also have strong interests in startup, product, growth, software, 
        and innovation in the fields of aerospace, AI, edtech, community-building, music, and want to break down barriers. 
        I strive to create as much as possible, and in my free time, I enjoy reading, exercising, playing card games and chess, 
        and spending time with my five younger siblings. Contact me at <a class="email-link" href="mailto: lmaksin@umich.edu">lmaksin@umich.edu</a>!</p>
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
