import React from "react"
import "./Homepage.scss"
import pp1 from "../../../assets/pp1.png"


const Homepage = () => {
    return <div
    className="wrapper"
    id="homepage">        
        <div className="me">
        <img src={pp1} alt="profile-shot"></img>
        </div>
        <div className="desc">
            {/* looking for a web-developer with creative ideas, a keen eye for detail, 
            and the technical know-how to bring your project to life? Then you’ve come to the right place.  */}
            <h3 className="name">
                Hi! I'm <span>Bayorr</span>
            </h3>
        </div>
        <article className="title">
            Webflow Developer/Web Developer
        </article>
        <article className="subtitle">
            technical Know-how <br/>
            Bring life to your project <br />
            You're in the right place
        </article>
        <a href="contact">
            Hit Me Up!
        </a>
        <div className="web">Web Developer</div>
        <div className="ui">Webflow Designer</div>
        <div className="web">Freelancer</div>
    </div>

}

export default Homepage