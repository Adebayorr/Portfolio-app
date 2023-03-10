import React from "react"
import { connects } from "../../../Resources"
import "./Footer.scss"

const Footer = () => {
    return <div
    className="footer"
    id="footer">
      <div className="copyright">
            <p>&copy; copyright: All rights reserved | <span>Bayorr</span></p>
        </div>
       <div className="social-connect">
        <h4>Connect on Socials</h4>
        <div className="stick"></div>
        <div className="platform">
            {connects.map((connect, i) => {
                return (
                    <div key={i}>
                        {connect}
                    </div>
                )
            })}
        </div>
       </div>
    
    </div>

}

export default Footer