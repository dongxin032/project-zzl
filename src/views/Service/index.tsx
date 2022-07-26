import React from "react"
import CommonFooter from "../../components/footer"
import CommonNav from "../../components/nav"
import './index.css'

const ServicePage = () => {

  function handleDownload() {
    console.log('zzl下载')
  }

  return (
    <div className="servicePage">
      <CommonNav currentPage={1}/>
      <div className="servicePagePic servicePagePic1">
         {/* 这里写下载逻辑 */}
         <div className="servicePagePicBtn servicePagePicBtn1" onClick={handleDownload}></div>
      </div>
      <div className="servicePagePic servicePagePic2">
         {/* 这里写下载逻辑 */}
         <div className="servicePagePicBtn servicePagePicBtn2" onClick={handleDownload}></div>
      </div>
      <div className="servicePagePic servicePagePic3">
         {/* 这里写下载逻辑 */}
         <div className="servicePagePicBtn servicePagePicBtn3" onClick={handleDownload}></div>
      </div>
      <CommonFooter />
    </div>
  )
}

export default ServicePage