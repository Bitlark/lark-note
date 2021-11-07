import './searcher.scss'

export default function Searcher() {
  return  (
    <div className='searcher border-box'>
      <div className='search-pane'>
        <input className='lark-input' placeholder='搜索...' />
      </div>
      <div className='filter-pane'>
        <ul>
          <li className='order-query'>
            <div className='order-item'>
              <input type="radio" id="huey" name="drone" value="huey"
                    checked />
              <label for="huey">升序</label>
            </div>
            <div  className='order-item'>
              <input type="radio" id="dewey" name="drone" value="dewey" />
              <label for="dewey">降序</label>
            </div>
          </li>
          <li className='order-query'>
            <div className='order-item'>
              <input type="radio" id="huey" name="drone" value="huey"
                    checked />
              <label for="huey">升序</label>
            </div>
            <div  className='order-item'>
              <input type="radio" id="dewey" name="drone" value="dewey" />
              <label for="dewey">降序</label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}