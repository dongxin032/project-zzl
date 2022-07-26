import React from "react"
import CommonFooter from "../../components/footer"
import CommonNav from "../../components/nav"
import './index.css'

const HomePage = () => {

  function handleDownload() {
    console.log('zzl下载')
  }

  return (
    <div className="homePage">
      <CommonNav currentPage={0}/>
      <div className="homePagePic">
        {/* 这里写下载逻辑 */}
        <div className="homePagePicBtn" onClick={handleDownload}></div>
      </div>
      <CommonFooter />
    </div>
  )
}

export default HomePage