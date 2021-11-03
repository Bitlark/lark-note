import React from 'react'
import './not-found.scss'
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      Lark Note 404
      <Link to={'/'}><button>返回首页</button></Link>
    </div>
  )
}
