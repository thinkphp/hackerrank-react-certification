import PropTypes from 'prop-types'
import './App.css'
import Slides from './components/Slides'

const TITLE = 'Slideshow App'

function App({ slides }) {
  return (
    <>
      <header className="navbar">
        <h1>{TITLE}</h1>
      </header>
      <main className="App">
        <Slides slides={slides} />
      </main>
    </>
  )
}

App.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default App
