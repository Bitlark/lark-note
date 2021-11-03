import {
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

import Searcher from "../searcher"
import Editor from '~/comps/editor'

export default function Notes() {
  let { path, url } = useRouteMatch();

  return  (
    <div className='notes'>
      <Link to={`${url}/create`}><button>新建笔记</button></Link>
      <Link to={`${url}/edit/:noteId`}><button>编辑笔记</button></Link>
      <Searcher />
      <div className='notes-list'>
        <ul>
          <li>A notes   {url}</li>
          <li>B notes</li>
          <li>C notes</li>
        </ul>
      </div>

      <div className='editor-pane'>
        <Switch>
          <Route exact path="/notes/create">
            <>
            new
            <Editor />
            </>
          </Route>
          <Route exact path="/notes/edit/:noteId">
            <>
            edit
            <Editor />
            </>
          </Route>
        </Switch>
      </div>
    </div>
  )
}