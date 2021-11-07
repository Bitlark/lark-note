import { Link } from "react-router-dom";
import './sider.scss';
import Brand from '~/logo.svg?component'

export default function Sider() {
  return  (
    <div className='col-2 sider'>
      <div className='logo'>
        <Brand />
      </div>
      <ul>
        <li>
          <Link className='nav-link'  to="/notes">笔记</Link>
        </li>
        <li>
          <Link className='nav-link'  to="/note-spaces">笔记本</Link>
        </li>
        <li>
          <Link className='nav-link'  to="/trash">垃圾桶</Link>
        </li>
      </ul>

      <div>
        用户*logout
      </div>
    </div>
  )
}