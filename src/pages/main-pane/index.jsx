import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import Sider from '~/comps/sider'
import Editor from '~/comps/editor'
import Notes from '~/comps/notes'
import NoteSpaces from '~/comps/note-spaces'
import Trash from '~/comps/trash'

export default function MainPane() {
  return (
    <Router className='main-pane'>
      <Sider />
      <div className='content-area'>
        <Switch>
          <Route exact path="/notes">
            <Notes />
          </Route>
          <Route exact path="/note-spaces">
            <NoteSpaces />
          </Route>
          <Route exact path="/trash">
            <Trash />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}