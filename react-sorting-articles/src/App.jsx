import { useState } from 'react'
import './App.css'

import Articles from './components/Articles.Functional.Component'

const title = 'Sorting Articles'

function App({ articles }) {
  const [data, setData] = useState(
    [...articles].sort((a, b) => b.upvotes - a.upvotes)
  )

  const sortedByVotes = () => {
    const copy = [...articles]
    setData(copy.sort((a, b) => b.upvotes - a.upvotes))
  }

  const sortedByDate = () => {
    const copy = [...articles]
    setData(copy.sort((a, b) => new Date(b.date) - new Date(a.date)))
  }

  return (
    <div className='App'>
      <header className='navbar'>{title}</header>

      <div className='navigation'>
        <label className='form-hint'>Sort By</label>
        <button
          data-testid='most-upvoted-link'
          className='small'
          onClick={sortedByVotes}
        >
          Most Upvoted
        </button>
        <button
          data-testid='most-recent-link'
          className='small'
          onClick={sortedByDate}
        >
          Most Recent
        </button>
      </div>

      <Articles articles={data} />
    </div>
  )
}

export default App
