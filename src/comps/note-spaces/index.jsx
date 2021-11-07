import Searcher from "../searcher"


export default function NoteSpaces() {
  return  (
    <div className='col-8 note-spaces'>
      <Searcher />
      <div className='note-spaces-list'>
        <ul>
          <li>A book</li>
          <li>B book</li>
          <li>C book</li>
        </ul>
      </div>
    </div>
  )
}