import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Sider from '~/comps/sider'
import Notes from '~/comps/notes'
import NoteSpaces from '~/comps/note-spaces'
import Trash from '~/comps/trash'

export default function MainPane() {
  return (
    <Router className='main-pane'>
      <Sider />
      <div className='content-area'>
        <Switch>
          <Route path="/notes">
            <Notes />
          </Route>
          <Route path="/note-spaces">
            <NoteSpaces />
          </Route>
          <Route path="/trash">
            <Trash />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}