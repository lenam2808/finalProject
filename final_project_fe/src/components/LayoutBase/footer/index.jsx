import React from "react"
import classes from "./Footer.module.scss"
import { FacebookIcon, LinkedinIcon, MessageIcon } from "icons"
const Footers = () => {
 return (
  <div className={classes.container}>
   <div className={classes.headFooter}>
    <div className={classes.headFooter_company}>
     {/* <div className={classes.logo}>
      <img className={classes.logoHeader} src="" alt="" />
      T-Hex store
     </div> */}
     <div className={classes.headFooter_company_name}>
      CÔNG TY TNHH T-Hex VIỆT NAM Địa chỉ trụ sở chính:
     </div>
     <div className={classes.headFooter_company_address}>
      Số 3 - Nam Từ Liêm - Hà Nội
     </div>
    </div>
    <div className={classes.headFooter_introduce}>
     <div className={classes.headFooter_introduce_title}>
      MỌI THỨ, MUA MỌI THỨ TẠI T-HEX STORE
     </div>
     <ul>
      <li>MUA CÔNG NGHỆ CAO GIÁ TỐT TẠI T-HEX STORE</li>
      <li>MUA HÀNG CHÍNH HÃNG TỪ CÁC THƯƠNG HIỆU LỚN CÙNG T-HEX STORE</li>
      <li>MUA BÁN TRỰC TUYẾN ĐƠN GIẢN, NHANH CHÓNG VÀ AN TOÀN</li>
     </ul>
    </div>
    <div className={classes.headFooter_contact}>
     <div>Liên hệ: 096 4644813</div>
     <div>Email: lenam28082000@gmail.com</div>
    </div>
   </div>
   <div className={classes.policy}>
    <div>Bản quyền thuộc về T-Hex</div>
    <div className={classes.policy_icons}>
     <FacebookIcon />
     <LinkedinIcon />
     <MessageIcon />
    </div>
   </div>
  </div>
 )
}

export default Footers
