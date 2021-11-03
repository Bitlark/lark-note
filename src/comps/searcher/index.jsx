export default function Searcher() {
  return  (
    <div className='searcher'>
      <div className='search-pane'>
        <input placeholder='search here...' />
      </div>
      <div className='filter-pane'>
        <ul>
          <li>Sort</li>
        </ul>
      </div>
    </div>
  )
}