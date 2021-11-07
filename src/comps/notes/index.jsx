import {
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import './notes.scss'

import Searcher from "../searcher"
import Editor from '~/comps/editor'
import SampleCover from '~/assets/sample-note-cover.jpg'

export default function Notes() {
  let { path, url } = useRouteMatch();

  return  (
    <div className='notes border-box col-16 grid grid-col-12'>
      <div className='notes-column col-4'>
        <div className='functions-pane'>
          <Link to={`${url}/create`}><button>新建笔记</button></Link>
          <Link to={`${url}/edit/:noteId`}><button>编辑笔记</button></Link>
        </div>
        <div className='query-pane'>
          <Searcher />
        </div>
        <div className='notes-pane'>
          <ul>
            {[1,2,3,4].map(item => {
              return (
                <li className='note-item'>
                  <div className='title'>测试笔记</div>
                  <div className='subtitle'>摘要部分笔记摘要部分笔记摘要部分笔记摘要部分笔记摘要部分笔记摘要部分笔记</div>
                  <div className='cover'>
                    <img src={SampleCover} alt="" />
                  </div>
                  <div className='datetime'>2021-11-11</div>
              </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className='editor-pane col-8'>
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