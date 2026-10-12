import { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import './Slides.css'

export default function Slides({ slides }) {
  const [index, setIndex] = useState(0)

  const lastIndex = slides.length - 1
  const isFirst = index === 0
  const isLast = index === lastIndex

  const next = useCallback(
    () => setIndex((i) => Math.min(i + 1, lastIndex)),
    [lastIndex]
  )
  const previous = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), [])
  const restart = useCallback(() => setIndex(0), [])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') previous()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [next, previous])

  if (slides.length === 0) {
    return <p className="text-center">No slides available.</p>
  }

  const { title, text } = slides[index]

  return (
    <section aria-label="Slideshow">
      <nav className="slides-nav text-center" aria-label="Slide navigation">
        <button
          type="button"
          className="btn outlined"
          disabled={isFirst}
          onClick={restart}
          data-testid="button-restart"
        >
          Restart
        </button>
        <button
          type="button"
          className="btn"
          disabled={isFirst}
          onClick={previous}
          data-testid="button-prev"
        >
          Prev
        </button>
        <span className="slides-counter" aria-hidden="true">
          {index + 1} / {slides.length}
        </span>
        <button
          type="button"
          className="btn"
          disabled={isLast}
          onClick={next}
          data-testid="button-next"
        >
          Next
        </button>
      </nav>

      <article className="card text-center" aria-live="polite">
        <h2 data-testid="title">{title}</h2>
        <p data-testid="text">{text}</p>
      </article>
    </section>
  )
}

Slides.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
}
