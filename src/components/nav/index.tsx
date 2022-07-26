import React from "react"
import { Link } from "react-router-dom";
import './index.css';

interface CommonNavProps {
  currentPage: number;
}

const CommonNav: React.FC<CommonNavProps> = ({ currentPage }) => {
  return <div className="nav">
    <div className="nav-icon">奇云互娱</div>
    <div className="nav-button">
      <Link className={`nav-button-item ${currentPage === 0 && 'nav-button-item-select'}`} to={{ pathname:`/home` }}>首页</Link>
      <Link className={`nav-button-item ${currentPage === 1 && 'nav-button-item-select'}`} to={{ pathname:`/service` }}>产品服务</Link>
      <Link className={`nav-button-item ${currentPage === 2 && 'nav-button-item-select'}`} to={{ pathname:`/privacy` }}>隐私协议</Link>
      <Link className={`nav-button-item ${currentPage === 3 && 'nav-button-item-select'}`} to={{ pathname:`/about` }}>关于我们</Link>
    </div>
  </div>
}

export default CommonNav