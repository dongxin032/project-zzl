import React from "react"
import CommonFooter from "../../components/footer"
import CommonNav from "../../components/nav"
import './index.css'

const AboutPage = () => {
  return (
    <div className="aboutPage">
      <CommonNav currentPage={3}/>
      <div className="aboutPageContent">
        <div className="aboutPageContentTitle">关于我们</div>
        <div className="aboutPageContentDesc">北京奇云互娱科技有限公司，成立于2022年6月，由7个热血打拼的年轻人组建而成，我们怀着共同的激情与梦想，组织了一支钢铁团队。我们有理想，但不是空想。我们有野心，但不浮躁。奇云无限创想，拒绝平庸。
我们相信：今天付出，明天收获，全力以赴，事业辉煌。</div>
        <div className="aboutPageContentPic1">
          <div className="aboutPageContentPic1Title">北京奇云互娱科技有限公司</div>
          <div className="aboutPageContentPic1Desc">电话：010-99999999</div>
          <div className="aboutPageContentPic1Desc">邮箱：99999999@qq.com</div>
        </div>
      </div>
      <CommonFooter />
    </div>
  )
}

export default AboutPage