import Searcher from "../searcher"


export default function Notes() {
  return  (
    <div className='notes'>
      <Searcher />
      <div className='notes-list'>
        <ul>
          <li>A notes</li>
          <li>B notes</li>
          <li>C notes</li>
        </ul>
      </div>
    </div>
  )
}