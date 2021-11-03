import { Link } from "react-router-dom";

export default function Sider() {
  return  (
    <div className='sider'>
      <div>logo</div>
      <ul>
        <li>
          <Link to="/notes">笔记</Link>
        </li>
        <li>
          <Link to="/note-spaces">笔记本</Link>
        </li>
        <li>
          <Link to="/trash">垃圾桶</Link>
        </li>
      </ul>

      <div>
        用户*logout
      </div>
    </div>
  )
}