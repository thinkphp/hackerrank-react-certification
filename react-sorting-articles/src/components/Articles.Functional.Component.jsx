const Articles = ({ articles }) => {
  return (
    <div className='card'>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {articles.length > 0 &&
            articles.map((art) => (
              <tr data-testid='article' key={art.title}>
                <td data-testid='article-title'>{art.title}</td>
                <td data-testid='article-upvotes'>{art.upvotes}</td>
                <td data-testid='article-date'>{art.date}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Articles
