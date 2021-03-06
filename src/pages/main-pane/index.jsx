import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Sider from '~/comps/sider'
import Notes from '~/comps/notes'
import NoteSpaces from '~/comps/note-spaces'
import Trash from '~/comps/trash'
import './layout.scss'

export default function MainPane() {
  return (
    <Router>
      <div className='main-pane grid grid-col-24'>
        <Sider />
        <div className='col-22 content-area'>
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
      </div>
    </Router>
  )
}