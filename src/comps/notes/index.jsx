import {
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import './notes.scss'

import Searcher from "../searcher"
import Editor from '~/comps/editor'

export default function Notes() {
  let { path, url } = useRouteMatch();

  return  (
    <div className='col-16 notes grid grid-col-12'>
      <div className='notes-list-area col-3'>
        <div className='func-buttons'>
          <Link to={`${url}/create`}><button>新建笔记</button></Link>
          <Link to={`${url}/edit/:noteId`}><button>编辑笔记</button></Link>
        </div>
        <Searcher />
        <div className='col-6 notes-list'>
          <ul>
            <li>A notes   {url}</li>
            <li>B notes</li>
            <li>C notes</li>
          </ul>
        </div>
      </div>

      <div className='editor-pane col-9'>
        <Switch>
          <Route exact path="/notes/create">
            <div className='editor-container'>
            new
            <Editor />
            </div>
          </Route>
          <Route exact path="/notes/edit/:noteId">
            <div className='editor-container'>
            edit
            <Editor />
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  )
}