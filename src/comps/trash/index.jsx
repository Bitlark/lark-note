import Searcher from "../searcher"


export default function Trash() {
  return  (
    <div className='trash'>
      <Searcher />
      <div className='trash-list'>
        <ul>
          <li>A trash</li>
          <li>B trash</li>
          <li>C trash</li>
        </ul>
      </div>
    </div>
  )
}